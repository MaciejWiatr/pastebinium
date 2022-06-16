import { ApolloServer, gql } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import BookResolvers from "./src/resolvers/Book";
import { DateTimeTypeDefinition } from "graphql-scalars";
import PasteResolvers from "./src/resolvers/Paste";

const prisma = new PrismaClient();

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
	# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

	# This "Book" type defines the queryable fields for every book in our data source.
	type Book {
		id: Int
		title: String
		author: String
	}

	type Paste {
		id: Int
		createdAt: DateTime
		updatedAt: DateTime
		published: Boolean
		title: String
		hasPassword: Boolean
		passwordHash: String
		content: String
	}

	type Query {
		books: [Book]
		book(id: Int!): Book
		pastes: [Paste]
		paste(id: Int!, password: String): Paste
	}

	type Mutation {
		addBook(title: String!): Book
		addPaste(
			title: String!
			content: String!
			hasPassword: Boolean!
			password: String
		): Paste
	}
`;

const resolvers = {
	Query: {
		books: BookResolvers.queries.all,
		book: BookResolvers.queries.single,
		pastes: PasteResolvers.getAll,
		paste: PasteResolvers.getById,
	},
	Mutation: {
		addBook: BookResolvers.mutations.addBook,
		addPaste: PasteResolvers.addNew,
	},
};

const server = new ApolloServer({
	typeDefs: [DateTimeTypeDefinition, typeDefs],
	resolvers,
	csrfPrevention: false,
	cors: {
		origin: "*",
	},
});

// The `listen` method launches a web server.

server.listen().then(({ url }: { url: string }) => {
	console.log(`🚀  Server ready at ${url}`);
});
