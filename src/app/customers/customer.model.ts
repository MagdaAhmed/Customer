export class Customer {
  public code: number;
  public name: string;
  public address: string;
  public gender: string;
  public accountNumber: number;
  public contractDate: string;

  constructor(code: number, name: string, address: string, gender: string, accountNumber: number, contractDate: string) {
    this.code = code;
    this.name = name;
    this.address = address;
    this.gender = gender;
    this.accountNumber = accountNumber;
    this.contractDate = contractDate;
  }
}
