import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  tickets: any;
  employees: any;

  createDb() {

    // Store the tickets data to mock the database
    const tickets = [
      {
        id: 1,  
        subject: 'Urgent Request',
        name: 'John Appleseed',
        email: 'john@appleseed.com',
        type: 1,
        urgency: 1,
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor pharetra urna non pellentesque. Morbi fringilla, turpis non ultricies condimentum, odio ante congue mi, nec pretium ante mi eu enim. Aliquam erat volutpat. Mauris mattis ornare quam eget ullamcorper. Morbi fringilla vestibulum metus, ac sagittis velit ultricies et. Fusce a nisi feugiat, volutpat sapien vitae, scelerisque tortor. Sed interdum neque felis. Donec et nibh sed velit tempus tristique eget non erat. Quisque posuere, nisi eu vehicula iaculis, ante tortor luctus dui, sit amet dignissim dolor risus ac neque. Vestibulum ut arcu venenatis, convallis turpis eget, scelerisque tellus. Nulla ut sem eget metus fringilla porta at at purus. Duis nec placerat libero. Nulla auctor fringilla libero, at tincidunt lectus auctor in.',
        isCompleted: false
      },
      {
        id: 2,
        subject: 'Can you do that?',
        name: 'Petra Byrd',
        email: 'petra@byrd.com',
        type: 2,
        urgency: 3,
        message: 'Maecenas malesuada nisi vel ipsum dictum, vel facilisis purus dictum. Sed posuere dui sapien, a volutpat velit porta vitae. Nam ipsum augue, venenatis vitae egestas a, auctor ac nibh. Mauris maximus pellentesque mauris et tempor. Vestibulum tincidunt vitae arcu sed maximus. In quis lobortis est. Suspendisse rhoncus, tortor ut gravida pellentesque, lacus nisi cursus justo, sit amet ornare nulla sem quis justo. Sed eget dolor lacus.',
        isCompleted: true
      }
    ];
    this.tickets = tickets;

    // Store the emplyees data to mock the database
    const employees = [
      {
        id: 1,          
        name: 'Bruce Wayne',
        email: 'bruce@gotham.com',
        password: 'selina',
      },
      {
        id: 2,
        name: 'Roger Rabbit',
        email: 'rabbit@toontown.com',
        password: 'nautilus',
      }
    ];


    this.employees = employees;
    return { tickets, employees };
  }

}
