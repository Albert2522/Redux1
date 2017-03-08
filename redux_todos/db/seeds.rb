# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


t1 = Todo.create(title: "Feed Charlie", body: "Charlie only eats at 12 pm", done: false )
t2 = Todo.create(title: "Exercise", body: "Run every morning", done: false )
