"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beatmaps_prepare = void 0;
const beatmaps_md5_1 = require("../models/beatmaps/beatmaps_md5");
const beatmap_id_1 = require("../models/beatmaps/beatmap_id");
const beatmap_info_1 = require("../models/beatmaps/beatmap_info");
const beatmap_pp_1 = require("../models/beatmaps/beatmap_pp");
const beatmap_star_1 = require("../models/beatmaps/beatmap_star");
const beatmaps_prepare = (connection) => {
    if (typeof connection === 'undefined') {
        throw new Error('no connection in beatmaps_prepare');
    }
    const model = {
        beatmap_md5: (0, beatmaps_md5_1.beatmap_md5)(connection),
        beatmap_id: (0, beatmap_id_1.beatmap_id)(connection),
        beatmap_info: (0, beatmap_info_1.beatmap_info)(connection),
        beatmap_pp: (0, beatmap_pp_1.beatmap_pp)(connection),
        beatmap_star: (0, beatmap_star_1.beatmap_star)(connection),
    };
    model.beatmap_md5.hasOne(model.beatmap_id, { foreignKey: 'md5', foreignKeyConstraint: false });
    model.beatmap_md5.hasOne(model.beatmap_info, { foreignKey: 'md5', foreignKeyConstraint: false });
    model.beatmap_md5.hasOne(model.beatmap_star, { foreignKey: 'md5', foreignKeyConstraint: false });
    model.beatmap_id.hasOne(model.beatmap_info, { foreignKey: 'md5', foreignKeyConstraint: false });
    model.beatmap_id.hasOne(model.beatmap_star, { foreignKey: 'md5', foreignKeyConstraint: false });
    model.beatmap_info.hasOne(model.beatmap_star, { foreignKey: 'md5', foreignKeyConstraint: false });
    model.beatmap_md5.hasMany(model.beatmap_pp, { foreignKey: 'md5', foreignKeyConstraint: false });
    model.beatmap_id.hasMany(model.beatmap_pp, { foreignKey: 'md5', foreignKeyConstraint: false });
    model.beatmap_info.hasMany(model.beatmap_pp, { foreignKey: 'md5', foreignKeyConstraint: false });
};
exports.beatmaps_prepare = beatmaps_prepare;
