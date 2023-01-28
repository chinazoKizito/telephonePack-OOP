// Observer Design Pattern (Javascript)


class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
  }

  addPhoneNumber(phoneNumberDetails) {
    this.phoneNumbers.add(phoneNumberDetails);
  }

  removePhoneNumber(phoneNumberDetails) {
    this.phoneNumbers.delete(phoneNumberDetails);
  }

  dialPhoneNumber(phoneNumberDetails) {
    if (this.#checkForNumber(phoneNumberDetails)) {
      let transmission = {
        transmissionType: "dial",
        reciever: phoneNumberDetails.phoneNumber,
        output: "Dialing",
      };

      for (let observer of this.phoneNumbers) {
        if (observer.phoneNumber === transmission.reciever) {
          observer.recievePhonecall(transmission);
        }
      }
    } else if (typeof (phoneNumberDetails) === 'object') {
      console.log(`${phoneNumberDetails.phoneNumber} does not exist in our directory!, Please cross check and try again`);
    } else {
      console.log(`${phoneNumberDetails} does not exist in our directory!, Please cross check and try again`);
    }
  }

  //Private Method for veryfing phonenumber
  #checkForNumber(phoneNumberDetails) {
    if (this.phoneNumbers.has(phoneNumberDetails)) {
      return true;
    } else {
      return false;
    }
  }

}


class Observer {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  recievePhonecall(transmission) {
    if (transmission.transmissionType === "dial" && transmission.reciever === this.phoneNumber) {
      console.log(transmission.output + " " + this.phoneNumber);
    }
  }
}


const telephone = new Telephone();
const line1 = new Observer('090344299');
const line2 = new Observer('23470232232');

telephone.addPhoneNumber(line1);
telephone.addPhoneNumber(line2);

console.log(line1.phoneNumber);
telephone.dialPhoneNumber(line2);




