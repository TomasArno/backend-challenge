import Transaction from "../repositories/transaction.rep";

import TransactionDTO from "../dto/transaction.dto";

import validateInput from "../utils/classValidator.util";

class TransactionService {
  static async create(data) {
    try {
      const transactionsValidated = data.transactions.map(
        async (transaction) => await validateInput(transaction, TransactionDTO)
      );

      await Transaction.save(await Promise.all(transactionsValidated));
    } catch (error) {
      throw error;
    }
  }

  static async findAll(query) {
    try {
      return await Transaction.find(query);
    } catch (error) {
      throw error;
    }
  }

  static async getMovementsByPeriod() {
    try {
      return await Transaction.getMovementsByPeriod();
    } catch (error) {
      throw error;
    }
  }

  static async findById(id) {
    try {
      return await Transaction.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id, data) {
    try {
      const result = await validateInput(data, TransactionDTO);

      return await Transaction.update({ id }, result);
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id) {
    try {
      await Transaction.delete({ id });
    } catch (error) {
      throw error;
    }
  }
}

export default TransactionService;
