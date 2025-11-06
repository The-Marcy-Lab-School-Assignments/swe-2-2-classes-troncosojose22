class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  getPerimeter () {
    return 2 * (this.length + this.width);
  }
  isSquare() {
    return this.length === this.width ? true : false;
  }
}

class Vehicle {
  passengers = [];

  constructor(type, capacity, color = 'black') {
    this.type = type;
    this.capacity = capacity;
    this.color = color;
  }
  paint(color) {
    this.color = color;
    return this.color;
  }
  addPassenger(passenger) {
    if (this.passengers.length === this.capacity) return -1;
    this.passengers.push(passenger);
    return this.passengers.length;
  }
}

class PasswordManager {
    #password;
    constructor(password) {
      this.#password = password;
    }
    checkPassword(attempt) {
      return attempt === this.#password ? true : false;
    }
    setPassword(oldPassword, newPassword) {
      if (oldPassword !== this.#password) return false;
      this.#password = newPassword;
      return true;
    }
}

class TodoList {
  #todoItems = [];
  constructor(title) {
    this.title = title;
  }
  addItem(description){
    this.#todoItems.push(description);
    return this.#todoItems.length;
  }
  removeItem(description) {
    let itemIndex = this.#todoItems.indexOf(description);
    if (itemIndex === -1) return null;
    this.#todoItems.splice(itemIndex, 1);
    return description;
  }
  getItems() {
    return [...this.#todoItems];
  }
}

class BankAccount {
  #balance;
  static #totalBalance = 0;
  constructor(firstName, lastName, balance = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#balance = balance;
    BankAccount.#totalBalance += balance;
  }
  deposit(amount) {
    this.#balance += amount;
    BankAccount.#totalBalance += amount;
    return this.showBalance();
  }
  withdraw(amount) {
    if (amount > this.#balance) return `You do not have enough funds.`;
    this.#balance -= amount;
    BankAccount.#totalBalance -= amount;
    return `Your balance is $${this.#balance.toFixed(2)}.`;
  }
  showBalance() {
    return `Your balance is $${this.#balance.toFixed(2)}`;
  }
  static getTotalHoldings() {
    return BankAccount.#totalBalance;
  }
}

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
