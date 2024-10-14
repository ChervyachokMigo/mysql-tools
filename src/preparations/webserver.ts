import { Sequelize } from "sequelize";

import { authorized_controls } from "../models/webserver/authorized_controls";
import { authorized_mail_users } from "../models/webserver/authorized_mail_users";
import { mail_contents } from "../models/webserver/mail_contents";
import { mail_ignore_subjects } from "../models/webserver/mail_ignore_subjects";
import { mail_ignores } from "../models/webserver/mail_ignores";
import { saved_control_commands } from "../models/webserver/saved_control_commands";

export const webserver_prepare = ( webserver_connection: Sequelize | undefined ) => {
	
	if (typeof webserver_connection === 'undefined') {
		throw new Error('no connection in webserver_prepare');
	}

	authorized_controls(webserver_connection);
	authorized_mail_users(webserver_connection);
	mail_contents(webserver_connection);
	mail_ignore_subjects(webserver_connection);
	mail_ignores(webserver_connection);
	saved_control_commands(webserver_connection);

}