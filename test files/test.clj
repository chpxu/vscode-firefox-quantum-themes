z;; Numeric types
42              ; Long - 64-bit integer (from -2^63 to 2^63-1)
6.022e23        ; Double - double-precision 64-bit floating point
42N             ; BigInt - arbitrary precision integer
1.0M            ; BigDecimal - arbitrary precision fixed-point decimal
22/7            ; Ratio

;; Character types
"hello"         ; String
\e              ; Character

;; Other types
nil             ; null value
true            ; Boolean (also, false)
#"[0-9]+"       ; Regular expression
:alpha          ; Keyword
:release/alpha  ; Keyword with namespace
map             ; Symbol
+               ; Symbol - most punctuation allowed
clojure.core/+  ; Namespaced symbol

user => 'x
x

user=> '(1 2 3)
(1 2 3)
user=> (+ 3 4)
7

user=> (doc +)

clojure.core/+
([] [x] [x y] [x y])