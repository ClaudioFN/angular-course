export class Feedback {
    firstname: string;
    lastname: string;
    telnum: number;
    email: string;
    agree: boolean;
    contacttype: string;
    message: string;
    commentname: string;
}

export const ContactType = ['None', 'Telephone', 'Email', 'Letter'];