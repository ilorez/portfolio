declare module 'nodemailer' {
  export interface TransportOptions {
    host?: string;
    port?: number;
    secure?: boolean;
    auth?: { user: string; pass: string };
  }

  export interface Transporter {
    sendMail(mailOptions: {
      from?: string;
      to: string;
      replyTo?: string;
      subject: string;
      text?: string;
    }): Promise<unknown>;
  }

  export function createTransport(options: TransportOptions): Transporter;
}
