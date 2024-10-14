"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scores_prepare = void 0;
const score_legacy_1 = require("../models/scores/score_legacy");
const score_1 = require("../models/scores/score");
const user_grade_1 = require("../models/scores/user_grade");
const beatmaps_md5_1 = require("../models/beatmaps/beatmaps_md5");
const scores_prepare = (score_connection, beatmap_connection) => {
    if (typeof score_connection === 'undefined' || typeof beatmap_connection === 'undefined') {
        throw new Error('no connection in scores_prepare');
    }
    const model = {
        score_legacy: (0, score_legacy_1.score_legacy)(score_connection),
        score: (0, score_1.score)(score_connection),
        user_grade: (0, user_grade_1.user_grade)(score_connection),
        beatmap_md5: (0, beatmaps_md5_1.beatmap_md5)(beatmap_connection)
    };
    model.user_grade.hasMany(model.score_legacy, { foreignKey: 'userid', foreignKeyConstraints: false });
    model.user_grade.hasMany(model.score, { foreignKey: 'userid', foreignKeyConstraints: false });
    model.beatmap_md5.hasMany(model.score_legacy, { foreignKey: 'md5', foreignKeyConstraints: false });
    model.beatmap_md5.hasMany(model.score, { foreignKey: 'md5', foreignKeyConstraints: false });
};
exports.scores_prepare = scores_prepare;
