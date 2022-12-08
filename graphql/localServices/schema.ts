export const typeDefs = `#graphql
    input LocalizedStringInput {
        en: String
        it: String
    }

    input PollInput {
        key: String!
        question: LocalizedStringInput!
        options: [PollOptionInput!]!
        isFreeText: Boolean
    }

    input PollOptionInput {
        value: String!
        label: LocalizedStringInput!
    }

    input PollVoteInput {
        value: String!
        votedAt: String!
    }

    type LocalizedString {
        en: String
        it: String
    }
    
    type Poll {
        key: String!
        question: LocalizedString!
        options: [PollOption!]!
        isFreeText: Boolean!
        votes: [PollVote!]!
        totalVotes: Int!
    }

    type PollOption {
        value: String!
        label: LocalizedString!
        votes: Int!
    }

    type PollVote {
        value: String!
        votedAt: String!
    }

    type Query {
        allPolls: [Poll!]
        poll(key: String!): Poll
    }

    type Mutation {
        createPoll(poll: PollInput!): ID!
        updatePoll(key: String!, poll: PollInput!): ID!
        voteOnPoll(key: String!, vote: PollVoteInput!): ID!
    }
`;
