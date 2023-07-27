json.extract! message, :id, :greet, :created_at, :updated_at
json.url message_url(message, format: :json)
