"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webserver_prepare = void 0;
const authorized_controls_1 = require("../models/webserver/authorized_controls");
const authorized_mail_users_1 = require("../models/webserver/authorized_mail_users");
const mail_contents_1 = require("../models/webserver/mail_contents");
const mail_ignore_subjects_1 = require("../models/webserver/mail_ignore_subjects");
const mail_ignores_1 = require("../models/webserver/mail_ignores");
const saved_control_commands_1 = require("../models/webserver/saved_control_commands");
const webserver_prepare = (webserver_connection) => {
    if (typeof webserver_connection === 'undefined') {
        throw new Error('no connection in webserver_prepare');
    }
    (0, authorized_controls_1.authorized_controls)(webserver_connection);
    (0, authorized_mail_users_1.authorized_mail_users)(webserver_connection);
    (0, mail_contents_1.mail_contents)(webserver_connection);
    (0, mail_ignore_subjects_1.mail_ignore_subjects)(webserver_connection);
    (0, mail_ignores_1.mail_ignores)(webserver_connection);
    (0, saved_control_commands_1.saved_control_commands)(webserver_connection);
};
exports.webserver_prepare = webserver_prepare;
