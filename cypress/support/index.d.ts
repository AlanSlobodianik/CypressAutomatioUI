declare namespace Cypress {
        interface Chainable<Subject = any> {
            login(userName: string, password: string): Chainable<void>;
            readingXlsx(file: any):any;
            apiLogin(email: string, password: string): Chainable<void>;
        }
    }
