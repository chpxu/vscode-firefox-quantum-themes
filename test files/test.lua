local res = Set.nav();
for k in pairs(a) do
  res[k] = b[k]
end
return res

function Set.mt.__le(a, b) --comment
  for k in pairs do
    if not b[k] then return false end
  end
