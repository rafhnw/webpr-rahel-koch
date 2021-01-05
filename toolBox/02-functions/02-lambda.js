export {
    id, beta, konst, flip, cmp, cmp2,
    T, F, and, or, rec,
    n0, n1, n2, n3,
    pair, fst, snd,
    either, Left, Right,
    Nothing, Just, maybe, bindMaybe,
    curry, uncurry
}

/*
----- Higher-Order functions -----

Higher-Order function is a function that receives a function as an argument or returns the function as output.
*/

// lambda calculus in JavaScript

// Alpha translation
// function id(x) { return x; }, \x.x
const id = x => x;

// M, const, first, id2, true
const konst = x => y => x;

// ---- beta reduction
// const beta = f => x => f(x) (id)(1)
// id auf f anwenden (ersetzten)
// x => id(x) (1)
// 1 aud x anwenden
// id(1) --> ergibt 1
const beta = f => x => f(x);

// ---- eta reduction
// const eta = x => y => id (y)
// y auf beiden Seiten streichen
const eta = x => id;


// ---- curry for applying multiple arguments

// curry :: ((a,b)->c) -> a -> b -> c
const curry = f => x => y => f(x,y);

// uncurry :: ( a -> b -> c) -> ((a,b) -> c)
const uncurry = f => (x,y) => f(x)(y);

// ---- flip
// tausche Reihenfolge der Parameter
const flip = f => x => y => f(y)(x);

// -----

// Bluebird, composition
const cmp = f => g => x => f(g(x));

//const cmp2 = f => g => x => y => f(g(x)(y));
const cmp2 = cmp (cmp)(cmp);

// ---- boolean logic

const T = x => y => x;
const F = x => y => y;

const and = x => y => x(y)(x);

// const or  = x => y => x(x)(y);
const or  = x =>  x(x);
// const or  = M;

// ----

// this works:
// rec :: (a -> a) -> a
const rec  = f => f ( n => rec(f)(n)  ) ;

// ---------- Numbers

const n0 = f => x => x;         // same as konst, F
const n1 = f => x => f(x);      // same as beta, once, lazy
const n2 = f => x => f(f(x));           // twice
const n3 = f => x => f(f(f(x)));        // thrice

// ----------- Data structures

// prototypical Product Type: pair
const pair = a => b => f => f(a)(b);

const fst = p => p(T); // pick first  element from pair
const snd = p => p(F); // pick second element from pair

// prototypical Sum Type: either

const Left   = x => f => g => f (x);
const Right  = x => f => g => g (x);
const either = e => f => g => e (f) (g);

// maybe as a sum type

// const Nothing  = ()=> f => g => f ;        // f is used as a value
// const Just     = x => f => g => g (x);
// const maybe    = m => f => g => m (f) (g);

const Nothing  = Left() ;        // f is used as a value
const Just     = Right  ;
// const maybe    = either ;     // convenience: caller does not need to repeat "konst"
const maybe    = m => f => either (m) (konst(f)) ;

//    bindMaybe :: m a -> (a -> m b) -> mb
const bindMaybe = ma => f => maybe (ma) (ma) (f);



