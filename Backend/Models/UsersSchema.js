const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    field: { type: String, required: true },
    bio: { type: String, required: true },
    followers: { type: Number, required: true },
    following: { type: Number, required: true },
    posts: { type: Number, required: true },
    total_account_reached: { type: Number, required: true },
    engaged_followers: { type: Number, required: true },
    content_shares: { type: Number, required: true },
    comments: { type: Number, required: true },
    saves: { type: Number, required: true },
    active_campaigns: { type: Number, required: true },
    total_spend: { type: Number, required: true },
    reach: { type: Number, required: true },
    conversion_rate: { type: Number, required: true },
    total_posts: { type: Number, required: true },
    total_stories: { type: Number, required: true },
    avg_engagement_rate: { type: String, required: true },
    avg_impressions: { type: String, required: true }
})

const UserModel = mongoose.model("SocialmediaDashboard", UserSchema)

module.exports = UserModel