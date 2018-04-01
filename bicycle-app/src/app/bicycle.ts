export class Bicycle {
  _id: number;
  imgUrl: string;
  Title: string;
  Description: string;
  Price: number;
  Location: string;
  Owner: {
    Oid: Number;
    Name: String;
    Email: String;
  }
}
