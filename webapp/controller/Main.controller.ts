import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import { email, minLength, object, type Output, parse, string } from 'valibot'; // 0.76 kB


/**
 * @namespace modules.test.controller
 */
export default class Main extends BaseController {
	public sayHello(): void {
		MessageBox.show("Hello World!");
		// Create login schema with email and password
		const LoginSchema = object({
			email: string([email()]),
			password: string([minLength(8)]),
		});
	}
}
