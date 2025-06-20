import type { SystemUser } from "../pages/admin/UserManagement";
import type { ContactUsers } from "../scenes/contacts";


export const mockDataSystemUsers: SystemUser[] = [ 
    {
        id: 1,
        name: "Belizardo Valdez",
        email: "belizardovaldez@gmail.com",
        age: 20,
        phone: "09123456789",
        access: "School Admin",
      },
      {
        id: 2,
        name: "John Ray Escarlan",
        email: "escarlanjohnray@gmail.com",
        age: 20,
        phone: "09123456789",
        access: "Student",
      },
       {
        id: 3,
        name: "Ivan Dancil",
        email: "ivanbdancil@gmail.com",
        age: 20,
        phone: "09123456789",
        access: "Teacher",
      },
     
];

export const mockDataContacts: ContactUsers[] = [
  {
      id: 1,
      name: "Charles Ryan Montecina",
      email: "charlesmontecina@gmail.com",
      age: 20,
      phone: "09123456789",
      address: "Tacloban City",
      province: "Leyte",
      zipCode: "6510",
      registrarId: "12345",
    },
    {
      id: 2,
      name: "John Ray Escarlan",
      email: "escarlanjohnray@gmail.com",
      age: 20,
      phone: "09123456789",
      address: "Tacloban City",
      province: "Leyte",
      zipCode: "6510",
      registrarId: "67890",
    },
    {
      id: 3,
      name: "Jam Kenneth Lagrosa",
      email: "jamkennethlagrosa@gmail.com",
      age: 20,
      phone: "09123456789",
      address: "Tacloban City",
      province: "Leyte",
      zipCode: "6510",
      registrarId: "23456",
    },
    {
      id: 4,
      name: "Belizardo Valdez",
      email: "belizardovaldez@gmail.com",
      age: 20,
      phone: "09123456789",
      address: "Tacloban City",
      province: "Leyte",
      zipCode: "6510",
      registrarId: "45678",
    },
   
];