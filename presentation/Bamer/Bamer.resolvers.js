/**
 * Resolver for the connection between Bamer and other model
 *
 * @flow
 */

const BookLoader = require('../../business/book');

module.exports = {
  Bamer: {
    /**
     * Resolve the connection of the books currently borrowed by one bamer
     * 
     * @param {Bamer} bamer 
     * @param {Context} ctx 
     * @returns 
     */
    booksCurrentlyBorrowed(bamer: BamerDBType, _: {}, ctx: ContextType) {
      return BookLoader.loadByBorrowing(ctx, bamer.id);
    },
  },
};
