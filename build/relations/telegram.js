"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegram_defines = void 0;
const sended_map_1 = require("../mysql_models/telegram/sended_map");
const download_map_1 = require("../mysql_models/telegram/download_map");
const not_found_map_1 = require("../mysql_models/telegram/not_found_map");
const long_map_1 = require("../mysql_models/telegram/long_map");
const tg_file_1 = require("../mysql_models/telegram/tg_file");
const beatmap_id_1 = require("../mysql_models/beatmaps/beatmap_id");
const telegram_defines = (telegram_connection, beatmap_connection) => {
    if (typeof telegram_connection === 'undefined' || typeof beatmap_connection === 'undefined') {
        throw new Error('no connection in telegram_defines');
    }
    const model = {
        sended_map: (0, sended_map_1.sended_map)(telegram_connection),
        download_map: (0, download_map_1.download_map)(telegram_connection),
        not_found_map: (0, not_found_map_1.not_found_map)(telegram_connection),
        long_map: (0, long_map_1.long_map)(telegram_connection),
        tg_file: (0, tg_file_1.tg_file)(beatmap_connection),
        beatmap_id: (0, beatmap_id_1.beatmap_id)(beatmap_connection)
    };
    model.tg_file.hasMany(model.beatmap_id, { foreignKey: 'beatmapset_id', foreignKeyConstraints: false });
    /*const sended_map_db = connection.define ('sended_map', {
        beatmapset_id: { type: DataTypes.INTEGER },
    });

    const map_to_download_db = connection.define ('map_to_download', {
        beatmapset_id: { type: DataTypes.INTEGER },
    });

    const map_not_found = connection.define ('bancho_not_found', {
        beatmapset_id: { type: DataTypes.INTEGER },
    });

    const map_too_long = connection.define ('map_too_long', {
        beatmapset_id: { type: DataTypes.INTEGER },
    });

    const tg_file = connection.define ('tg_file', {
        beatmapset_id: {type: DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true},
        message_id: {type: DataTypes.INTEGER, allowNull: true}
    }, {noPrimaryKey: false});

    tg_file.hasMany(osu_beatmap_id, { foreignKey: 'beatmapset_id',  foreignKeyConstraints: false});
    
    add_model_names({ names: 'tg_file', model: tg_file });
    
    add_model_names({ names: 'sended_map_db', model: sended_map_db });
    add_model_names({ names: 'map_to_download_db', model: map_to_download_db });
    add_model_names({ names: 'map_not_found', model: map_not_found });
    add_model_names({ names: 'map_too_long', model: map_too_long });*/
};
exports.telegram_defines = telegram_defines;
