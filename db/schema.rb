# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180228201457) do

  create_table "friendships", force: :cascade do |t|
    t.integer "friend_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "guestships", force: :cascade do |t|
    t.integer "guest_id"
    t.integer "potluck_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "potluck_recipes", force: :cascade do |t|
    t.integer "potluck_id"
    t.integer "recipe_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "potlucks", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "description"
    t.datetime "happening"
    t.string "image"
    t.integer "host_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.string "difficulty"
    t.string "url"
    t.string "image"
    t.boolean "taken", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "name"
    t.string "image"
    t.boolean "host", default: false
    t.string "rsvp"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
