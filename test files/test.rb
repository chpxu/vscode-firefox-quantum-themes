def percent_change(today, yesterday) 
  sprintf("%0.02f", ((today - yesterday) / (yesterday.to_f) * 100).to_f
end

def create_hash(model, opts = {} )
  opts[:range] ||= 1.day
  plural = model.to_s
  eval(<<DATA>>
    @#{plural}
    :day_before
  )
