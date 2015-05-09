#testblog
array = [1,2,3,4]
  array.each do |element|
  p element * 2
end

array = [1,2,3,4]
new_array = array.map { |element| element*2  }
p new_array # => [2,4,6,8]
p array # => [1,2,3,4]


array = [1,2,3,4]
array.map! { |element| element*2  }
p array
