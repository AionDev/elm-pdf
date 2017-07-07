/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Elm = __webpack_require__(1);
//
//
let app = Elm.Example.embed(document.getElementById('main'));

// require('elm-pdf').elmPdfInitialize(app);
__webpack_require__(2).elmPdfInitialize(app);

// console.log("elmPdfff", elmPdf);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

var _elm_lang$virtual_dom$Native_Debug = function() {


// IMPORT / EXPORT

function unsafeCoerce(value)
{
	return value;
}

var upload = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	var element = document.createElement('input');
	element.setAttribute('type', 'file');
	element.setAttribute('accept', 'text/json');
	element.style.display = 'none';
	element.addEventListener('change', function(event)
	{
		var fileReader = new FileReader();
		fileReader.onload = function(e)
		{
			callback(_elm_lang$core$Native_Scheduler.succeed(e.target.result));
		};
		fileReader.readAsText(event.target.files[0]);
		document.body.removeChild(element);
	});
	document.body.appendChild(element);
	element.click();
});

function download(historyLength, json)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var fileName = 'history-' + historyLength + '.txt';
		var jsonString = JSON.stringify(json);
		var mime = 'text/plain;charset=utf-8';
		var done = _elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0);

		// for IE10+
		if (navigator.msSaveBlob)
		{
			navigator.msSaveBlob(new Blob([jsonString], {type: mime}), fileName);
			return callback(done);
		}

		// for HTML5
		var element = document.createElement('a');
		element.setAttribute('href', 'data:' + mime + ',' + encodeURIComponent(jsonString));
		element.setAttribute('download', fileName);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		callback(done);
	});
}


// POPOUT

function messageToString(value)
{
	switch (typeof value)
	{
		case 'boolean':
			return value ? 'True' : 'False';
		case 'number':
			return value + '';
		case 'string':
			return '"' + addSlashes(value, false) + '"';
	}
	if (value instanceof String)
	{
		return '\'' + addSlashes(value, true) + '\'';
	}
	if (typeof value !== 'object' || value === null || !('ctor' in value))
	{
		return '…';
	}

	var ctorStarter = value.ctor.substring(0, 5);
	if (ctorStarter === '_Tupl' || ctorStarter === '_Task')
	{
		return '…'
	}
	if (['_Array', '<decoder>', '_Process', '::', '[]', 'Set_elm_builtin', 'RBNode_elm_builtin', 'RBEmpty_elm_builtin'].indexOf(value.ctor) >= 0)
	{
		return '…';
	}

	var keys = Object.keys(value);
	switch (keys.length)
	{
		case 1:
			return value.ctor;
		case 2:
			return value.ctor + ' ' + messageToString(value._0);
		default:
			return value.ctor + ' … ' + messageToString(value[keys[keys.length - 1]]);
	}
}


function primitive(str)
{
	return { ctor: 'Primitive', _0: str };
}


function init(value)
{
	var type = typeof value;

	if (type === 'boolean')
	{
		return {
			ctor: 'Constructor',
			_0: _elm_lang$core$Maybe$Just(value ? 'True' : 'False'),
			_1: true,
			_2: _elm_lang$core$Native_List.Nil
		};
	}

	if (type === 'number')
	{
		return primitive(value + '');
	}

	if (type === 'string')
	{
		return { ctor: 'S', _0: '"' + addSlashes(value, false) + '"' };
	}

	if (value instanceof String)
	{
		return { ctor: 'S', _0: "'" + addSlashes(value, true) + "'" };
	}

	if (value instanceof Date)
	{
		return primitive('<' + value.toString() + '>');
	}

	if (value === null)
	{
		return primitive('XXX');
	}

	if (type === 'object' && 'ctor' in value)
	{
		var ctor = value.ctor;

		if (ctor === '::' || ctor === '[]')
		{
			return {
				ctor: 'Sequence',
				_0: {ctor: 'ListSeq'},
				_1: true,
				_2: A2(_elm_lang$core$List$map, init, value)
			};
		}

		if (ctor === 'Set_elm_builtin')
		{
			return {
				ctor: 'Sequence',
				_0: {ctor: 'SetSeq'},
				_1: true,
				_2: A3(_elm_lang$core$Set$foldr, initCons, _elm_lang$core$Native_List.Nil, value)
			};
		}

		if (ctor === 'RBNode_elm_builtin' || ctor == 'RBEmpty_elm_builtin')
		{
			return {
				ctor: 'Dictionary',
				_0: true,
				_1: A3(_elm_lang$core$Dict$foldr, initKeyValueCons, _elm_lang$core$Native_List.Nil, value)
			};
		}

		if (ctor === '_Array')
		{
			return {
				ctor: 'Sequence',
				_0: {ctor: 'ArraySeq'},
				_1: true,
				_2: A3(_elm_lang$core$Array$foldr, initCons, _elm_lang$core$Native_List.Nil, value)
			};
		}

		var ctorStarter = value.ctor.substring(0, 5);
		if (ctorStarter === '_Task')
		{
			return primitive('<task>');
		}

		if (ctor === '<decoder>')
		{
			return primitive(ctor);
		}

		if (ctor === '_Process')
		{
			return primitive('<process>');
		}

		var list = _elm_lang$core$Native_List.Nil;
		for (var i in value)
		{
			if (i === 'ctor') continue;
			list = _elm_lang$core$Native_List.Cons(init(value[i]), list);
		}
		return {
			ctor: 'Constructor',
			_0: ctorStarter === '_Tupl' ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(ctor),
			_1: true,
			_2: _elm_lang$core$List$reverse(list)
		};
	}

	if (type === 'object')
	{
		var dict = _elm_lang$core$Dict$empty;
		for (var i in value)
		{
			dict = A3(_elm_lang$core$Dict$insert, i, init(value[i]), dict);
		}
		return { ctor: 'Record', _0: true, _1: dict };
	}

	return primitive('XXX');
}

var initCons = F2(initConsHelp);

function initConsHelp(value, list)
{
	return _elm_lang$core$Native_List.Cons(init(value), list);
}

var initKeyValueCons = F3(initKeyValueConsHelp);

function initKeyValueConsHelp(key, value, list)
{
	return _elm_lang$core$Native_List.Cons(
		_elm_lang$core$Native_Utils.Tuple2(init(key), init(value)),
		list
	);
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	upload: upload,
	download: F2(download),
	unsafeCoerce: unsafeCoerce,
	messageToString: messageToString,
	init: init
}

}();

var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

var _elm_lang$virtual_dom$VirtualDom_Helpers$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom_Helpers$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom_Helpers$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom_Helpers$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom_Helpers$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom_Helpers$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom_Helpers$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom_Helpers$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom_Helpers$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom_Helpers$onClick = function (msg) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$virtual_dom$VirtualDom_Helpers$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom_Helpers$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom_Helpers$id = _elm_lang$virtual_dom$VirtualDom_Helpers$attribute('id');
var _elm_lang$virtual_dom$VirtualDom_Helpers$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom_Helpers$class = function (name) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$property,
		'className',
		_elm_lang$core$Json_Encode$string(name));
};
var _elm_lang$virtual_dom$VirtualDom_Helpers$href = function (name) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$property,
		'href',
		_elm_lang$core$Json_Encode$string(name));
};
var _elm_lang$virtual_dom$VirtualDom_Helpers$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom_Helpers$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom_Helpers$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom_Helpers$div = _elm_lang$virtual_dom$VirtualDom_Helpers$node('div');
var _elm_lang$virtual_dom$VirtualDom_Helpers$span = _elm_lang$virtual_dom$VirtualDom_Helpers$node('span');
var _elm_lang$virtual_dom$VirtualDom_Helpers$a = _elm_lang$virtual_dom$VirtualDom_Helpers$node('a');
var _elm_lang$virtual_dom$VirtualDom_Helpers$h1 = _elm_lang$virtual_dom$VirtualDom_Helpers$node('h1');
var _elm_lang$virtual_dom$VirtualDom_Helpers$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Helpers$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom_Helpers$Property = {ctor: 'Property'};

var _elm_lang$virtual_dom$VirtualDom_Expando$purple = _elm_lang$virtual_dom$VirtualDom_Helpers$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'color', _1: 'rgb(136, 19, 145)'},
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$blue = _elm_lang$virtual_dom$VirtualDom_Helpers$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'color', _1: 'rgb(28, 0, 207)'},
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$red = _elm_lang$virtual_dom$VirtualDom_Helpers$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'color', _1: 'rgb(196, 26, 22)'},
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$leftPad = function (maybeKey) {
	var _p0 = maybeKey;
	if (_p0.ctor === 'Nothing') {
		return _elm_lang$virtual_dom$VirtualDom_Helpers$style(
			{ctor: '[]'});
	} else {
		return _elm_lang$virtual_dom$VirtualDom_Helpers$style(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'padding-left', _1: '4ch'},
				_1: {ctor: '[]'}
			});
	}
};
var _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow = function (arrow) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$span,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'color', _1: '#777'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'padding-left', _1: '2ch'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'width', _1: '2ch'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
								_1: {ctor: '[]'}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(arrow),
			_1: {ctor: '[]'}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Expando$lineStarter = F3(
	function (maybeKey, maybeIsClosed, description) {
		var arrow = function () {
			var _p1 = maybeIsClosed;
			if (_p1.ctor === 'Nothing') {
				return _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow('');
			} else {
				if (_p1._0 === true) {
					return _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow('▸');
				} else {
					return _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow('▾');
				}
			}
		}();
		var _p2 = maybeKey;
		if (_p2.ctor === 'Nothing') {
			return {ctor: '::', _0: arrow, _1: description};
		} else {
			return {
				ctor: '::',
				_0: arrow,
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Expando$purple,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p2._0),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' = '),
						_1: description
					}
				}
			};
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTinyRecord = F3(
	function (length, starter, entries) {
		var _p3 = entries;
		if (_p3.ctor === '[]') {
			return {
				ctor: '_Tuple2',
				_0: length + 1,
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('}'),
					_1: {ctor: '[]'}
				}
			};
		} else {
			var _p5 = _p3._0;
			var nextLength = (length + _elm_lang$core$String$length(_p5)) + 1;
			if (_elm_lang$core$Native_Utils.cmp(nextLength, 18) > 0) {
				return {
					ctor: '_Tuple2',
					_0: length + 2,
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('…}'),
						_1: {ctor: '[]'}
					}
				};
			} else {
				var _p4 = A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTinyRecord, nextLength, ',', _p3._1);
				var finalLength = _p4._0;
				var otherNodes = _p4._1;
				return {
					ctor: '_Tuple2',
					_0: finalLength,
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Expando$purple,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p5),
									_1: {ctor: '[]'}
								}),
							_1: otherNodes
						}
					}
				};
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$elideMiddle = function (str) {
	return (_elm_lang$core$Native_Utils.cmp(
		_elm_lang$core$String$length(str),
		18) < 1) ? str : A2(
		_elm_lang$core$Basics_ops['++'],
		A2(_elm_lang$core$String$left, 8, str),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'...',
			A2(_elm_lang$core$String$right, 8, str)));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp = function (str) {
	return {
		ctor: '_Tuple2',
		_0: _elm_lang$core$String$length(str),
		_1: {
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(str),
			_1: {ctor: '[]'}
		}
	};
};
var _elm_lang$virtual_dom$VirtualDom_Expando$updateIndex = F3(
	function (n, func, list) {
		var _p6 = list;
		if (_p6.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p8 = _p6._1;
			var _p7 = _p6._0;
			return (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) ? {
				ctor: '::',
				_0: func(_p7),
				_1: _p8
			} : {
				ctor: '::',
				_0: _p7,
				_1: A3(_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex, n - 1, func, _p8)
			};
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$seqTypeToString = F2(
	function (n, seqType) {
		var _p9 = seqType;
		switch (_p9.ctor) {
			case 'ListSeq':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'List(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(n),
						')'));
			case 'SetSeq':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'Set(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(n),
						')'));
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'Array(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(n),
						')'));
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewTiny = function (value) {
	var _p10 = value;
	switch (_p10.ctor) {
		case 'S':
			var str = _elm_lang$virtual_dom$VirtualDom_Expando$elideMiddle(_p10._0);
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$String$length(str),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Expando$red,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(str),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			};
		case 'Primitive':
			var _p11 = _p10._0;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$String$length(_p11),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Expando$blue,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p11),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			};
		case 'Sequence':
			return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
				A2(
					_elm_lang$virtual_dom$VirtualDom_Expando$seqTypeToString,
					_elm_lang$core$List$length(_p10._2),
					_p10._0));
		case 'Dictionary':
			return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Dict(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(
							_elm_lang$core$List$length(_p10._1)),
						')')));
		case 'Record':
			return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecord(_p10._1);
		default:
			if (_p10._2.ctor === '[]') {
				return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
					A2(_elm_lang$core$Maybe$withDefault, 'Unit', _p10._0));
			} else {
				return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
					function () {
						var _p12 = _p10._0;
						if (_p12.ctor === 'Nothing') {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'Tuple(',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(
										_elm_lang$core$List$length(_p10._2)),
									')'));
						} else {
							return A2(_elm_lang$core$Basics_ops['++'], _p12._0, ' …');
						}
					}());
			}
	}
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecord = function (record) {
	return _elm_lang$core$Dict$isEmpty(record) ? {
		ctor: '_Tuple2',
		_0: 2,
		_1: {
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('{}'),
			_1: {ctor: '[]'}
		}
	} : A3(
		_elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecordHelp,
		0,
		'{ ',
		_elm_lang$core$Dict$toList(record));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecordHelp = F3(
	function (length, starter, entries) {
		var _p13 = entries;
		if (_p13.ctor === '[]') {
			return {
				ctor: '_Tuple2',
				_0: length + 2,
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' }'),
					_1: {ctor: '[]'}
				}
			};
		} else {
			var _p16 = _p13._0._0;
			var _p14 = _elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTiny(_p13._0._1);
			var valueLen = _p14._0;
			var valueNodes = _p14._1;
			var fieldLen = _elm_lang$core$String$length(_p16);
			var newLength = ((length + fieldLen) + valueLen) + 5;
			if (_elm_lang$core$Native_Utils.cmp(newLength, 60) > 0) {
				return {
					ctor: '_Tuple2',
					_0: length + 4,
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', … }'),
						_1: {ctor: '[]'}
					}
				};
			} else {
				var _p15 = A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecordHelp, newLength, ', ', _p13._1);
				var finalLength = _p15._0;
				var otherNodes = _p15._1;
				return {
					ctor: '_Tuple2',
					_0: finalLength,
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Expando$purple,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p16),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' = '),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$virtual_dom$VirtualDom_Helpers$span,
										{ctor: '[]'},
										valueNodes),
									_1: otherNodes
								}
							}
						}
					}
				};
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTiny = function (value) {
	var _p17 = value;
	if (_p17.ctor === 'Record') {
		return A3(
			_elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTinyRecord,
			0,
			'{',
			_elm_lang$core$Dict$keys(_p17._1));
	} else {
		return _elm_lang$virtual_dom$VirtualDom_Expando$viewTiny(value);
	}
};
var _elm_lang$virtual_dom$VirtualDom_Expando$Constructor = F3(
	function (a, b, c) {
		return {ctor: 'Constructor', _0: a, _1: b, _2: c};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Record = F2(
	function (a, b) {
		return {ctor: 'Record', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Dictionary = F2(
	function (a, b) {
		return {ctor: 'Dictionary', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Sequence = F3(
	function (a, b, c) {
		return {ctor: 'Sequence', _0: a, _1: b, _2: c};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$initHelp = F2(
	function (isOuter, expando) {
		var _p18 = expando;
		switch (_p18.ctor) {
			case 'S':
				return expando;
			case 'Primitive':
				return expando;
			case 'Sequence':
				var _p20 = _p18._0;
				var _p19 = _p18._2;
				return isOuter ? A3(
					_elm_lang$virtual_dom$VirtualDom_Expando$Sequence,
					_p20,
					false,
					A2(
						_elm_lang$core$List$map,
						_elm_lang$virtual_dom$VirtualDom_Expando$initHelp(false),
						_p19)) : ((_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$List$length(_p19),
					8) < 1) ? A3(_elm_lang$virtual_dom$VirtualDom_Expando$Sequence, _p20, false, _p19) : expando);
			case 'Dictionary':
				var _p23 = _p18._1;
				return isOuter ? A2(
					_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary,
					false,
					A2(
						_elm_lang$core$List$map,
						function (_p21) {
							var _p22 = _p21;
							return {
								ctor: '_Tuple2',
								_0: _p22._0,
								_1: A2(_elm_lang$virtual_dom$VirtualDom_Expando$initHelp, false, _p22._1)
							};
						},
						_p23)) : ((_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$List$length(_p23),
					8) < 1) ? A2(_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary, false, _p23) : expando);
			case 'Record':
				var _p25 = _p18._1;
				return isOuter ? A2(
					_elm_lang$virtual_dom$VirtualDom_Expando$Record,
					false,
					A2(
						_elm_lang$core$Dict$map,
						F2(
							function (_p24, v) {
								return A2(_elm_lang$virtual_dom$VirtualDom_Expando$initHelp, false, v);
							}),
						_p25)) : ((_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$Dict$size(_p25),
					4) < 1) ? A2(_elm_lang$virtual_dom$VirtualDom_Expando$Record, false, _p25) : expando);
			default:
				var _p27 = _p18._0;
				var _p26 = _p18._2;
				return isOuter ? A3(
					_elm_lang$virtual_dom$VirtualDom_Expando$Constructor,
					_p27,
					false,
					A2(
						_elm_lang$core$List$map,
						_elm_lang$virtual_dom$VirtualDom_Expando$initHelp(false),
						_p26)) : ((_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$List$length(_p26),
					4) < 1) ? A3(_elm_lang$virtual_dom$VirtualDom_Expando$Constructor, _p27, false, _p26) : expando);
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$init = function (value) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Expando$initHelp,
		true,
		_elm_lang$virtual_dom$Native_Debug.init(value));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp = F2(
	function (old, $new) {
		var _p28 = {ctor: '_Tuple2', _0: old, _1: $new};
		_v12_6:
		do {
			if (_p28.ctor === '_Tuple2') {
				switch (_p28._1.ctor) {
					case 'S':
						return $new;
					case 'Primitive':
						return $new;
					case 'Sequence':
						if (_p28._0.ctor === 'Sequence') {
							return A3(
								_elm_lang$virtual_dom$VirtualDom_Expando$Sequence,
								_p28._1._0,
								_p28._0._1,
								A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp, _p28._0._2, _p28._1._2));
						} else {
							break _v12_6;
						}
					case 'Dictionary':
						if (_p28._0.ctor === 'Dictionary') {
							return A2(_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary, _p28._0._0, _p28._1._1);
						} else {
							break _v12_6;
						}
					case 'Record':
						if (_p28._0.ctor === 'Record') {
							return A2(
								_elm_lang$virtual_dom$VirtualDom_Expando$Record,
								_p28._0._0,
								A2(
									_elm_lang$core$Dict$map,
									_elm_lang$virtual_dom$VirtualDom_Expando$mergeDictHelp(_p28._0._1),
									_p28._1._1));
						} else {
							break _v12_6;
						}
					default:
						if (_p28._0.ctor === 'Constructor') {
							return A3(
								_elm_lang$virtual_dom$VirtualDom_Expando$Constructor,
								_p28._1._0,
								_p28._0._1,
								A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp, _p28._0._2, _p28._1._2));
						} else {
							break _v12_6;
						}
				}
			} else {
				break _v12_6;
			}
		} while(false);
		return $new;
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$mergeDictHelp = F3(
	function (oldDict, key, value) {
		var _p29 = A2(_elm_lang$core$Dict$get, key, oldDict);
		if (_p29.ctor === 'Nothing') {
			return value;
		} else {
			return A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp, _p29._0, value);
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp = F2(
	function (olds, news) {
		var _p30 = {ctor: '_Tuple2', _0: olds, _1: news};
		if (_p30._0.ctor === '[]') {
			return news;
		} else {
			if (_p30._1.ctor === '[]') {
				return news;
			} else {
				return {
					ctor: '::',
					_0: A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp, _p30._0._0, _p30._1._0),
					_1: A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp, _p30._0._1, _p30._1._1)
				};
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$merge = F2(
	function (value, expando) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp,
			expando,
			_elm_lang$virtual_dom$Native_Debug.init(value));
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$update = F2(
	function (msg, value) {
		var _p31 = value;
		switch (_p31.ctor) {
			case 'S':
				return _elm_lang$core$Native_Utils.crashCase(
					'VirtualDom.Expando',
					{
						start: {line: 168, column: 3},
						end: {line: 235, column: 50}
					},
					_p31)('No messages for primitives');
			case 'Primitive':
				return _elm_lang$core$Native_Utils.crashCase(
					'VirtualDom.Expando',
					{
						start: {line: 168, column: 3},
						end: {line: 235, column: 50}
					},
					_p31)('No messages for primitives');
			case 'Sequence':
				var _p39 = _p31._2;
				var _p38 = _p31._0;
				var _p37 = _p31._1;
				var _p34 = msg;
				switch (_p34.ctor) {
					case 'Toggle':
						return A3(_elm_lang$virtual_dom$VirtualDom_Expando$Sequence, _p38, !_p37, _p39);
					case 'Index':
						if (_p34._0.ctor === 'None') {
							return A3(
								_elm_lang$virtual_dom$VirtualDom_Expando$Sequence,
								_p38,
								_p37,
								A3(
									_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
									_p34._1,
									_elm_lang$virtual_dom$VirtualDom_Expando$update(_p34._2),
									_p39));
						} else {
							return _elm_lang$core$Native_Utils.crashCase(
								'VirtualDom.Expando',
								{
									start: {line: 176, column: 7},
									end: {line: 188, column: 46}
								},
								_p34)('No redirected indexes on sequences');
						}
					default:
						return _elm_lang$core$Native_Utils.crashCase(
							'VirtualDom.Expando',
							{
								start: {line: 176, column: 7},
								end: {line: 188, column: 46}
							},
							_p34)('No field on sequences');
				}
			case 'Dictionary':
				var _p51 = _p31._1;
				var _p50 = _p31._0;
				var _p40 = msg;
				switch (_p40.ctor) {
					case 'Toggle':
						return A2(_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary, !_p50, _p51);
					case 'Index':
						var _p48 = _p40._2;
						var _p47 = _p40._1;
						var _p41 = _p40._0;
						switch (_p41.ctor) {
							case 'None':
								return _elm_lang$core$Native_Utils.crashCase(
									'VirtualDom.Expando',
									{
										start: {line: 196, column: 11},
										end: {line: 206, column: 81}
									},
									_p41)('must have redirect for dictionaries');
							case 'Key':
								return A2(
									_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary,
									_p50,
									A3(
										_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
										_p47,
										function (_p43) {
											var _p44 = _p43;
											return {
												ctor: '_Tuple2',
												_0: A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, _p48, _p44._0),
												_1: _p44._1
											};
										},
										_p51));
							default:
								return A2(
									_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary,
									_p50,
									A3(
										_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
										_p47,
										function (_p45) {
											var _p46 = _p45;
											return {
												ctor: '_Tuple2',
												_0: _p46._0,
												_1: A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, _p48, _p46._1)
											};
										},
										_p51));
						}
					default:
						return _elm_lang$core$Native_Utils.crashCase(
							'VirtualDom.Expando',
							{
								start: {line: 191, column: 7},
								end: {line: 209, column: 50}
							},
							_p40)('no field for dictionaries');
				}
			case 'Record':
				var _p55 = _p31._1;
				var _p54 = _p31._0;
				var _p52 = msg;
				switch (_p52.ctor) {
					case 'Toggle':
						return A2(_elm_lang$virtual_dom$VirtualDom_Expando$Record, !_p54, _p55);
					case 'Index':
						return _elm_lang$core$Native_Utils.crashCase(
							'VirtualDom.Expando',
							{
								start: {line: 212, column: 7},
								end: {line: 220, column: 77}
							},
							_p52)('No index for records');
					default:
						return A2(
							_elm_lang$virtual_dom$VirtualDom_Expando$Record,
							_p54,
							A3(
								_elm_lang$core$Dict$update,
								_p52._0,
								_elm_lang$virtual_dom$VirtualDom_Expando$updateField(_p52._1),
								_p55));
				}
			default:
				var _p61 = _p31._2;
				var _p60 = _p31._0;
				var _p59 = _p31._1;
				var _p56 = msg;
				switch (_p56.ctor) {
					case 'Toggle':
						return A3(_elm_lang$virtual_dom$VirtualDom_Expando$Constructor, _p60, !_p59, _p61);
					case 'Index':
						if (_p56._0.ctor === 'None') {
							return A3(
								_elm_lang$virtual_dom$VirtualDom_Expando$Constructor,
								_p60,
								_p59,
								A3(
									_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
									_p56._1,
									_elm_lang$virtual_dom$VirtualDom_Expando$update(_p56._2),
									_p61));
						} else {
							return _elm_lang$core$Native_Utils.crashCase(
								'VirtualDom.Expando',
								{
									start: {line: 223, column: 7},
									end: {line: 235, column: 50}
								},
								_p56)('No redirected indexes on sequences');
						}
					default:
						return _elm_lang$core$Native_Utils.crashCase(
							'VirtualDom.Expando',
							{
								start: {line: 223, column: 7},
								end: {line: 235, column: 50}
							},
							_p56)('No field for constructors');
				}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$updateField = F2(
	function (msg, maybeExpando) {
		var _p62 = maybeExpando;
		if (_p62.ctor === 'Nothing') {
			return _elm_lang$core$Native_Utils.crashCase(
				'VirtualDom.Expando',
				{
					start: {line: 253, column: 3},
					end: {line: 258, column: 32}
				},
				_p62)('key does not exist');
		} else {
			return _elm_lang$core$Maybe$Just(
				A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, msg, _p62._0));
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Primitive = function (a) {
	return {ctor: 'Primitive', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Expando$S = function (a) {
	return {ctor: 'S', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Expando$ArraySeq = {ctor: 'ArraySeq'};
var _elm_lang$virtual_dom$VirtualDom_Expando$SetSeq = {ctor: 'SetSeq'};
var _elm_lang$virtual_dom$VirtualDom_Expando$ListSeq = {ctor: 'ListSeq'};
var _elm_lang$virtual_dom$VirtualDom_Expando$Field = F2(
	function (a, b) {
		return {ctor: 'Field', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Index = F3(
	function (a, b, c) {
		return {ctor: 'Index', _0: a, _1: b, _2: c};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Toggle = {ctor: 'Toggle'};
var _elm_lang$virtual_dom$VirtualDom_Expando$Value = {ctor: 'Value'};
var _elm_lang$virtual_dom$VirtualDom_Expando$Key = {ctor: 'Key'};
var _elm_lang$virtual_dom$VirtualDom_Expando$None = {ctor: 'None'};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorEntry = F2(
	function (index, value) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$map,
			A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, index),
			A2(
				_elm_lang$virtual_dom$VirtualDom_Expando$view,
				_elm_lang$core$Maybe$Just(
					_elm_lang$core$Basics$toString(index)),
				value));
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$view = F2(
	function (maybeKey, expando) {
		var _p64 = expando;
		switch (_p64.ctor) {
			case 'S':
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
						_1: {ctor: '[]'}
					},
					A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
						maybeKey,
						_elm_lang$core$Maybe$Nothing,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Expando$red,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p64._0),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}));
			case 'Primitive':
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
						_1: {ctor: '[]'}
					},
					A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
						maybeKey,
						_elm_lang$core$Maybe$Nothing,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Expando$blue,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p64._0),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}));
			case 'Sequence':
				return A4(_elm_lang$virtual_dom$VirtualDom_Expando$viewSequence, maybeKey, _p64._0, _p64._1, _p64._2);
			case 'Dictionary':
				return A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewDictionary, maybeKey, _p64._0, _p64._1);
			case 'Record':
				return A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewRecord, maybeKey, _p64._0, _p64._1);
			default:
				return A4(_elm_lang$virtual_dom$VirtualDom_Expando$viewConstructor, maybeKey, _p64._0, _p64._1, _p64._2);
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructor = F4(
	function (maybeKey, maybeName, isClosed, valueList) {
		var _p65 = function () {
			var _p66 = valueList;
			if (_p66.ctor === '[]') {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Maybe$Nothing,
					_1: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$div,
						{ctor: '[]'},
						{ctor: '[]'})
				};
			} else {
				if (_p66._1.ctor === '[]') {
					var _p67 = _p66._0;
					switch (_p67.ctor) {
						case 'S':
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Nothing,
								_1: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'})
							};
						case 'Primitive':
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Nothing,
								_1: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'})
							};
						case 'Sequence':
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Just(isClosed),
								_1: isClosed ? A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'}) : A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
									_elm_lang$virtual_dom$VirtualDom_Expando$viewSequenceOpen(_p67._2))
							};
						case 'Dictionary':
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Just(isClosed),
								_1: isClosed ? A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'}) : A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
									_elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryOpen(_p67._1))
							};
						case 'Record':
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Just(isClosed),
								_1: isClosed ? A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'}) : A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
									_elm_lang$virtual_dom$VirtualDom_Expando$viewRecordOpen(_p67._1))
							};
						default:
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Just(isClosed),
								_1: isClosed ? A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'}) : A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
									_elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorOpen(_p67._2))
							};
					}
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Maybe$Just(isClosed),
						_1: isClosed ? A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$div,
							{ctor: '[]'},
							{ctor: '[]'}) : _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorOpen(valueList)
					};
				}
			}
		}();
		var maybeIsClosed = _p65._0;
		var openHtml = _p65._1;
		var tinyArgs = A2(
			_elm_lang$core$List$map,
			function (_p68) {
				return _elm_lang$core$Tuple$second(
					_elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTiny(_p68));
			},
			valueList);
		var description = function () {
			var _p69 = {ctor: '_Tuple2', _0: maybeName, _1: tinyArgs};
			if (_p69._0.ctor === 'Nothing') {
				if (_p69._1.ctor === '[]') {
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('()'),
						_1: {ctor: '[]'}
					};
				} else {
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('( '),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{ctor: '[]'},
								_p69._1._0),
							_1: A3(
								_elm_lang$core$List$foldr,
								F2(
									function (args, rest) {
										return {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', '),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$virtual_dom$VirtualDom_Helpers$span,
													{ctor: '[]'},
													args),
												_1: rest
											}
										};
									}),
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' )'),
									_1: {ctor: '[]'}
								},
								_p69._1._1)
						}
					};
				}
			} else {
				if (_p69._1.ctor === '[]') {
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p69._0._0),
						_1: {ctor: '[]'}
					};
				} else {
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
							A2(_elm_lang$core$Basics_ops['++'], _p69._0._0, ' ')),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{ctor: '[]'},
								_p69._1._0),
							_1: A3(
								_elm_lang$core$List$foldr,
								F2(
									function (args, rest) {
										return {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' '),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$virtual_dom$VirtualDom_Helpers$span,
													{ctor: '[]'},
													args),
												_1: rest
											}
										};
									}),
								{ctor: '[]'},
								_p69._1._1)
						}
					};
				}
			}
		}();
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
						_1: {ctor: '[]'}
					},
					A3(_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter, maybeKey, maybeIsClosed, description)),
				_1: {
					ctor: '::',
					_0: openHtml,
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorOpen = function (valueList) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{ctor: '[]'},
		A2(_elm_lang$core$List$indexedMap, _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorEntry, valueList));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryOpen = function (keyValuePairs) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{ctor: '[]'},
		A2(_elm_lang$core$List$indexedMap, _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryEntry, keyValuePairs));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryEntry = F2(
	function (index, _p70) {
		var _p71 = _p70;
		var _p74 = _p71._1;
		var _p73 = _p71._0;
		var _p72 = _p73;
		switch (_p72.ctor) {
			case 'S':
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$map,
					A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Value, index),
					A2(
						_elm_lang$virtual_dom$VirtualDom_Expando$view,
						_elm_lang$core$Maybe$Just(_p72._0),
						_p74));
			case 'Primitive':
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$map,
					A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Value, index),
					A2(
						_elm_lang$virtual_dom$VirtualDom_Expando$view,
						_elm_lang$core$Maybe$Just(_p72._0),
						_p74));
			default:
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$map,
							A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Key, index),
							A2(
								_elm_lang$virtual_dom$VirtualDom_Expando$view,
								_elm_lang$core$Maybe$Just('key'),
								_p73)),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$map,
								A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Value, index),
								A2(
									_elm_lang$virtual_dom$VirtualDom_Expando$view,
									_elm_lang$core$Maybe$Just('value'),
									_p74)),
							_1: {ctor: '[]'}
						}
					});
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewRecordOpen = function (record) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{ctor: '[]'},
		A2(
			_elm_lang$core$List$map,
			_elm_lang$virtual_dom$VirtualDom_Expando$viewRecordEntry,
			_elm_lang$core$Dict$toList(record)));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewRecordEntry = function (_p75) {
	var _p76 = _p75;
	var _p77 = _p76._0;
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$map,
		_elm_lang$virtual_dom$VirtualDom_Expando$Field(_p77),
		A2(
			_elm_lang$virtual_dom$VirtualDom_Expando$view,
			_elm_lang$core$Maybe$Just(_p77),
			_p76._1));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewSequenceOpen = function (values) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{ctor: '[]'},
		A2(_elm_lang$core$List$indexedMap, _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorEntry, values));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionary = F3(
	function (maybeKey, isClosed, keyValuePairs) {
		var starter = A2(
			_elm_lang$core$Basics_ops['++'],
			'Dict(',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(
					_elm_lang$core$List$length(keyValuePairs)),
				')'));
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
						_1: {ctor: '[]'}
					},
					A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
						maybeKey,
						_elm_lang$core$Maybe$Just(isClosed),
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
							_1: {ctor: '[]'}
						})),
				_1: {
					ctor: '::',
					_0: isClosed ? _elm_lang$virtual_dom$VirtualDom_Helpers$text('') : _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryOpen(keyValuePairs),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewRecord = F3(
	function (maybeKey, isClosed, record) {
		var _p78 = isClosed ? {
			ctor: '_Tuple3',
			_0: _elm_lang$core$Tuple$second(
				_elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecord(record)),
			_1: _elm_lang$virtual_dom$VirtualDom_Helpers$text(''),
			_2: _elm_lang$virtual_dom$VirtualDom_Helpers$text('')
		} : {
			ctor: '_Tuple3',
			_0: {
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('{'),
				_1: {ctor: '[]'}
			},
			_1: _elm_lang$virtual_dom$VirtualDom_Expando$viewRecordOpen(record),
			_2: A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(
						_elm_lang$core$Maybe$Just(
							{ctor: '_Tuple0'})),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('}'),
					_1: {ctor: '[]'}
				})
		};
		var start = _p78._0;
		var middle = _p78._1;
		var end = _p78._2;
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
						_1: {ctor: '[]'}
					},
					A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
						maybeKey,
						_elm_lang$core$Maybe$Just(isClosed),
						start)),
				_1: {
					ctor: '::',
					_0: middle,
					_1: {
						ctor: '::',
						_0: end,
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewSequence = F4(
	function (maybeKey, seqType, isClosed, valueList) {
		var starter = A2(
			_elm_lang$virtual_dom$VirtualDom_Expando$seqTypeToString,
			_elm_lang$core$List$length(valueList),
			seqType);
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
						_1: {ctor: '[]'}
					},
					A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
						maybeKey,
						_elm_lang$core$Maybe$Just(isClosed),
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
							_1: {ctor: '[]'}
						})),
				_1: {
					ctor: '::',
					_0: isClosed ? _elm_lang$virtual_dom$VirtualDom_Helpers$text('') : _elm_lang$virtual_dom$VirtualDom_Expando$viewSequenceOpen(valueList),
					_1: {ctor: '[]'}
				}
			});
	});

var _elm_lang$virtual_dom$VirtualDom_Report$some = function (list) {
	return !_elm_lang$core$List$isEmpty(list);
};
var _elm_lang$virtual_dom$VirtualDom_Report$TagChanges = F4(
	function (a, b, c, d) {
		return {removed: a, changed: b, added: c, argsMatch: d};
	});
var _elm_lang$virtual_dom$VirtualDom_Report$emptyTagChanges = function (argsMatch) {
	return A4(
		_elm_lang$virtual_dom$VirtualDom_Report$TagChanges,
		{ctor: '[]'},
		{ctor: '[]'},
		{ctor: '[]'},
		argsMatch);
};
var _elm_lang$virtual_dom$VirtualDom_Report$hasTagChanges = function (tagChanges) {
	return _elm_lang$core$Native_Utils.eq(
		tagChanges,
		A4(
			_elm_lang$virtual_dom$VirtualDom_Report$TagChanges,
			{ctor: '[]'},
			{ctor: '[]'},
			{ctor: '[]'},
			true));
};
var _elm_lang$virtual_dom$VirtualDom_Report$SomethingChanged = function (a) {
	return {ctor: 'SomethingChanged', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Report$MessageChanged = F2(
	function (a, b) {
		return {ctor: 'MessageChanged', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Report$VersionChanged = F2(
	function (a, b) {
		return {ctor: 'VersionChanged', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Report$CorruptHistory = {ctor: 'CorruptHistory'};
var _elm_lang$virtual_dom$VirtualDom_Report$UnionChange = F2(
	function (a, b) {
		return {ctor: 'UnionChange', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Report$AliasChange = function (a) {
	return {ctor: 'AliasChange', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Report$Fine = {ctor: 'Fine'};
var _elm_lang$virtual_dom$VirtualDom_Report$Risky = {ctor: 'Risky'};
var _elm_lang$virtual_dom$VirtualDom_Report$Impossible = {ctor: 'Impossible'};
var _elm_lang$virtual_dom$VirtualDom_Report$worstCase = F2(
	function (status, statusList) {
		worstCase:
		while (true) {
			var _p0 = statusList;
			if (_p0.ctor === '[]') {
				return status;
			} else {
				switch (_p0._0.ctor) {
					case 'Impossible':
						return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
					case 'Risky':
						var _v1 = _elm_lang$virtual_dom$VirtualDom_Report$Risky,
							_v2 = _p0._1;
						status = _v1;
						statusList = _v2;
						continue worstCase;
					default:
						var _v3 = status,
							_v4 = _p0._1;
						status = _v3;
						statusList = _v4;
						continue worstCase;
				}
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Report$evaluateChange = function (change) {
	var _p1 = change;
	if (_p1.ctor === 'AliasChange') {
		return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
	} else {
		return ((!_p1._1.argsMatch) || (_elm_lang$virtual_dom$VirtualDom_Report$some(_p1._1.changed) || _elm_lang$virtual_dom$VirtualDom_Report$some(_p1._1.removed))) ? _elm_lang$virtual_dom$VirtualDom_Report$Impossible : (_elm_lang$virtual_dom$VirtualDom_Report$some(_p1._1.added) ? _elm_lang$virtual_dom$VirtualDom_Report$Risky : _elm_lang$virtual_dom$VirtualDom_Report$Fine);
	}
};
var _elm_lang$virtual_dom$VirtualDom_Report$evaluate = function (report) {
	var _p2 = report;
	switch (_p2.ctor) {
		case 'CorruptHistory':
			return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
		case 'VersionChanged':
			return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
		case 'MessageChanged':
			return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
		default:
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Report$worstCase,
				_elm_lang$virtual_dom$VirtualDom_Report$Fine,
				A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Report$evaluateChange, _p2._0));
	}
};

var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict = F2(
	function (f, dict) {
		return _elm_lang$core$Json_Encode$object(
			_elm_lang$core$Dict$toList(
				A2(
					_elm_lang$core$Dict$map,
					F2(
						function (key, value) {
							return f(value);
						}),
					dict)));
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeUnion = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'args',
				_1: _elm_lang$core$Json_Encode$list(
					A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p1.args))
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'tags',
					_1: A2(
						_elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict,
						function (_p2) {
							return _elm_lang$core$Json_Encode$list(
								A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p2));
						},
						_p1.tags)
				},
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeAlias = function (_p3) {
	var _p4 = _p3;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'args',
				_1: _elm_lang$core$Json_Encode$list(
					A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p4.args))
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'type',
					_1: _elm_lang$core$Json_Encode$string(_p4.tipe)
				},
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeTypes = function (_p5) {
	var _p6 = _p5;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'message',
				_1: _elm_lang$core$Json_Encode$string(_p6.message)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'aliases',
					_1: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict, _elm_lang$virtual_dom$VirtualDom_Metadata$encodeAlias, _p6.aliases)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'unions',
						_1: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict, _elm_lang$virtual_dom$VirtualDom_Metadata$encodeUnion, _p6.unions)
					},
					_1: {ctor: '[]'}
				}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeVersions = function (_p7) {
	var _p8 = _p7;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'elm',
				_1: _elm_lang$core$Json_Encode$string(_p8.elm)
			},
			_1: {ctor: '[]'}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$encode = function (_p9) {
	var _p10 = _p9;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'versions',
				_1: _elm_lang$virtual_dom$VirtualDom_Metadata$encodeVersions(_p10.versions)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'types',
					_1: _elm_lang$virtual_dom$VirtualDom_Metadata$encodeTypes(_p10.types)
				},
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$checkTag = F4(
	function (tag, old, $new, changes) {
		return _elm_lang$core$Native_Utils.eq(old, $new) ? changes : _elm_lang$core$Native_Utils.update(
			changes,
			{
				changed: {ctor: '::', _0: tag, _1: changes.changed}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$addTag = F3(
	function (tag, _p11, changes) {
		return _elm_lang$core$Native_Utils.update(
			changes,
			{
				added: {ctor: '::', _0: tag, _1: changes.added}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$removeTag = F3(
	function (tag, _p12, changes) {
		return _elm_lang$core$Native_Utils.update(
			changes,
			{
				removed: {ctor: '::', _0: tag, _1: changes.removed}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$checkUnion = F4(
	function (name, old, $new, changes) {
		var tagChanges = A6(
			_elm_lang$core$Dict$merge,
			_elm_lang$virtual_dom$VirtualDom_Metadata$removeTag,
			_elm_lang$virtual_dom$VirtualDom_Metadata$checkTag,
			_elm_lang$virtual_dom$VirtualDom_Metadata$addTag,
			old.tags,
			$new.tags,
			_elm_lang$virtual_dom$VirtualDom_Report$emptyTagChanges(
				_elm_lang$core$Native_Utils.eq(old.args, $new.args)));
		return _elm_lang$virtual_dom$VirtualDom_Report$hasTagChanges(tagChanges) ? changes : {
			ctor: '::',
			_0: A2(_elm_lang$virtual_dom$VirtualDom_Report$UnionChange, name, tagChanges),
			_1: changes
		};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$checkAlias = F4(
	function (name, old, $new, changes) {
		return (_elm_lang$core$Native_Utils.eq(old.tipe, $new.tipe) && _elm_lang$core$Native_Utils.eq(old.args, $new.args)) ? changes : {
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Report$AliasChange(name),
			_1: changes
		};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$ignore = F3(
	function (key, value, report) {
		return report;
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$checkTypes = F2(
	function (old, $new) {
		return (!_elm_lang$core$Native_Utils.eq(old.message, $new.message)) ? A2(_elm_lang$virtual_dom$VirtualDom_Report$MessageChanged, old.message, $new.message) : _elm_lang$virtual_dom$VirtualDom_Report$SomethingChanged(
			A6(
				_elm_lang$core$Dict$merge,
				_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
				_elm_lang$virtual_dom$VirtualDom_Metadata$checkUnion,
				_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
				old.unions,
				$new.unions,
				A6(
					_elm_lang$core$Dict$merge,
					_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
					_elm_lang$virtual_dom$VirtualDom_Metadata$checkAlias,
					_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
					old.aliases,
					$new.aliases,
					{ctor: '[]'})));
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$check = F2(
	function (old, $new) {
		return (!_elm_lang$core$Native_Utils.eq(old.versions.elm, $new.versions.elm)) ? A2(_elm_lang$virtual_dom$VirtualDom_Report$VersionChanged, old.versions.elm, $new.versions.elm) : A2(_elm_lang$virtual_dom$VirtualDom_Metadata$checkTypes, old.types, $new.types);
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$hasProblem = F2(
	function (tipe, _p13) {
		var _p14 = _p13;
		return A2(_elm_lang$core$String$contains, _p14._1, tipe) ? _elm_lang$core$Maybe$Just(_p14._0) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$Metadata = F2(
	function (a, b) {
		return {versions: a, types: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$Versions = function (a) {
	return {elm: a};
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeVersions = A2(
	_elm_lang$core$Json_Decode$map,
	_elm_lang$virtual_dom$VirtualDom_Metadata$Versions,
	A2(_elm_lang$core$Json_Decode$field, 'elm', _elm_lang$core$Json_Decode$string));
var _elm_lang$virtual_dom$VirtualDom_Metadata$Types = F3(
	function (a, b, c) {
		return {message: a, aliases: b, unions: c};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$Alias = F2(
	function (a, b) {
		return {args: a, tipe: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeAlias = A3(
	_elm_lang$core$Json_Decode$map2,
	_elm_lang$virtual_dom$VirtualDom_Metadata$Alias,
	A2(
		_elm_lang$core$Json_Decode$field,
		'args',
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)),
	A2(_elm_lang$core$Json_Decode$field, 'type', _elm_lang$core$Json_Decode$string));
var _elm_lang$virtual_dom$VirtualDom_Metadata$Union = F2(
	function (a, b) {
		return {args: a, tags: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeUnion = A3(
	_elm_lang$core$Json_Decode$map2,
	_elm_lang$virtual_dom$VirtualDom_Metadata$Union,
	A2(
		_elm_lang$core$Json_Decode$field,
		'args',
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)),
	A2(
		_elm_lang$core$Json_Decode$field,
		'tags',
		_elm_lang$core$Json_Decode$dict(
			_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string))));
var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeTypes = A4(
	_elm_lang$core$Json_Decode$map3,
	_elm_lang$virtual_dom$VirtualDom_Metadata$Types,
	A2(_elm_lang$core$Json_Decode$field, 'message', _elm_lang$core$Json_Decode$string),
	A2(
		_elm_lang$core$Json_Decode$field,
		'aliases',
		_elm_lang$core$Json_Decode$dict(_elm_lang$virtual_dom$VirtualDom_Metadata$decodeAlias)),
	A2(
		_elm_lang$core$Json_Decode$field,
		'unions',
		_elm_lang$core$Json_Decode$dict(_elm_lang$virtual_dom$VirtualDom_Metadata$decodeUnion)));
var _elm_lang$virtual_dom$VirtualDom_Metadata$decoder = A3(
	_elm_lang$core$Json_Decode$map2,
	_elm_lang$virtual_dom$VirtualDom_Metadata$Metadata,
	A2(_elm_lang$core$Json_Decode$field, 'versions', _elm_lang$virtual_dom$VirtualDom_Metadata$decodeVersions),
	A2(_elm_lang$core$Json_Decode$field, 'types', _elm_lang$virtual_dom$VirtualDom_Metadata$decodeTypes));
var _elm_lang$virtual_dom$VirtualDom_Metadata$Error = F2(
	function (a, b) {
		return {message: a, problems: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$ProblemType = F2(
	function (a, b) {
		return {name: a, problems: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$VirtualDom = {ctor: 'VirtualDom'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Program = {ctor: 'Program'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Request = {ctor: 'Request'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Socket = {ctor: 'Socket'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Process = {ctor: 'Process'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Task = {ctor: 'Task'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Decoder = {ctor: 'Decoder'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Function = {ctor: 'Function'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$problemTable = {
	ctor: '::',
	_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Function, _1: '->'},
	_1: {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Decoder, _1: 'Json.Decode.Decoder'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Task, _1: 'Task.Task'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Process, _1: 'Process.Id'},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Socket, _1: 'WebSocket.LowLevel.WebSocket'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Request, _1: 'Http.Request'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Program, _1: 'Platform.Program'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$VirtualDom, _1: 'VirtualDom.Node'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$VirtualDom, _1: 'VirtualDom.Attribute'},
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$findProblems = function (tipe) {
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$virtual_dom$VirtualDom_Metadata$hasProblem(tipe),
		_elm_lang$virtual_dom$VirtualDom_Metadata$problemTable);
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$collectBadAliases = F3(
	function (name, _p15, list) {
		var _p16 = _p15;
		var _p17 = _elm_lang$virtual_dom$VirtualDom_Metadata$findProblems(_p16.tipe);
		if (_p17.ctor === '[]') {
			return list;
		} else {
			return {
				ctor: '::',
				_0: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$ProblemType, name, _p17),
				_1: list
			};
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$collectBadUnions = F3(
	function (name, _p18, list) {
		var _p19 = _p18;
		var _p20 = A2(
			_elm_lang$core$List$concatMap,
			_elm_lang$virtual_dom$VirtualDom_Metadata$findProblems,
			_elm_lang$core$List$concat(
				_elm_lang$core$Dict$values(_p19.tags)));
		if (_p20.ctor === '[]') {
			return list;
		} else {
			return {
				ctor: '::',
				_0: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$ProblemType, name, _p20),
				_1: list
			};
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$isPortable = function (_p21) {
	var _p22 = _p21;
	var _p24 = _p22.types;
	var badAliases = A3(
		_elm_lang$core$Dict$foldl,
		_elm_lang$virtual_dom$VirtualDom_Metadata$collectBadAliases,
		{ctor: '[]'},
		_p24.aliases);
	var _p23 = A3(_elm_lang$core$Dict$foldl, _elm_lang$virtual_dom$VirtualDom_Metadata$collectBadUnions, badAliases, _p24.unions);
	if (_p23.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			A2(_elm_lang$virtual_dom$VirtualDom_Metadata$Error, _p24.message, _p23));
	}
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$decode = function (value) {
	var _p25 = A2(_elm_lang$core$Json_Decode$decodeValue, _elm_lang$virtual_dom$VirtualDom_Metadata$decoder, value);
	if (_p25.ctor === 'Err') {
		return _elm_lang$core$Native_Utils.crashCase(
			'VirtualDom.Metadata',
			{
				start: {line: 229, column: 3},
				end: {line: 239, column: 20}
			},
			_p25)('Compiler is generating bad metadata. Report this at <https://github.com/elm-lang/virtual-dom/issues>.');
	} else {
		var _p28 = _p25._0;
		var _p27 = _elm_lang$virtual_dom$VirtualDom_Metadata$isPortable(_p28);
		if (_p27.ctor === 'Nothing') {
			return _elm_lang$core$Result$Ok(_p28);
		} else {
			return _elm_lang$core$Result$Err(_p27._0);
		}
	}
};

var _elm_lang$virtual_dom$VirtualDom_History$viewMessage = F3(
	function (currentIndex, index, msg) {
		var messageName = _elm_lang$virtual_dom$Native_Debug.messageToString(msg);
		var className = _elm_lang$core$Native_Utils.eq(currentIndex, index) ? 'messages-entry messages-entry-selected' : 'messages-entry';
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class(className),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$on,
						'click',
						_elm_lang$core$Json_Decode$succeed(index)),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$span,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('messages-entry-content'),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$virtual_dom$VirtualDom_Helpers$attribute, 'title', messageName),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(messageName),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('messages-entry-index'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
								_elm_lang$core$Basics$toString(index)),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_History$consMsg = F3(
	function (currentIndex, msg, _p0) {
		var _p1 = _p0;
		var _p2 = _p1._0;
		return {
			ctor: '_Tuple2',
			_0: _p2 - 1,
			_1: {
				ctor: '::',
				_0: A4(_elm_lang$virtual_dom$VirtualDom_Helpers$lazy3, _elm_lang$virtual_dom$VirtualDom_History$viewMessage, currentIndex, _p2, msg),
				_1: _p1._1
			}
		};
	});
var _elm_lang$virtual_dom$VirtualDom_History$viewSnapshot = F3(
	function (currentIndex, index, _p3) {
		var _p4 = _p3;
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{ctor: '[]'},
			_elm_lang$core$Tuple$second(
				A3(
					_elm_lang$core$Array$foldl,
					_elm_lang$virtual_dom$VirtualDom_History$consMsg(currentIndex),
					{
						ctor: '_Tuple2',
						_0: index - 1,
						_1: {ctor: '[]'}
					},
					_p4.messages)));
	});
var _elm_lang$virtual_dom$VirtualDom_History$undone = function (getResult) {
	var _p5 = getResult;
	if (_p5.ctor === 'Done') {
		return {ctor: '_Tuple2', _0: _p5._1, _1: _p5._0};
	} else {
		return _elm_lang$core$Native_Utils.crashCase(
			'VirtualDom.History',
			{
				start: {line: 195, column: 3},
				end: {line: 200, column: 39}
			},
			_p5)('Bug in History.get');
	}
};
var _elm_lang$virtual_dom$VirtualDom_History$elmToJs = _elm_lang$virtual_dom$Native_Debug.unsafeCoerce;
var _elm_lang$virtual_dom$VirtualDom_History$encodeHelp = F2(
	function (snapshot, allMessages) {
		return A3(
			_elm_lang$core$Array$foldl,
			F2(
				function (elm, msgs) {
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_History$elmToJs(elm),
						_1: msgs
					};
				}),
			allMessages,
			snapshot.messages);
	});
var _elm_lang$virtual_dom$VirtualDom_History$encode = function (_p7) {
	var _p8 = _p7;
	var recentJson = A2(
		_elm_lang$core$List$map,
		_elm_lang$virtual_dom$VirtualDom_History$elmToJs,
		_elm_lang$core$List$reverse(_p8.recent.messages));
	return _elm_lang$core$Json_Encode$list(
		A3(_elm_lang$core$Array$foldr, _elm_lang$virtual_dom$VirtualDom_History$encodeHelp, recentJson, _p8.snapshots));
};
var _elm_lang$virtual_dom$VirtualDom_History$jsToElm = _elm_lang$virtual_dom$Native_Debug.unsafeCoerce;
var _elm_lang$virtual_dom$VirtualDom_History$initialModel = function (_p9) {
	var _p10 = _p9;
	var _p11 = A2(_elm_lang$core$Array$get, 0, _p10.snapshots);
	if (_p11.ctor === 'Just') {
		return _p11._0.model;
	} else {
		return _p10.recent.model;
	}
};
var _elm_lang$virtual_dom$VirtualDom_History$size = function (history) {
	return history.numMessages;
};
var _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize = 64;
var _elm_lang$virtual_dom$VirtualDom_History$consSnapshot = F3(
	function (currentIndex, snapshot, _p12) {
		var _p13 = _p12;
		var _p14 = _p13._0;
		var nextIndex = _p14 - _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize;
		var currentIndexHelp = ((_elm_lang$core$Native_Utils.cmp(nextIndex, currentIndex) < 1) && (_elm_lang$core$Native_Utils.cmp(currentIndex, _p14) < 0)) ? currentIndex : -1;
		return {
			ctor: '_Tuple2',
			_0: _p14 - _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize,
			_1: {
				ctor: '::',
				_0: A4(_elm_lang$virtual_dom$VirtualDom_Helpers$lazy3, _elm_lang$virtual_dom$VirtualDom_History$viewSnapshot, currentIndexHelp, _p14, snapshot),
				_1: _p13._1
			}
		};
	});
var _elm_lang$virtual_dom$VirtualDom_History$viewSnapshots = F2(
	function (currentIndex, snapshots) {
		var highIndex = _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize * _elm_lang$core$Array$length(snapshots);
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{ctor: '[]'},
			_elm_lang$core$Tuple$second(
				A3(
					_elm_lang$core$Array$foldr,
					_elm_lang$virtual_dom$VirtualDom_History$consSnapshot(currentIndex),
					{
						ctor: '_Tuple2',
						_0: highIndex,
						_1: {ctor: '[]'}
					},
					snapshots)));
	});
var _elm_lang$virtual_dom$VirtualDom_History$view = F2(
	function (maybeIndex, _p15) {
		var _p16 = _p15;
		var _p17 = function () {
			var _p18 = maybeIndex;
			if (_p18.ctor === 'Nothing') {
				return {ctor: '_Tuple2', _0: -1, _1: 'debugger-sidebar-messages'};
			} else {
				return {ctor: '_Tuple2', _0: _p18._0, _1: 'debugger-sidebar-messages-paused'};
			}
		}();
		var index = _p17._0;
		var className = _p17._1;
		var oldStuff = A3(_elm_lang$virtual_dom$VirtualDom_Helpers$lazy2, _elm_lang$virtual_dom$VirtualDom_History$viewSnapshots, index, _p16.snapshots);
		var newStuff = _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				_elm_lang$virtual_dom$VirtualDom_History$consMsg(index),
				{
					ctor: '_Tuple2',
					_0: _p16.numMessages - 1,
					_1: {ctor: '[]'}
				},
				_p16.recent.messages));
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class(className),
				_1: {ctor: '[]'}
			},
			{ctor: '::', _0: oldStuff, _1: newStuff});
	});
var _elm_lang$virtual_dom$VirtualDom_History$History = F3(
	function (a, b, c) {
		return {snapshots: a, recent: b, numMessages: c};
	});
var _elm_lang$virtual_dom$VirtualDom_History$RecentHistory = F3(
	function (a, b, c) {
		return {model: a, messages: b, numMessages: c};
	});
var _elm_lang$virtual_dom$VirtualDom_History$empty = function (model) {
	return A3(
		_elm_lang$virtual_dom$VirtualDom_History$History,
		_elm_lang$core$Array$empty,
		A3(
			_elm_lang$virtual_dom$VirtualDom_History$RecentHistory,
			model,
			{ctor: '[]'},
			0),
		0);
};
var _elm_lang$virtual_dom$VirtualDom_History$Snapshot = F2(
	function (a, b) {
		return {model: a, messages: b};
	});
var _elm_lang$virtual_dom$VirtualDom_History$addRecent = F3(
	function (msg, newModel, _p19) {
		var _p20 = _p19;
		var _p23 = _p20.numMessages;
		var _p22 = _p20.model;
		var _p21 = _p20.messages;
		return _elm_lang$core$Native_Utils.eq(_p23, _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize) ? {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Maybe$Just(
				A2(
					_elm_lang$virtual_dom$VirtualDom_History$Snapshot,
					_p22,
					_elm_lang$core$Array$fromList(_p21))),
			_1: A3(
				_elm_lang$virtual_dom$VirtualDom_History$RecentHistory,
				newModel,
				{
					ctor: '::',
					_0: msg,
					_1: {ctor: '[]'}
				},
				1)
		} : {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Maybe$Nothing,
			_1: A3(
				_elm_lang$virtual_dom$VirtualDom_History$RecentHistory,
				_p22,
				{ctor: '::', _0: msg, _1: _p21},
				_p23 + 1)
		};
	});
var _elm_lang$virtual_dom$VirtualDom_History$add = F3(
	function (msg, model, _p24) {
		var _p25 = _p24;
		var _p28 = _p25.snapshots;
		var _p27 = _p25.numMessages;
		var _p26 = A3(_elm_lang$virtual_dom$VirtualDom_History$addRecent, msg, model, _p25.recent);
		if (_p26._0.ctor === 'Just') {
			return A3(
				_elm_lang$virtual_dom$VirtualDom_History$History,
				A2(_elm_lang$core$Array$push, _p26._0._0, _p28),
				_p26._1,
				_p27 + 1);
		} else {
			return A3(_elm_lang$virtual_dom$VirtualDom_History$History, _p28, _p26._1, _p27 + 1);
		}
	});
var _elm_lang$virtual_dom$VirtualDom_History$decoder = F2(
	function (initialModel, update) {
		var addMessage = F2(
			function (rawMsg, _p29) {
				var _p30 = _p29;
				var _p31 = _p30._0;
				var msg = _elm_lang$virtual_dom$VirtualDom_History$jsToElm(rawMsg);
				return {
					ctor: '_Tuple2',
					_0: A2(update, msg, _p31),
					_1: A3(_elm_lang$virtual_dom$VirtualDom_History$add, msg, _p31, _p30._1)
				};
			});
		var updateModel = function (rawMsgs) {
			return A3(
				_elm_lang$core$List$foldl,
				addMessage,
				{
					ctor: '_Tuple2',
					_0: initialModel,
					_1: _elm_lang$virtual_dom$VirtualDom_History$empty(initialModel)
				},
				rawMsgs);
		};
		return A2(
			_elm_lang$core$Json_Decode$map,
			updateModel,
			_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value));
	});
var _elm_lang$virtual_dom$VirtualDom_History$Done = F2(
	function (a, b) {
		return {ctor: 'Done', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_History$Stepping = F2(
	function (a, b) {
		return {ctor: 'Stepping', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_History$getHelp = F3(
	function (update, msg, getResult) {
		var _p32 = getResult;
		if (_p32.ctor === 'Done') {
			return getResult;
		} else {
			var _p34 = _p32._0;
			var _p33 = _p32._1;
			return _elm_lang$core$Native_Utils.eq(_p34, 0) ? A2(
				_elm_lang$virtual_dom$VirtualDom_History$Done,
				msg,
				_elm_lang$core$Tuple$first(
					A2(update, msg, _p33))) : A2(
				_elm_lang$virtual_dom$VirtualDom_History$Stepping,
				_p34 - 1,
				_elm_lang$core$Tuple$first(
					A2(update, msg, _p33)));
		}
	});
var _elm_lang$virtual_dom$VirtualDom_History$get = F3(
	function (update, index, _p35) {
		var _p36 = _p35;
		var _p39 = _p36.recent;
		var snapshotMax = _p36.numMessages - _p39.numMessages;
		if (_elm_lang$core$Native_Utils.cmp(index, snapshotMax) > -1) {
			return _elm_lang$virtual_dom$VirtualDom_History$undone(
				A3(
					_elm_lang$core$List$foldr,
					_elm_lang$virtual_dom$VirtualDom_History$getHelp(update),
					A2(_elm_lang$virtual_dom$VirtualDom_History$Stepping, index - snapshotMax, _p39.model),
					_p39.messages));
		} else {
			var _p37 = A2(_elm_lang$core$Array$get, (index / _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize) | 0, _p36.snapshots);
			if (_p37.ctor === 'Nothing') {
				return _elm_lang$core$Native_Utils.crashCase(
					'VirtualDom.History',
					{
						start: {line: 165, column: 7},
						end: {line: 171, column: 95}
					},
					_p37)('UI should only let you ask for real indexes!');
			} else {
				return _elm_lang$virtual_dom$VirtualDom_History$undone(
					A3(
						_elm_lang$core$Array$foldr,
						_elm_lang$virtual_dom$VirtualDom_History$getHelp(update),
						A2(
							_elm_lang$virtual_dom$VirtualDom_History$Stepping,
							A2(_elm_lang$core$Basics$rem, index, _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize),
							_p37._0.model),
						_p37._0.messages));
			}
		}
	});

var _elm_lang$virtual_dom$VirtualDom_Overlay$styles = A3(
	_elm_lang$virtual_dom$VirtualDom_Helpers$node,
	'style',
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('\n\n.elm-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  color: white;\n  pointer-events: none;\n  font-family: \'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif;\n}\n\n.elm-overlay-resume {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  text-align: center;\n  pointer-events: auto;\n  background-color: rgba(200, 200, 200, 0.7);\n}\n\n.elm-overlay-resume-words {\n  position: absolute;\n  top: calc(50% - 40px);\n  font-size: 80px;\n  line-height: 80px;\n  height: 80px;\n  width: 100%;\n}\n\n.elm-mini-controls {\n  position: fixed;\n  bottom: 0;\n  right: 6px;\n  border-radius: 4px;\n  background-color: rgb(61, 61, 61);\n  font-family: monospace;\n  pointer-events: auto;\n}\n\n.elm-mini-controls-button {\n  padding: 6px;\n  cursor: pointer;\n  text-align: center;\n  min-width: 24ch;\n}\n\n.elm-mini-controls-import-export {\n  padding: 4px 0;\n  font-size: 0.8em;\n  text-align: center;\n  background-color: rgb(50, 50, 50);\n}\n\n.elm-overlay-message {\n  position: absolute;\n  width: 600px;\n  height: 100%;\n  padding-left: calc(50% - 300px);\n  padding-right: calc(50% - 300px);\n  background-color: rgba(200, 200, 200, 0.7);\n  pointer-events: auto;\n}\n\n.elm-overlay-message-title {\n  font-size: 36px;\n  height: 80px;\n  background-color: rgb(50, 50, 50);\n  padding-left: 22px;\n  vertical-align: middle;\n  line-height: 80px;\n}\n\n.elm-overlay-message-details {\n  padding: 8px 20px;\n  overflow-y: auto;\n  max-height: calc(100% - 156px);\n  background-color: rgb(61, 61, 61);\n}\n\n.elm-overlay-message-details-type {\n  font-size: 1.5em;\n}\n\n.elm-overlay-message-details ul {\n  list-style-type: none;\n  padding-left: 20px;\n}\n\n.elm-overlay-message-details ul ul {\n  list-style-type: disc;\n  padding-left: 2em;\n}\n\n.elm-overlay-message-details li {\n  margin: 8px 0;\n}\n\n.elm-overlay-message-buttons {\n  height: 60px;\n  line-height: 60px;\n  text-align: right;\n  background-color: rgb(50, 50, 50);\n}\n\n.elm-overlay-message-buttons button {\n  margin-right: 20px;\n}\n\n'),
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$button = F2(
	function (msg, label) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$span,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(msg),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(label),
				_1: {ctor: '[]'}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewImportExport = F3(
	function (props, importMsg, exportMsg) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			props,
			{
				ctor: '::',
				_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$button, importMsg, 'Import'),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' / '),
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$button, exportMsg, 'Export'),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewMiniControls = F2(
	function (config, numMsgs) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-mini-controls'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(config.open),
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-mini-controls-button'),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'Explore History (',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(numMsgs),
									')'))),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Overlay$viewImportExport,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-mini-controls-import-export'),
							_1: {ctor: '[]'}
						},
						config.importHistory,
						config.exportHistory),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$addCommas = function (items) {
	var _p0 = items;
	if (_p0.ctor === '[]') {
		return '';
	} else {
		if (_p0._1.ctor === '[]') {
			return _p0._0;
		} else {
			if (_p0._1._1.ctor === '[]') {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_p0._0,
					A2(_elm_lang$core$Basics_ops['++'], ' and ', _p0._1._0));
			} else {
				return A2(
					_elm_lang$core$String$join,
					', ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p0._1,
						{
							ctor: '::',
							_0: A2(_elm_lang$core$Basics_ops['++'], ' and ', _p0._0),
							_1: {ctor: '[]'}
						}));
			}
		}
	}
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$problemToString = function (problem) {
	var _p1 = problem;
	switch (_p1.ctor) {
		case 'Function':
			return 'functions';
		case 'Decoder':
			return 'JSON decoders';
		case 'Task':
			return 'tasks';
		case 'Process':
			return 'processes';
		case 'Socket':
			return 'web sockets';
		case 'Request':
			return 'HTTP requests';
		case 'Program':
			return 'programs';
		default:
			return 'virtual DOM values';
	}
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$goodNews2 = '\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n';
var _elm_lang$virtual_dom$VirtualDom_Overlay$goodNews1 = '\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n';
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode = function (name) {
	return A3(
		_elm_lang$virtual_dom$VirtualDom_Helpers$node,
		'code',
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(name),
			_1: {ctor: '[]'}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewMention = F2(
	function (tags, verbed) {
		var _p2 = A2(
			_elm_lang$core$List$map,
			_elm_lang$virtual_dom$VirtualDom_Overlay$viewCode,
			_elm_lang$core$List$reverse(tags));
		if (_p2.ctor === '[]') {
			return _elm_lang$virtual_dom$VirtualDom_Helpers$text('');
		} else {
			if (_p2._1.ctor === '[]') {
				return A3(
					_elm_lang$virtual_dom$VirtualDom_Helpers$node,
					'li',
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(verbed),
						_1: {
							ctor: '::',
							_0: _p2._0,
							_1: {
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('.'),
								_1: {ctor: '[]'}
							}
						}
					});
			} else {
				if (_p2._1._1.ctor === '[]') {
					return A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'li',
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(verbed),
							_1: {
								ctor: '::',
								_0: _p2._1._0,
								_1: {
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' and '),
									_1: {
										ctor: '::',
										_0: _p2._0,
										_1: {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('.'),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						});
				} else {
					return A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'li',
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(verbed),
							_1: A2(
								_elm_lang$core$Basics_ops['++'],
								A2(
									_elm_lang$core$List$intersperse,
									_elm_lang$virtual_dom$VirtualDom_Helpers$text(', '),
									_elm_lang$core$List$reverse(_p2._1)),
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', and '),
									_1: {
										ctor: '::',
										_0: _p2._0,
										_1: {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('.'),
											_1: {ctor: '[]'}
										}
									}
								})
						});
				}
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewChange = function (change) {
	return A3(
		_elm_lang$virtual_dom$VirtualDom_Helpers$node,
		'li',
		{ctor: '[]'},
		function () {
			var _p3 = change;
			if (_p3.ctor === 'AliasChange') {
				return {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-details-type'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p3._0),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-details-type'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p3._0),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_elm_lang$virtual_dom$VirtualDom_Helpers$node,
							'ul',
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMention, _p3._1.removed, 'Removed '),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMention, _p3._1.changed, 'Changed '),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMention, _p3._1.added, 'Added '),
										_1: {ctor: '[]'}
									}
								}
							}),
						_1: {
							ctor: '::',
							_0: _p3._1.argsMatch ? _elm_lang$virtual_dom$VirtualDom_Helpers$text('') : _elm_lang$virtual_dom$VirtualDom_Helpers$text('This may be due to the fact that the type variable names changed.'),
							_1: {ctor: '[]'}
						}
					}
				};
			}
		}());
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewProblemType = function (_p4) {
	var _p5 = _p4;
	return A3(
		_elm_lang$virtual_dom$VirtualDom_Helpers$node,
		'li',
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p5.name),
			_1: {
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
					A2(
						_elm_lang$core$Basics_ops['++'],
						' can contain ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$virtual_dom$VirtualDom_Overlay$addCommas(
								A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Overlay$problemToString, _p5.problems)),
							'.'))),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewBadMetadata = function (_p6) {
	var _p7 = _p6;
	return {
		ctor: '::',
		_0: A3(
			_elm_lang$virtual_dom$VirtualDom_Helpers$node,
			'p',
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('The '),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p7.message),
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' type of your program cannot be reliably serialized for history files.'),
						_1: {ctor: '[]'}
					}
				}
			}),
		_1: {
			ctor: '::',
			_0: A3(
				_elm_lang$virtual_dom$VirtualDom_Helpers$node,
				'p',
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A3(
					_elm_lang$virtual_dom$VirtualDom_Helpers$node,
					'ul',
					{ctor: '[]'},
					A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Overlay$viewProblemType, _p7.problems)),
				_1: {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'p',
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_elm_lang$virtual_dom$VirtualDom_Overlay$goodNews1),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$a,
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$href('https://guide.elm-lang.org/types/union_types.html'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('union types'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', in your messages. From there, your '),
									_1: {
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode('update'),
										_1: {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_elm_lang$virtual_dom$VirtualDom_Overlay$goodNews2),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			}
		}
	};
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$explanationRisky = '\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n';
var _elm_lang$virtual_dom$VirtualDom_Overlay$explanationBad = '\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n';
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewReport = F2(
	function (isBad, report) {
		var _p8 = report;
		switch (_p8.ctor) {
			case 'CorruptHistory':
				return {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Looks like this history file is corrupt. I cannot understand it.'),
					_1: {ctor: '[]'}
				};
			case 'VersionChanged':
				return {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'This history was created with Elm ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_p8._0,
								A2(
									_elm_lang$core$Basics_ops['++'],
									', but you are using Elm ',
									A2(_elm_lang$core$Basics_ops['++'], _p8._1, ' right now.'))))),
					_1: {ctor: '[]'}
				};
			case 'MessageChanged':
				return {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
						A2(_elm_lang$core$Basics_ops['++'], 'To import some other history, the overall message type must', ' be the same. The old history has ')),
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p8._0),
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' messages, but the new program works with '),
							_1: {
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p8._1),
								_1: {
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' messages.'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				};
			default:
				return {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'p',
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
								isBad ? _elm_lang$virtual_dom$VirtualDom_Overlay$explanationBad : _elm_lang$virtual_dom$VirtualDom_Overlay$explanationRisky),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_elm_lang$virtual_dom$VirtualDom_Helpers$node,
							'ul',
							{ctor: '[]'},
							A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Overlay$viewChange, _p8._0)),
						_1: {ctor: '[]'}
					}
				};
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewResume = function (config) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-resume'),
			_1: {
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(config.resume),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-resume-words'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Click to Resume'),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$uploadDecoder = A3(
	_elm_lang$core$Json_Decode$map2,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}),
	A2(_elm_lang$core$Json_Decode$field, 'metadata', _elm_lang$virtual_dom$VirtualDom_Metadata$decoder),
	A2(_elm_lang$core$Json_Decode$field, 'history', _elm_lang$core$Json_Decode$value));
var _elm_lang$virtual_dom$VirtualDom_Overlay$close = F2(
	function (msg, state) {
		var _p9 = state;
		switch (_p9.ctor) {
			case 'None':
				return _elm_lang$core$Maybe$Nothing;
			case 'BadMetadata':
				return _elm_lang$core$Maybe$Nothing;
			case 'BadImport':
				return _elm_lang$core$Maybe$Nothing;
			default:
				var _p10 = msg;
				if (_p10.ctor === 'Cancel') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					return _elm_lang$core$Maybe$Just(_p9._1);
				}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$isBlocking = function (state) {
	var _p11 = state;
	if (_p11.ctor === 'None') {
		return false;
	} else {
		return true;
	}
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$Config = F5(
	function (a, b, c, d, e) {
		return {resume: a, open: b, importHistory: c, exportHistory: d, wrap: e};
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$RiskyImport = F2(
	function (a, b) {
		return {ctor: 'RiskyImport', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$BadImport = function (a) {
	return {ctor: 'BadImport', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$corruptImport = _elm_lang$virtual_dom$VirtualDom_Overlay$BadImport(_elm_lang$virtual_dom$VirtualDom_Report$CorruptHistory);
var _elm_lang$virtual_dom$VirtualDom_Overlay$assessImport = F2(
	function (metadata, jsonString) {
		var _p12 = A2(_elm_lang$core$Json_Decode$decodeString, _elm_lang$virtual_dom$VirtualDom_Overlay$uploadDecoder, jsonString);
		if (_p12.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_elm_lang$virtual_dom$VirtualDom_Overlay$corruptImport);
		} else {
			var _p14 = _p12._0._1;
			var report = A2(_elm_lang$virtual_dom$VirtualDom_Metadata$check, _p12._0._0, metadata);
			var _p13 = _elm_lang$virtual_dom$VirtualDom_Report$evaluate(report);
			switch (_p13.ctor) {
				case 'Impossible':
					return _elm_lang$core$Result$Err(
						_elm_lang$virtual_dom$VirtualDom_Overlay$BadImport(report));
				case 'Risky':
					return _elm_lang$core$Result$Err(
						A2(_elm_lang$virtual_dom$VirtualDom_Overlay$RiskyImport, report, _p14));
				default:
					return _elm_lang$core$Result$Ok(_p14);
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$BadMetadata = function (a) {
	return {ctor: 'BadMetadata', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$badMetadata = _elm_lang$virtual_dom$VirtualDom_Overlay$BadMetadata;
var _elm_lang$virtual_dom$VirtualDom_Overlay$None = {ctor: 'None'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$none = _elm_lang$virtual_dom$VirtualDom_Overlay$None;
var _elm_lang$virtual_dom$VirtualDom_Overlay$Proceed = {ctor: 'Proceed'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$Cancel = {ctor: 'Cancel'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewButtons = function (buttons) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-buttons'),
			_1: {ctor: '[]'}
		},
		function () {
			var _p15 = buttons;
			if (_p15.ctor === 'Accept') {
				return {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'button',
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Overlay$Proceed),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p15._0),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'button',
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Overlay$Cancel),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p15._0),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_elm_lang$virtual_dom$VirtualDom_Helpers$node,
							'button',
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Overlay$Proceed),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p15._1),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				};
			}
		}());
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$Message = {ctor: 'Message'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage = F4(
	function (config, title, details, buttons) {
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$virtual_dom$VirtualDom_Overlay$Message,
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$div,
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-title'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(title),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$div,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-details'),
									_1: {ctor: '[]'}
								},
								details),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									config.wrap,
									_elm_lang$virtual_dom$VirtualDom_Overlay$viewButtons(buttons)),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		};
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$Pause = {ctor: 'Pause'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$Normal = {ctor: 'Normal'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$Choose = F2(
	function (a, b) {
		return {ctor: 'Choose', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$Accept = function (a) {
	return {ctor: 'Accept', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewHelp = F5(
	function (config, isPaused, isOpen, numMsgs, state) {
		var _p16 = state;
		switch (_p16.ctor) {
			case 'None':
				var miniControls = isOpen ? {ctor: '[]'} : {
					ctor: '::',
					_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMiniControls, config, numMsgs),
					_1: {ctor: '[]'}
				};
				return {
					ctor: '_Tuple2',
					_0: isPaused ? _elm_lang$virtual_dom$VirtualDom_Overlay$Pause : _elm_lang$virtual_dom$VirtualDom_Overlay$Normal,
					_1: (isPaused && (!isOpen)) ? {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewResume(config),
						_1: miniControls
					} : miniControls
				};
			case 'BadMetadata':
				return A4(
					_elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage,
					config,
					'Cannot use Import or Export',
					_elm_lang$virtual_dom$VirtualDom_Overlay$viewBadMetadata(_p16._0),
					_elm_lang$virtual_dom$VirtualDom_Overlay$Accept('Ok'));
			case 'BadImport':
				return A4(
					_elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage,
					config,
					'Cannot Import History',
					A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewReport, true, _p16._0),
					_elm_lang$virtual_dom$VirtualDom_Overlay$Accept('Ok'));
			default:
				return A4(
					_elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage,
					config,
					'Warning',
					A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewReport, false, _p16._0),
					A2(_elm_lang$virtual_dom$VirtualDom_Overlay$Choose, 'Cancel', 'Import Anyway'));
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$view = F5(
	function (config, isPaused, isOpen, numMsgs, state) {
		var _p17 = A5(_elm_lang$virtual_dom$VirtualDom_Overlay$viewHelp, config, isPaused, isOpen, numMsgs, state);
		var block = _p17._0;
		var nodes = _p17._1;
		return {
			ctor: '_Tuple2',
			_0: block,
			_1: A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay'),
					_1: {ctor: '[]'}
				},
				{ctor: '::', _0: _elm_lang$virtual_dom$VirtualDom_Overlay$styles, _1: nodes})
		};
	});

var _elm_lang$virtual_dom$VirtualDom_Debug$styles = A3(
	_elm_lang$virtual_dom$VirtualDom_Helpers$node,
	'style',
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('\n\nhtml {\n    overflow: hidden;\n    height: 100%;\n}\n\nbody {\n    height: 100%;\n    overflow: auto;\n}\n\n#debugger {\n  width: 100%\n  height: 100%;\n  font-family: monospace;\n}\n\n#values {\n  display: block;\n  float: left;\n  height: 100%;\n  width: calc(100% - 30ch);\n  margin: 0;\n  overflow: auto;\n  cursor: default;\n}\n\n.debugger-sidebar {\n  display: block;\n  float: left;\n  width: 30ch;\n  height: 100%;\n  color: white;\n  background-color: rgb(61, 61, 61);\n}\n\n.debugger-sidebar-controls {\n  width: 100%;\n  text-align: center;\n  background-color: rgb(50, 50, 50);\n}\n\n.debugger-sidebar-controls-import-export {\n  width: 100%;\n  height: 24px;\n  line-height: 24px;\n  font-size: 12px;\n}\n\n.debugger-sidebar-controls-resume {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n}\n\n.debugger-sidebar-controls-resume:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.debugger-sidebar-messages {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 24px);\n}\n\n.debugger-sidebar-messages-paused {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 54px);\n}\n\n.messages-entry {\n  cursor: pointer;\n  width: 100%;\n}\n\n.messages-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.messages-entry-selected, .messages-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.messages-entry-content {\n  width: calc(100% - 7ch);\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 1ch;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.messages-entry-index {\n  color: #666;\n  width: 5ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-right: 1ch;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n'),
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$button = F2(
	function (msg, label) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$span,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(msg),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(label),
				_1: {ctor: '[]'}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel = function (state) {
	var _p0 = state;
	if (_p0.ctor === 'Running') {
		return _p0._0;
	} else {
		return _p0._2;
	}
};
var _elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata = F2(
	function (model, func) {
		var _p1 = model.metadata;
		if (_p1.ctor === 'Ok') {
			return func(_p1._0);
		} else {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					model,
					{
						overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$badMetadata(_p1._0)
					}),
				{ctor: '[]'});
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$Model = F6(
	function (a, b, c, d, e, f) {
		return {history: a, state: b, expando: c, metadata: d, overlay: e, isDebuggerOpen: f};
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$Paused = F3(
	function (a, b, c) {
		return {ctor: 'Paused', _0: a, _1: b, _2: c};
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$Running = function (a) {
	return {ctor: 'Running', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$loadNewHistory = F3(
	function (rawHistory, userUpdate, model) {
		var pureUserUpdate = F2(
			function (msg, userModel) {
				return _elm_lang$core$Tuple$first(
					A2(userUpdate, msg, userModel));
			});
		var initialUserModel = _elm_lang$virtual_dom$VirtualDom_History$initialModel(model.history);
		var decoder = A2(_elm_lang$virtual_dom$VirtualDom_History$decoder, initialUserModel, pureUserUpdate);
		var _p2 = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, rawHistory);
		if (_p2.ctor === 'Err') {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					model,
					{overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$corruptImport}),
				{ctor: '[]'});
		} else {
			var _p3 = _p2._0._0;
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					model,
					{
						history: _p2._0._1,
						state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(_p3),
						expando: _elm_lang$virtual_dom$VirtualDom_Expando$init(_p3),
						overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$none
					}),
				{ctor: '[]'});
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$OverlayMsg = function (a) {
	return {ctor: 'OverlayMsg', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$Upload = function (a) {
	return {ctor: 'Upload', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$upload = A2(_elm_lang$core$Task$perform, _elm_lang$virtual_dom$VirtualDom_Debug$Upload, _elm_lang$virtual_dom$Native_Debug.upload);
var _elm_lang$virtual_dom$VirtualDom_Debug$Export = {ctor: 'Export'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Import = {ctor: 'Import'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Down = {ctor: 'Down'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Up = {ctor: 'Up'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Close = {ctor: 'Close'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Open = {ctor: 'Open'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Jump = function (a) {
	return {ctor: 'Jump', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$Resume = {ctor: 'Resume'};
var _elm_lang$virtual_dom$VirtualDom_Debug$overlayConfig = {resume: _elm_lang$virtual_dom$VirtualDom_Debug$Resume, open: _elm_lang$virtual_dom$VirtualDom_Debug$Open, importHistory: _elm_lang$virtual_dom$VirtualDom_Debug$Import, exportHistory: _elm_lang$virtual_dom$VirtualDom_Debug$Export, wrap: _elm_lang$virtual_dom$VirtualDom_Debug$OverlayMsg};
var _elm_lang$virtual_dom$VirtualDom_Debug$viewIn = function (_p4) {
	var _p5 = _p4;
	var isPaused = function () {
		var _p6 = _p5.state;
		if (_p6.ctor === 'Running') {
			return false;
		} else {
			return true;
		}
	}();
	return A5(
		_elm_lang$virtual_dom$VirtualDom_Overlay$view,
		_elm_lang$virtual_dom$VirtualDom_Debug$overlayConfig,
		isPaused,
		_p5.isDebuggerOpen,
		_elm_lang$virtual_dom$VirtualDom_History$size(_p5.history),
		_p5.overlay);
};
var _elm_lang$virtual_dom$VirtualDom_Debug$resumeButton = A2(
	_elm_lang$virtual_dom$VirtualDom_Helpers$div,
	{
		ctor: '::',
		_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Debug$Resume),
		_1: {
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar-controls-resume'),
			_1: {ctor: '[]'}
		}
	},
	{
		ctor: '::',
		_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Resume'),
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$viewResumeButton = function (maybeIndex) {
	var _p7 = maybeIndex;
	if (_p7.ctor === 'Nothing') {
		return _elm_lang$virtual_dom$VirtualDom_Helpers$text('');
	} else {
		return _elm_lang$virtual_dom$VirtualDom_Debug$resumeButton;
	}
};
var _elm_lang$virtual_dom$VirtualDom_Debug$playButton = function (maybeIndex) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar-controls'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Debug$viewResumeButton(maybeIndex),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar-controls-import-export'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$button, _elm_lang$virtual_dom$VirtualDom_Debug$Import, 'Import'),
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' / '),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$button, _elm_lang$virtual_dom$VirtualDom_Debug$Export, 'Export'),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Debug$viewSidebar = F2(
	function (state, history) {
		var maybeIndex = function () {
			var _p8 = state;
			if (_p8.ctor === 'Running') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(_p8._0);
			}
		}();
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$map,
					_elm_lang$virtual_dom$VirtualDom_Debug$Jump,
					A2(_elm_lang$virtual_dom$VirtualDom_History$view, maybeIndex, history)),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Debug$playButton(maybeIndex),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$ExpandoMsg = function (a) {
	return {ctor: 'ExpandoMsg', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$viewOut = function (_p9) {
	var _p10 = _p9;
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$id('debugger'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Debug$styles,
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$viewSidebar, _p10.state, _p10.history),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$map,
						_elm_lang$virtual_dom$VirtualDom_Debug$ExpandoMsg,
						A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$div,
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$id('values'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(_elm_lang$virtual_dom$VirtualDom_Expando$view, _elm_lang$core$Maybe$Nothing, _p10.expando),
								_1: {ctor: '[]'}
							})),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Debug$UserMsg = function (a) {
	return {ctor: 'UserMsg', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapInit = F2(
	function (metadata, _p11) {
		var _p12 = _p11;
		var _p13 = _p12._0;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			{
				history: _elm_lang$virtual_dom$VirtualDom_History$empty(_p13),
				state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(_p13),
				expando: _elm_lang$virtual_dom$VirtualDom_Expando$init(_p13),
				metadata: _elm_lang$virtual_dom$VirtualDom_Metadata$decode(metadata),
				overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$none,
				isDebuggerOpen: false
			},
			{
				ctor: '::',
				_0: A2(_elm_lang$core$Platform_Cmd$map, _elm_lang$virtual_dom$VirtualDom_Debug$UserMsg, _p12._1),
				_1: {ctor: '[]'}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapSubs = F2(
	function (userSubscriptions, _p14) {
		var _p15 = _p14;
		return A2(
			_elm_lang$core$Platform_Sub$map,
			_elm_lang$virtual_dom$VirtualDom_Debug$UserMsg,
			userSubscriptions(
				_elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel(_p15.state)));
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapView = F2(
	function (userView, _p16) {
		var _p17 = _p16;
		var currentModel = function () {
			var _p18 = _p17.state;
			if (_p18.ctor === 'Running') {
				return _p18._0;
			} else {
				return _p18._1;
			}
		}();
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$map,
			_elm_lang$virtual_dom$VirtualDom_Debug$UserMsg,
			userView(currentModel));
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$NoOp = {ctor: 'NoOp'};
var _elm_lang$virtual_dom$VirtualDom_Debug$download = F2(
	function (metadata, history) {
		var json = _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'metadata',
					_1: _elm_lang$virtual_dom$VirtualDom_Metadata$encode(metadata)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'history',
						_1: _elm_lang$virtual_dom$VirtualDom_History$encode(history)
					},
					_1: {ctor: '[]'}
				}
			});
		var historyLength = _elm_lang$virtual_dom$VirtualDom_History$size(history);
		return A2(
			_elm_lang$core$Task$perform,
			function (_p19) {
				return _elm_lang$virtual_dom$VirtualDom_Debug$NoOp;
			},
			A2(_elm_lang$virtual_dom$Native_Debug.download, historyLength, json));
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$runIf = F2(
	function (bool, task) {
		return bool ? A2(
			_elm_lang$core$Task$perform,
			_elm_lang$core$Basics$always(_elm_lang$virtual_dom$VirtualDom_Debug$NoOp),
			task) : _elm_lang$core$Platform_Cmd$none;
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$updateUserMsg = F4(
	function (userUpdate, scrollTask, userMsg, _p20) {
		var _p21 = _p20;
		var _p25 = _p21.state;
		var _p24 = _p21;
		var userModel = _elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel(_p25);
		var newHistory = A3(_elm_lang$virtual_dom$VirtualDom_History$add, userMsg, userModel, _p21.history);
		var _p22 = A2(userUpdate, userMsg, userModel);
		var newUserModel = _p22._0;
		var userCmds = _p22._1;
		var commands = A2(_elm_lang$core$Platform_Cmd$map, _elm_lang$virtual_dom$VirtualDom_Debug$UserMsg, userCmds);
		var _p23 = _p25;
		if (_p23.ctor === 'Running') {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					_p24,
					{
						history: newHistory,
						state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(newUserModel),
						expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$merge, newUserModel, _p21.expando)
					}),
				{
					ctor: '::',
					_0: commands,
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$runIf, _p24.isDebuggerOpen, scrollTask),
						_1: {ctor: '[]'}
					}
				});
		} else {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					_p24,
					{
						history: newHistory,
						state: A3(_elm_lang$virtual_dom$VirtualDom_Debug$Paused, _p23._0, _p23._1, newUserModel)
					}),
				{
					ctor: '::',
					_0: commands,
					_1: {ctor: '[]'}
				});
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapUpdate = F4(
	function (userUpdate, scrollTask, msg, model) {
		wrapUpdate:
		while (true) {
			var _p26 = msg;
			switch (_p26.ctor) {
				case 'NoOp':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						{ctor: '[]'});
				case 'UserMsg':
					return A4(_elm_lang$virtual_dom$VirtualDom_Debug$updateUserMsg, userUpdate, scrollTask, _p26._0, model);
				case 'ExpandoMsg':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, _p26._0, model.expando)
							}),
						{ctor: '[]'});
				case 'Resume':
					var _p27 = model.state;
					if (_p27.ctor === 'Running') {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{ctor: '[]'});
					} else {
						var _p28 = _p27._2;
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(_p28),
									expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$merge, _p28, model.expando)
								}),
							{
								ctor: '::',
								_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$runIf, model.isDebuggerOpen, scrollTask),
								_1: {ctor: '[]'}
							});
					}
				case 'Jump':
					var _p30 = _p26._0;
					var _p29 = A3(_elm_lang$virtual_dom$VirtualDom_History$get, userUpdate, _p30, model.history);
					var indexModel = _p29._0;
					var indexMsg = _p29._1;
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								state: A3(
									_elm_lang$virtual_dom$VirtualDom_Debug$Paused,
									_p30,
									indexModel,
									_elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel(model.state)),
								expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$merge, indexModel, model.expando)
							}),
						{ctor: '[]'});
				case 'Open':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{isDebuggerOpen: true}),
						{ctor: '[]'});
				case 'Close':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{isDebuggerOpen: false}),
						{ctor: '[]'});
				case 'Up':
					var index = function () {
						var _p31 = model.state;
						if (_p31.ctor === 'Paused') {
							return _p31._0;
						} else {
							return _elm_lang$virtual_dom$VirtualDom_History$size(model.history);
						}
					}();
					if (_elm_lang$core$Native_Utils.cmp(index, 0) > 0) {
						var _v17 = userUpdate,
							_v18 = scrollTask,
							_v19 = _elm_lang$virtual_dom$VirtualDom_Debug$Jump(index - 1),
							_v20 = model;
						userUpdate = _v17;
						scrollTask = _v18;
						msg = _v19;
						model = _v20;
						continue wrapUpdate;
					} else {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{ctor: '[]'});
					}
				case 'Down':
					var _p32 = model.state;
					if (_p32.ctor === 'Running') {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{ctor: '[]'});
					} else {
						var _p33 = _p32._0;
						if (_elm_lang$core$Native_Utils.eq(
							_p33,
							_elm_lang$virtual_dom$VirtualDom_History$size(model.history) - 1)) {
							var _v22 = userUpdate,
								_v23 = scrollTask,
								_v24 = _elm_lang$virtual_dom$VirtualDom_Debug$Resume,
								_v25 = model;
							userUpdate = _v22;
							scrollTask = _v23;
							msg = _v24;
							model = _v25;
							continue wrapUpdate;
						} else {
							var _v26 = userUpdate,
								_v27 = scrollTask,
								_v28 = _elm_lang$virtual_dom$VirtualDom_Debug$Jump(_p33 + 1),
								_v29 = model;
							userUpdate = _v26;
							scrollTask = _v27;
							msg = _v28;
							model = _v29;
							continue wrapUpdate;
						}
					}
				case 'Import':
					return A2(
						_elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata,
						model,
						function (_p34) {
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								model,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Debug$upload,
									_1: {ctor: '[]'}
								});
						});
				case 'Export':
					return A2(
						_elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata,
						model,
						function (metadata) {
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								model,
								{
									ctor: '::',
									_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$download, metadata, model.history),
									_1: {ctor: '[]'}
								});
						});
				case 'Upload':
					return A2(
						_elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata,
						model,
						function (metadata) {
							var _p35 = A2(_elm_lang$virtual_dom$VirtualDom_Overlay$assessImport, metadata, _p26._0);
							if (_p35.ctor === 'Err') {
								return A2(
									_elm_lang$core$Platform_Cmd_ops['!'],
									_elm_lang$core$Native_Utils.update(
										model,
										{overlay: _p35._0}),
									{ctor: '[]'});
							} else {
								return A3(_elm_lang$virtual_dom$VirtualDom_Debug$loadNewHistory, _p35._0, userUpdate, model);
							}
						});
				default:
					var _p36 = A2(_elm_lang$virtual_dom$VirtualDom_Overlay$close, _p26._0, model.overlay);
					if (_p36.ctor === 'Nothing') {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$none}),
							{ctor: '[]'});
					} else {
						return A3(_elm_lang$virtual_dom$VirtualDom_Debug$loadNewHistory, _p36._0, userUpdate, model);
					}
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$wrap = F2(
	function (metadata, _p37) {
		var _p38 = _p37;
		return {
			init: A2(_elm_lang$virtual_dom$VirtualDom_Debug$wrapInit, metadata, _p38.init),
			view: _elm_lang$virtual_dom$VirtualDom_Debug$wrapView(_p38.view),
			update: _elm_lang$virtual_dom$VirtualDom_Debug$wrapUpdate(_p38.update),
			viewIn: _elm_lang$virtual_dom$VirtualDom_Debug$viewIn,
			viewOut: _elm_lang$virtual_dom$VirtualDom_Debug$viewOut,
			subscriptions: _elm_lang$virtual_dom$VirtualDom_Debug$wrapSubs(_p38.subscriptions)
		};
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags = F2(
	function (metadata, _p39) {
		var _p40 = _p39;
		return {
			init: function (flags) {
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Debug$wrapInit,
					metadata,
					_p40.init(flags));
			},
			view: _elm_lang$virtual_dom$VirtualDom_Debug$wrapView(_p40.view),
			update: _elm_lang$virtual_dom$VirtualDom_Debug$wrapUpdate(_p40.update),
			viewIn: _elm_lang$virtual_dom$VirtualDom_Debug$viewIn,
			viewOut: _elm_lang$virtual_dom$VirtualDom_Debug$viewOut,
			subscriptions: _elm_lang$virtual_dom$VirtualDom_Debug$wrapSubs(_p40.subscriptions)
		};
	});

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _NoRedInk$rocket_update$Rocket_ops = _NoRedInk$rocket_update$Rocket_ops || {};
_NoRedInk$rocket_update$Rocket_ops['=>'] = F2(
	function (v0, v1) {
		return {ctor: '_Tuple2', _0: v0, _1: v1};
	});
var _NoRedInk$rocket_update$Rocket$batchCommands = function (_p0) {
	var _p1 = _p0;
	return A2(
		_NoRedInk$rocket_update$Rocket_ops['=>'],
		_p1._0,
		_elm_lang$core$Platform_Cmd$batch(_p1._1));
};
var _NoRedInk$rocket_update$Rocket$batchInit = _NoRedInk$rocket_update$Rocket$batchCommands;
var _NoRedInk$rocket_update$Rocket$batchUpdate = function (fn) {
	return function (_p2) {
		return _NoRedInk$rocket_update$Rocket$batchCommands(
			fn(_p2));
	};
};

var _AionDev$elm_pdf$Pdf$oneInstructionEncoder = function (instruction) {
	var _p0 = instruction;
	switch (_p0.ctor) {
		case 'AddPage':
			return _elm_lang$core$Json_Encode$object(
				{
					ctor: '::',
					_0: A2(
						_NoRedInk$rocket_update$Rocket_ops['=>'],
						'instruction',
						_elm_lang$core$Json_Encode$string('AddPage')),
					_1: {ctor: '[]'}
				});
		case 'Rect':
			return _elm_lang$core$Json_Encode$object(
				{
					ctor: '::',
					_0: A2(
						_NoRedInk$rocket_update$Rocket_ops['=>'],
						'instruction',
						_elm_lang$core$Json_Encode$string('Rect')),
					_1: {
						ctor: '::',
						_0: A2(
							_NoRedInk$rocket_update$Rocket_ops['=>'],
							'x',
							_elm_lang$core$Json_Encode$int(_p0._0)),
						_1: {
							ctor: '::',
							_0: A2(
								_NoRedInk$rocket_update$Rocket_ops['=>'],
								'y',
								_elm_lang$core$Json_Encode$int(_p0._1)),
							_1: {
								ctor: '::',
								_0: A2(
									_NoRedInk$rocket_update$Rocket_ops['=>'],
									'w',
									_elm_lang$core$Json_Encode$int(_p0._2)),
								_1: {
									ctor: '::',
									_0: A2(
										_NoRedInk$rocket_update$Rocket_ops['=>'],
										'h',
										_elm_lang$core$Json_Encode$int(_p0._3)),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				});
		default:
			return _elm_lang$core$Json_Encode$object(
				{
					ctor: '::',
					_0: A2(
						_NoRedInk$rocket_update$Rocket_ops['=>'],
						'instruction',
						_elm_lang$core$Json_Encode$string('Text')),
					_1: {
						ctor: '::',
						_0: A2(
							_NoRedInk$rocket_update$Rocket_ops['=>'],
							'text',
							_elm_lang$core$Json_Encode$string(_p0._0)),
						_1: {
							ctor: '::',
							_0: A2(
								_NoRedInk$rocket_update$Rocket_ops['=>'],
								'x',
								_elm_lang$core$Json_Encode$int(_p0._1)),
							_1: {
								ctor: '::',
								_0: A2(
									_NoRedInk$rocket_update$Rocket_ops['=>'],
									'y',
									_elm_lang$core$Json_Encode$int(_p0._2)),
								_1: {ctor: '[]'}
							}
						}
					}
				});
	}
};
var _AionDev$elm_pdf$Pdf$instructionsEncoder = function (instructions) {
	return _elm_lang$core$Json_Encode$list(
		A2(
			_elm_lang$core$List$map,
			_AionDev$elm_pdf$Pdf$oneInstructionEncoder,
			_elm_lang$core$List$reverse(instructions)));
};
var _AionDev$elm_pdf$Pdf$paperSizeEncoder = function (paperSize) {
	var _p1 = paperSize;
	switch (_p1.ctor) {
		case 'A4':
			return _elm_lang$core$Json_Encode$string('a4');
		case 'A3':
			return _elm_lang$core$Json_Encode$string('a3');
		default:
			return _elm_lang$core$Json_Encode$string('a2');
	}
};
var _AionDev$elm_pdf$Pdf$dimensionEncoder = function (dimension) {
	var _p2 = dimension;
	switch (_p2.ctor) {
		case 'Milimeter':
			return _elm_lang$core$Json_Encode$string('mm');
		case 'Centimeter':
			return _elm_lang$core$Json_Encode$string('cm');
		case 'Inch':
			return _elm_lang$core$Json_Encode$string('in');
		default:
			return _elm_lang$core$Json_Encode$string('pt');
	}
};
var _AionDev$elm_pdf$Pdf$layoutEncoder = function (layout) {
	var _p3 = layout;
	if (_p3.ctor === 'Portrait') {
		return _elm_lang$core$Json_Encode$string('portrait');
	} else {
		return _elm_lang$core$Json_Encode$string('landscape');
	}
};
var _AionDev$elm_pdf$Pdf$groupOfInstructionsOrDocumentEncoder = function (groupOfInstructionsOrDocument) {
	var _p4 = groupOfInstructionsOrDocument;
	if (_p4.ctor === 'GroupOfInstructions') {
		return _AionDev$elm_pdf$Pdf$instructionsEncoder(_p4._0);
	} else {
		var _p5 = _p4._0;
		return _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'orientation',
					_1: _AionDev$elm_pdf$Pdf$layoutEncoder(_p5.layout)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'unit',
						_1: _AionDev$elm_pdf$Pdf$dimensionEncoder(_p5.dimension)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'format',
							_1: _AionDev$elm_pdf$Pdf$paperSizeEncoder(_p5.paperSize)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'commands',
								_1: _AionDev$elm_pdf$Pdf$instructionsEncoder(_p5.instructions)
							},
							_1: {ctor: '[]'}
						}
					}
				}
			});
	}
};
var _AionDev$elm_pdf$Pdf$commandJsTo_createNewDocumentAndPreview = _elm_lang$core$Native_Platform.outgoingPort(
	'commandJsTo_createNewDocumentAndPreview',
	function (v) {
		return v;
	});
var _AionDev$elm_pdf$Pdf$commandJsTo_update = _elm_lang$core$Native_Platform.outgoingPort(
	'commandJsTo_update',
	function (v) {
		return v;
	});
var _AionDev$elm_pdf$Pdf$update = function (instructions) {
	return _AionDev$elm_pdf$Pdf$commandJsTo_update(
		_AionDev$elm_pdf$Pdf$groupOfInstructionsOrDocumentEncoder(instructions));
};
var _AionDev$elm_pdf$Pdf$commandJsTo_print = _elm_lang$core$Native_Platform.outgoingPort(
	'commandJsTo_print',
	function (v) {
		return null;
	});
var _AionDev$elm_pdf$Pdf$print = _AionDev$elm_pdf$Pdf$commandJsTo_print(
	{ctor: '_Tuple0'});
var _AionDev$elm_pdf$Pdf$commandJsTo_download = _elm_lang$core$Native_Platform.outgoingPort(
	'commandJsTo_download',
	function (v) {
		return v;
	});
var _AionDev$elm_pdf$Pdf$download = function (fileName) {
	return _AionDev$elm_pdf$Pdf$commandJsTo_download(fileName);
};
var _AionDev$elm_pdf$Pdf$commandJsTo_delete = _elm_lang$core$Native_Platform.outgoingPort(
	'commandJsTo_delete',
	function (v) {
		return null;
	});
var _AionDev$elm_pdf$Pdf$delete = _AionDev$elm_pdf$Pdf$commandJsTo_delete(
	{ctor: '_Tuple0'});
var _AionDev$elm_pdf$Pdf$commandJsTo_previewDocument = _elm_lang$core$Native_Platform.outgoingPort(
	'commandJsTo_previewDocument',
	function (v) {
		return v;
	});
var _AionDev$elm_pdf$Pdf$commandJsTo_printDocument = _elm_lang$core$Native_Platform.outgoingPort(
	'commandJsTo_printDocument',
	function (v) {
		return v;
	});
var _AionDev$elm_pdf$Pdf$commandJsTo_downloadDocument = _elm_lang$core$Native_Platform.outgoingPort(
	'commandJsTo_downloadDocument',
	function (v) {
		return v;
	});
var _AionDev$elm_pdf$Pdf$received_previewBlobUrl = _elm_lang$core$Native_Platform.incomingPort('received_previewBlobUrl', _elm_lang$core$Json_Decode$string);
var _AionDev$elm_pdf$Pdf$receive_previewBlobUrl = function (tag) {
	return _AionDev$elm_pdf$Pdf$received_previewBlobUrl(tag);
};
var _AionDev$elm_pdf$Pdf$received_printStatus = _elm_lang$core$Native_Platform.incomingPort('received_printStatus', _elm_lang$core$Json_Decode$bool);
var _AionDev$elm_pdf$Pdf$receive_PrintStatus = function (tag) {
	return _AionDev$elm_pdf$Pdf$received_printStatus(tag);
};
var _AionDev$elm_pdf$Pdf$received_downloadStatus = _elm_lang$core$Native_Platform.incomingPort('received_downloadStatus', _elm_lang$core$Json_Decode$bool);
var _AionDev$elm_pdf$Pdf$receive_downloadStatus = function (tag) {
	return _AionDev$elm_pdf$Pdf$received_downloadStatus(tag);
};
var _AionDev$elm_pdf$Pdf$Document = function (a) {
	return {ctor: 'Document', _0: a};
};
var _AionDev$elm_pdf$Pdf$createDocument = F3(
	function (layout, dimension, paperSize) {
		return _AionDev$elm_pdf$Pdf$Document(
			{
				layout: layout,
				dimension: dimension,
				paperSize: paperSize,
				instructions: {ctor: '[]'}
			});
	});
var _AionDev$elm_pdf$Pdf$createNewDocumentAndPreview = function (groupOfInstructionsOrDocument) {
	var _p6 = groupOfInstructionsOrDocument;
	if (_p6.ctor === 'GroupOfInstructions') {
		return _elm_lang$core$Platform_Cmd$none;
	} else {
		return _AionDev$elm_pdf$Pdf$commandJsTo_createNewDocumentAndPreview(
			_AionDev$elm_pdf$Pdf$groupOfInstructionsOrDocumentEncoder(
				_AionDev$elm_pdf$Pdf$Document(_p6._0)));
	}
};
var _AionDev$elm_pdf$Pdf$previewDocument = function (groupOfInstructionsOrDocument) {
	var _p7 = groupOfInstructionsOrDocument;
	if (_p7.ctor === 'GroupOfInstructions') {
		return _elm_lang$core$Platform_Cmd$none;
	} else {
		return _AionDev$elm_pdf$Pdf$commandJsTo_previewDocument(
			_AionDev$elm_pdf$Pdf$groupOfInstructionsOrDocumentEncoder(
				_AionDev$elm_pdf$Pdf$Document(_p7._0)));
	}
};
var _AionDev$elm_pdf$Pdf$printDocument = function (groupOfInstructionsOrDocument) {
	var _p8 = groupOfInstructionsOrDocument;
	if (_p8.ctor === 'GroupOfInstructions') {
		return _elm_lang$core$Platform_Cmd$none;
	} else {
		return _AionDev$elm_pdf$Pdf$commandJsTo_printDocument(
			_AionDev$elm_pdf$Pdf$groupOfInstructionsOrDocumentEncoder(
				_AionDev$elm_pdf$Pdf$Document(_p8._0)));
	}
};
var _AionDev$elm_pdf$Pdf$downloadDocument = function (groupOfInstructionsOrDocument) {
	var _p9 = groupOfInstructionsOrDocument;
	if (_p9.ctor === 'GroupOfInstructions') {
		return _elm_lang$core$Platform_Cmd$none;
	} else {
		return _AionDev$elm_pdf$Pdf$commandJsTo_downloadDocument(
			_AionDev$elm_pdf$Pdf$groupOfInstructionsOrDocumentEncoder(
				_AionDev$elm_pdf$Pdf$Document(_p9._0)));
	}
};
var _AionDev$elm_pdf$Pdf$GroupOfInstructions = function (a) {
	return {ctor: 'GroupOfInstructions', _0: a};
};
var _AionDev$elm_pdf$Pdf$emptyGroupOfInstructions = _AionDev$elm_pdf$Pdf$GroupOfInstructions(
	{ctor: '[]'});
var _AionDev$elm_pdf$Pdf$addInstruction = F2(
	function (groupOfInstructionsOrDocument, instruction) {
		var _p10 = groupOfInstructionsOrDocument;
		if (_p10.ctor === 'GroupOfInstructions') {
			return _AionDev$elm_pdf$Pdf$GroupOfInstructions(
				{ctor: '::', _0: instruction, _1: _p10._0});
		} else {
			var _p11 = _p10._0;
			return _AionDev$elm_pdf$Pdf$Document(
				_elm_lang$core$Native_Utils.update(
					_p11,
					{
						instructions: {ctor: '::', _0: instruction, _1: _p11.instructions}
					}));
		}
	});
var _AionDev$elm_pdf$Pdf$Landscape = {ctor: 'Landscape'};
var _AionDev$elm_pdf$Pdf$landscape = _AionDev$elm_pdf$Pdf$Landscape;
var _AionDev$elm_pdf$Pdf$Portrait = {ctor: 'Portrait'};
var _AionDev$elm_pdf$Pdf$portrait = _AionDev$elm_pdf$Pdf$Portrait;
var _AionDev$elm_pdf$Pdf$Points = {ctor: 'Points'};
var _AionDev$elm_pdf$Pdf$Inch = {ctor: 'Inch'};
var _AionDev$elm_pdf$Pdf$inch = _AionDev$elm_pdf$Pdf$Inch;
var _AionDev$elm_pdf$Pdf$Centimeter = {ctor: 'Centimeter'};
var _AionDev$elm_pdf$Pdf$cm = _AionDev$elm_pdf$Pdf$Centimeter;
var _AionDev$elm_pdf$Pdf$Milimeter = {ctor: 'Milimeter'};
var _AionDev$elm_pdf$Pdf$mm = _AionDev$elm_pdf$Pdf$Milimeter;
var _AionDev$elm_pdf$Pdf$A2 = {ctor: 'A2'};
var _AionDev$elm_pdf$Pdf$a2 = _AionDev$elm_pdf$Pdf$A2;
var _AionDev$elm_pdf$Pdf$A3 = {ctor: 'A3'};
var _AionDev$elm_pdf$Pdf$a3 = _AionDev$elm_pdf$Pdf$A3;
var _AionDev$elm_pdf$Pdf$A4 = {ctor: 'A4'};
var _AionDev$elm_pdf$Pdf$a4 = _AionDev$elm_pdf$Pdf$A4;
var _AionDev$elm_pdf$Pdf$Text = F3(
	function (a, b, c) {
		return {ctor: 'Text', _0: a, _1: b, _2: c};
	});
var _AionDev$elm_pdf$Pdf$text = F4(
	function (text, x, y, document) {
		return A2(
			_AionDev$elm_pdf$Pdf$addInstruction,
			document,
			A3(_AionDev$elm_pdf$Pdf$Text, text, x, y));
	});
var _AionDev$elm_pdf$Pdf$Rect = F4(
	function (a, b, c, d) {
		return {ctor: 'Rect', _0: a, _1: b, _2: c, _3: d};
	});
var _AionDev$elm_pdf$Pdf$rect = F5(
	function (x, y, width, height, document) {
		return A2(
			_AionDev$elm_pdf$Pdf$addInstruction,
			document,
			A4(_AionDev$elm_pdf$Pdf$Rect, x, y, width, height));
	});
var _AionDev$elm_pdf$Pdf$AddPage = {ctor: 'AddPage'};
var _AionDev$elm_pdf$Pdf$addDefaultPage = function (groupOfInstructionsOrDocument) {
	return A2(_AionDev$elm_pdf$Pdf$addInstruction, groupOfInstructionsOrDocument, _AionDev$elm_pdf$Pdf$AddPage);
};
var _AionDev$elm_pdf$Pdf$addPage = function (groupOfInstructionsOrDocument) {
	return A2(_AionDev$elm_pdf$Pdf$addInstruction, groupOfInstructionsOrDocument, _AionDev$elm_pdf$Pdf$AddPage);
};

var _AionDev$elm_pdf$Example$timeTravellingPdf = A4(
	_AionDev$elm_pdf$Pdf$text,
	'New page..',
	40,
	70,
	_AionDev$elm_pdf$Pdf$addPage(
		A4(_AionDev$elm_pdf$Pdf$text, 'Time traveling pdf .. yupii ! :)) ', 40, 100, _AionDev$elm_pdf$Pdf$emptyGroupOfInstructions)));
var _AionDev$elm_pdf$Example$updateExistingDocument = A4(_AionDev$elm_pdf$Pdf$text, 'Document is updated..', 40, 70, _AionDev$elm_pdf$Pdf$emptyGroupOfInstructions);
var _AionDev$elm_pdf$Example$pdfDocument = A5(
	_AionDev$elm_pdf$Pdf$rect,
	30,
	50,
	100,
	100,
	A4(
		_AionDev$elm_pdf$Pdf$text,
		'PDF Document',
		30,
		30,
		A3(_AionDev$elm_pdf$Pdf$createDocument, _AionDev$elm_pdf$Pdf$portrait, _AionDev$elm_pdf$Pdf$mm, _AionDev$elm_pdf$Pdf$a4)));
var _AionDev$elm_pdf$Example$update = F2(
	function (msg, model) {
		var _p0 = msg;
		switch (_p0.ctor) {
			case 'GetBlob':
				return A2(
					_NoRedInk$rocket_update$Rocket_ops['=>'],
					model,
					{
						ctor: '::',
						_0: _AionDev$elm_pdf$Pdf$createNewDocumentAndPreview(_AionDev$elm_pdf$Example$pdfDocument),
						_1: {ctor: '[]'}
					});
			case 'ReceivedBlob':
				return A2(
					_NoRedInk$rocket_update$Rocket_ops['=>'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							blob: _elm_lang$core$Maybe$Just(_p0._0)
						}),
					{ctor: '[]'});
			case 'AndAnotherRectangle':
				return A2(
					_NoRedInk$rocket_update$Rocket_ops['=>'],
					model,
					{
						ctor: '::',
						_0: _AionDev$elm_pdf$Pdf$update(_AionDev$elm_pdf$Example$updateExistingDocument),
						_1: {ctor: '[]'}
					});
			case 'TimeTravelling':
				return A2(
					_NoRedInk$rocket_update$Rocket_ops['=>'],
					model,
					{
						ctor: '::',
						_0: _AionDev$elm_pdf$Pdf$update(_AionDev$elm_pdf$Example$timeTravellingPdf),
						_1: {ctor: '[]'}
					});
			default:
				return A2(
					_NoRedInk$rocket_update$Rocket_ops['=>'],
					model,
					{
						ctor: '::',
						_0: _AionDev$elm_pdf$Pdf$download('someCustomName.pdf'),
						_1: {ctor: '[]'}
					});
		}
	});
var _AionDev$elm_pdf$Example$init = A2(
	_elm_lang$core$Platform_Cmd_ops['!'],
	{blob: _elm_lang$core$Maybe$Nothing},
	{
		ctor: '::',
		_0: _elm_lang$core$Platform_Cmd$none,
		_1: {ctor: '[]'}
	});
var _AionDev$elm_pdf$Example$Model = function (a) {
	return {blob: a};
};
var _AionDev$elm_pdf$Example$Download = {ctor: 'Download'};
var _AionDev$elm_pdf$Example$TimeTravelling = {ctor: 'TimeTravelling'};
var _AionDev$elm_pdf$Example$AndAnotherRectangle = {ctor: 'AndAnotherRectangle'};
var _AionDev$elm_pdf$Example$ReceivedBlob = function (a) {
	return {ctor: 'ReceivedBlob', _0: a};
};
var _AionDev$elm_pdf$Example$GetBlob = {ctor: 'GetBlob'};
var _AionDev$elm_pdf$Example$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$button,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(_AionDev$elm_pdf$Example$GetBlob),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('preview PDF'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$button,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onClick(_AionDev$elm_pdf$Example$AndAnotherRectangle),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('update existing document'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$button,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(_AionDev$elm_pdf$Example$TimeTravelling),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('update again + new page'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$hr,
							{ctor: '[]'},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(_elm_lang$core$Maybe$withDefault, '  Nothing to preview', model.blob)),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$hr,
									{ctor: '[]'},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$iframe,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$style(
												{
													ctor: '::',
													_0: A2(_NoRedInk$rocket_update$Rocket_ops['=>'], 'width', '600px'),
													_1: {
														ctor: '::',
														_0: A2(_NoRedInk$rocket_update$Rocket_ops['=>'], 'height', '500px'),
														_1: {ctor: '[]'}
													}
												}),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$src(
													A2(_elm_lang$core$Maybe$withDefault, '', model.blob)),
												_1: {ctor: '[]'}
											}
										},
										{ctor: '[]'}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$hr,
											{ctor: '[]'},
											{ctor: '[]'}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$button,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onClick(_AionDev$elm_pdf$Example$Download),
													_1: {ctor: '[]'}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Download Pdf'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			}
		});
};
var _AionDev$elm_pdf$Example$main = _elm_lang$html$Html$program(
	{
		init: _AionDev$elm_pdf$Example$init,
		view: _AionDev$elm_pdf$Example$view,
		update: function (_p1) {
			return _NoRedInk$rocket_update$Rocket$batchUpdate(
				_AionDev$elm_pdf$Example$update(_p1));
		},
		subscriptions: function (_p2) {
			return _AionDev$elm_pdf$Pdf$receive_previewBlobUrl(_AionDev$elm_pdf$Example$ReceivedBlob);
		}
	})();

var Elm = {};
Elm['Example'] = Elm['Example'] || {};
if (typeof _AionDev$elm_pdf$Example$main !== 'undefined') {
    _AionDev$elm_pdf$Example$main(Elm['Example'], 'Example', {"types":{"message":"Example.Msg","aliases":{},"unions":{"Example.Msg":{"tags":{"Download":[],"GetBlob":[],"AndAnotherRectangle":[],"TimeTravelling":[],"ReceivedBlob":["String"]},"args":[]}}},"versions":{"elm":"0.18.0"}});
}



//////////////////// HMR BEGIN ////////////////////
var _elm_hot_loader_init = function () {}
if (false) {
  (function(Elm) {
    "use strict";

    var version = detectElmVersion()
    console.log('[elm-hot] Elm version:', version)

    if (version === '0.17') {
      throw new Error('[elm-hot] Please use elm-hot-loader@0.4.x')
    } else if (version !== '0.18') {
      throw new Error('[elm-hot] Elm version not supported.')
    }
        
    //polyfill for IE: https://github.com/fluxxu/elm-hot-loader/issues/16
    if (typeof Object.assign != 'function') {
      Object.assign = function(target) {
        'use strict';
        if (target == null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }
    
        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var source = arguments[index];
          if (source != null) {
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
        }
        return target;
      };
    }

    var instances = module.hot.data
      ? module.hot.data.instances || {}
      : {};
    var uid = module.hot.data
      ? module.hot.data.uid || 0
      : 0;

    var cancellers = [];

    var initializingInstance = null, swappingInstance = null;

    module.hot.accept();
    module.hot.dispose(function(data) {
      data.instances = instances;
      data.uid = uid;

      // disable current instance
      _elm_lang$core$Native_Scheduler.nativeBinding = function() {
        return _elm_lang$core$Native_Scheduler.fail(new Error('[elm-hot] Inactive Elm instance.'))
      }

      if (cancellers.length) {
        console.log('[elm-hot] Killing ' + cancellers.length + ' running processes...');
        try {
          cancellers.forEach(function (cancel) {
            cancel();
          });
        } catch (e) {
          console.warn('[elm-hot] Kill process error: ' + e.message);
        }
      }
    });

    function getId() {
      return ++uid;
    }

    function detectElmVersion() {
      try {
        if (_elm_lang$core$Native_Platform.initialize) {
          return '0.18'
        }
      } catch (_) {}

      try {
        // 0.17 function programWithFlags(details)
        if (_elm_lang$virtual_dom$VirtualDom$programWithFlags.length === 1) {
          return '0.17'
        }
      } catch (_) {}

      return 'unknown'
    }

    function findPublicModules(parent, path) {
      var modules = [];
      for (var key in parent) {
        var child = parent[key];
        var currentPath = path ? path + '.' + key : key;
        if ('fullscreen' in child) {
          modules.push({
            path: currentPath,
            module: child
          });
        } else {
          modules = modules.concat(findPublicModules(child, currentPath));
        }
      }
      return modules;
    }

    function getPublicModule(Elm, path) {
      var parts = path.split('.');
      var parent = Elm;
      for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];
        if (part in parent) {
          parent = parent[part]
        }
        if (!parent) {
          return null;
        }
      }
      return parent
    }

    function registerInstance(domNode, flags, path, portSubscribes) {
      var id = getId();

      var instance = {
        id: id,
        path: path,
        domNode: domNode,
        flags: flags,
        portSubscribes: portSubscribes,
        elmProxy: null,
        lastState: null, // last elm app state
        callbacks: []
      }

      instance.subscribe = function (cb) {
        instance.callbacks.push(cb)
        return function () {
          instance.callbacks.splice(instance.callbacks.indexOf(cb), 1)
        }
      }

      instance.dispatch = function (event) {
        instance.callbacks.forEach(function (cb) {
          cb(event, {
            flags: instance.flags,
            state: '_0' in instance.lastState 
              ? instance.lastState._0 //debugger state
              : instance.lastState //normal state
          })
        })
      }

      return instances[id] = instance
    }

    function wrapPublicModule(path, module) {
      var embed = module.embed;
      var fullscreen = module.fullscreen;
      module.embed = function(domNode, flags) {
        var elm;
        var portSubscribes = {};
        initializingInstance = registerInstance(domNode, flags, path, portSubscribes)        
        elm = embed(domNode, flags);
        wrapPorts(elm, portSubscribes)
        elm = initializingInstance.elmProxy = {
          ports: elm.ports,
          hot: {
            subscribe: initializingInstance.subscribe
          }
        };
        initializingInstance = null;
        return elm;
      };

      module.fullscreen = function (flags) {
        var elm
        var portSubscribes = {};
        initializingInstance = registerInstance(document.body, flags, path, portSubscribes)        
        elm = fullscreen(flags);
        wrapPorts(elm, portSubscribes)
        elm = initializingInstance.elmProxy = {
          ports: elm.ports,
          hot: {
            subscribe: initializingInstance.subscribe
          }
        };
        initializingInstance = null;
        return elm;
      }
    }

    function swap(Elm, instance) {
      console.log('[elm-hot] Hot-swapping module: ' + instance.path)

      swappingInstance = instance;

      var domNode = instance.domNode;

      while (domNode.lastChild) {
        domNode.removeChild(domNode.lastChild);
      }

      var m = getPublicModule(Elm, instance.path)
      var elm;
      if (m) {
        instance.dispatch('swap')

        var flags = instance.flags
        if (instance.isFullscreen) {
          elm = m.fullscreen(flags);
        } else {
          elm = m.embed(domNode, flags);
        }

        instance.elmProxy.ports = elm.ports;

        Object.keys(instance.portSubscribes).forEach(function(portName) {
          if (portName in elm.ports && 'subscribe' in elm.ports[portName]) {
            var handlers = instance.portSubscribes[portName];
            if (!handlers.length) {
              return;
            }
            console.log('[elm-hot] Reconnect ' + handlers.length + ' handler(s) to port \'' + portName + '\' (' + instance.path + ').');
            handlers.forEach(function(handler) {
              elm.ports[portName].subscribe(handler);
            });
          } else {
            delete instance.portSubscribes[portName];
            console.log('[elm-hot] Port was removed: ' + portName);
          }
        });
      } else {
        console.log('[elm-hot] Module was removed: ' + instance.path);
      }

      swappingInstance = null;
    }

    function wrapPorts(elm, portSubscribes) {
      var portNames = Object.keys(elm.ports || {});
      //hook ports
      if (portNames.length) {
        portNames
          .filter(function(name) {
            return 'subscribe' in elm.ports[name];
          })
          .forEach(function(portName) {
            var port = elm.ports[portName];
            var subscribe = port.subscribe;
            var unsubscribe = port.unsubscribe;
            elm.ports[portName] = Object.assign(port, {
              subscribe: function(handler) {
                console.log('[elm-hot] ports.' + portName + '.subscribe called.');
                if (!portSubscribes[portName]) {
                  portSubscribes[portName] = [ handler ];
                } else {
                  //TODO handle subscribing to single handler more than once?
                  portSubscribes[portName].push(handler);
                }
                return subscribe.call(port, handler);
              },
              unsubscribe: function(handler) {
                console.log('[elm-hot] ports.' + portName + '.unsubscribe called.');
                var list = portSubscribes[portName];
                if (list && list.indexOf(handler) !== -1) {
                  list.splice(list.lastIndexOf(handler), 1);
                } else {
                  console.warn('[elm-hot] ports.' + portName + '.unsubscribe: handler not subscribed');
                }
                return unsubscribe.call(port, handler);
              }
            });
          });
      }
      return portSubscribes;
    }

    // hook program creation
    var initialize = _elm_lang$core$Native_Platform.initialize
    _elm_lang$core$Native_Platform.initialize = function (stateTuple, update, view, renderer) {
      var instance = initializingInstance
      var swapping = swappingInstance
      var tryFirstRender = !!swappingInstance
      var isInitialRender = true


      var debuggerEnabled = isDebuggerState(stateTuple._0)
      if (swappingInstance) {
        if (debuggerEnabled) {
          stateTuple._0.state = swappingInstance.lastState
        } else {
          stateTuple._0 = swappingInstance.lastState
        }
      }
      return initialize(stateTuple, update, function (model) {
        var result;
        // first render may fail if shape of model changed too much
        if (tryFirstRender) {
          tryFirstRender = false
          try {
            result = view(model)
          } catch (e) {
            throw new Error('[elm-hot] Hot-swapping is not possible, please reload page. Error: ' + e.message)
          }
        } else {
          result = view(model)
        }
        if (instance) {
          if (isDebuggerState(model)) {
            instance.lastState = model.state
          } else {
            instance.lastState = model
          }
        } else {
          instance = swapping
        }
        isInitialRender = false
        return result
      }, renderer)

      function isDebuggerState(state) {
        return state && typeof state === 'object' && typeof state.isDebuggerOpen === 'boolean' && 'state' in state
      }
    }

    // hook process creation
    var nativeBinding = _elm_lang$core$Native_Scheduler.nativeBinding
    _elm_lang$core$Native_Scheduler.nativeBinding = function() {
      var def = nativeBinding.apply(this, arguments);
      var callback = def.callback
      def.callback = function() {
        var result = callback.apply(this, arguments)
        if (result) {
          cancellers.push(result);
          return function() {
            cancellers.splice(cancellers.indexOf(result), 1);
            return result();
          };
        }
        return result;
      };
      return def;
    };

    _elm_hot_loader_init = function (Elm) {
      // swap instances
      var removedInstances = [];
      for (var id in instances) {
        var instance = instances[id]
        if (instance.domNode.parentNode) {
          swap(Elm, instance);
        } else {
          removedInstances.push(id);
        }
      }

      removedInstances.forEach(function (id) {
        delete instance[id];
      });

      // wrap all public modules
      var publicModules = findPublicModules(Elm);
      publicModules.forEach(function (m) {
        wrapPublicModule(m.path, m.module);
      });
    }
  })(Elm);
}
//////////////////// HMR END ////////////////////


_elm_hot_loader_init(Elm)

if (true)
{
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() { return Elm; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  return;
}

if (true)
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const jsPDF = __webpack_require__(3);

// CHECK TO SEE what browser the user has.
// const Browser = {
//     // Firefox 1.0+
//     isFirefox: () => {
//         return typeof InstallTrigger !== 'undefined'
//     },
//     // Internet Explorer 6-11
//     isIE: () => {
//         return !!document.documentMode
//     },
//     // Edge 20+
//     isEdge: () => {
//         return !Browser.isIE() && !!window.StyleMedia
//     },
//     // Chrome 1+
//     isChrome: () => {
//         return !!window.chrome && !!window.chrome.webstore
//     },
//     // At least Safari 3+: "[object HTMLElementConstructor]"
//     isSafari: () => {
//         return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 ||
//             navigator.userAgent.toLowerCase().indexOf('safari') !== -1
//     }
// }


// applyElmCommandsToPdfDoc : pdfDoc -> List Comand -> pdfDoc
function applyElmCommandsToPdfDoc(pdfDoc, commands) {

    let newPdfDoc = commands.reduce((acc, cmd) => {
        // console.log(cmd.instruction);

        switch (cmd.instruction) {

            case "Rect":
                acc.rect(cmd.x, cmd.y, cmd.w, cmd.h);
                break;

            case "Text":
                acc.text(cmd.text, cmd.x, cmd.y);
                break;
            case "AddPage":
                acc.addPage();
                break;
            default:
                console.log("Default.");
        }

        return acc;

    }, pdfDoc);

    return newPdfDoc;
}



const ExportObj = {

    elmPdfInitialize: function(elmApp) {




        // generate a new blob url for this document. after this action the document is garbage colected./
        elmApp.ports.commandJsTo_previewDocument.subscribe((document) => {

            emptyDoc = new jsPDF(document.orientation, document.unit, document.format);

            let commands = document.commands;
            // console.log("commands", commands);
            pdfDoc = applyElmCommandsToPdfDoc(emptyDoc, commands);

            // construct the blob and send it to elm.
            let blob = pdfDoc.output('bloburl');
            console.log("blob is:", blob);

            elmApp.ports.receive_previewBlobUrl.send(blob);
        });




        // print document given from elm. after this action the document is garbage colected./
        elmApp.ports.commandJsTo_printDocument.subscribe((document) => {

            let emptyDoc = new jsPDF(document.orientation, document.unit, document.format);

            let commands = document.commands;
            // console.log("commands", commands);
            let pdfDoc = applyElmCommandsToPdfDoc(emptyDoc, commands);

            try {
                pdfDoc.autoPrint();
            } catch (err) {
                if (err) {
                    elmApp.ports.received_printStatus.send(false);
                } else {
                    elmApp.ports.received_printStatus.send(true);
                }
            }
        });




        // donwload document given form elm. after this action - the document is garbage colected.
        elmApp.ports.commandJsTo_downloadDocument.subscribe((document) => {

            let emptyDoc = new jsPDF(document.orientation, document.unit, document.format);

            let commands = document.commands;
            // console.log("commands", commands);
            let pdfDoc = applyElmCommandsToPdfDoc(emptyDoc, commands);

            try {
                pdfDoc.save();
            } catch (err) {
                if (err) {
                    elmApp.ports.received_downloadStatus.send(false);
                } else {
                    elmApp.ports.received_downloadStatus.send(true);
                }
            }
        });



        // generate a persisten pdf document object. this will be updated form elm with each incomming instruction.
        let persistentPdfDocument = null;

        elmApp.ports.commandJsTo_createNewDocumentAndPreview.subscribe((document) => {

            let newDoc = new jsPDF(document.orientation, document.unit, document.format);
            let commands = document.commands;
            // console.log("commands", commands);

            // mutate the persistentPdfDocument with each create new command.
            persistentPdfDocument = applyElmCommandsToPdfDoc(newDoc, commands);

            // construct a new blob and send it back to elm.
            let blobUrl = persistentPdfDocument.output('bloburl');
            elmApp.ports.received_previewBlobUrl.send(blobUrl);
        });



        elmApp.ports.commandJsTo_update.subscribe((instructions) => {

            persistentPdfDocument = applyElmCommandsToPdfDoc(persistentPdfDocument, instructions);

            // -- TODO: find out if is necesary to update the blobUrl with each update of the doc..
            // construct a new blob and send it back to elm.
            let blobUrl = persistentPdfDocument.output('bloburl');
            elmApp.ports.received_previewBlobUrl.send(blobUrl);
        });



        elmApp.ports.commandJsTo_print.subscribe(() => {
            try {
                persistentPdfDocument.autoPrint();
            } catch (err) {
                if (err) {
                    elmApp.ports.received_printStatus.send(false);
                } else {
                    elmApp.ports.received_printStatus.send(true);
                }
            }
        });



        elmApp.ports.commandJsTo_download.subscribe((fileName) => {
            try {
                persistentPdfDocument.save(fileName);
            } catch (err) {
                if (err) {
                    elmApp.ports.received_downloadStatus.send(false);
                } else {
                    elmApp.ports.received_downloadStatus.send(true);
                }
            }
        });



        elmApp.ports.commandJsTo_delete.subscribe(() => {
            persistentPdfDocument = null;
        });


    }
}


module.exports = ExportObj;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.jspdf = factory());
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();















var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set$1 = function set$1(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set$1(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

/** @preserve
 * jsPDF - PDF Document creation from JavaScript
 * Version 1.3.3 Built on 2017-02-23T15:31:28.692Z
 *                           CommitID c2fa0d3c14
 *
 * Copyright (c) 2010-2016 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
 *               2010 Aaron Spike, https://github.com/acspike
 *               2012 Willow Systems Corporation, willow-systems.com
 *               2012 Pablo Hess, https://github.com/pablohess
 *               2012 Florian Jenett, https://github.com/fjenett
 *               2013 Warren Weckesser, https://github.com/warrenweckesser
 *               2013 Youssef Beddad, https://github.com/lifof
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2013 Stefan Slonevskiy, https://github.com/stefslon
 *               2013 Jeremy Morel, https://github.com/jmorel
 *               2013 Christoph Hartmann, https://github.com/chris-rock
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Makes, https://github.com/dollaruw
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Steven Spungin, https://github.com/Flamenco
 *               2014 Kenneth Glassey, https://github.com/Gavvers
 *
 * Licensed under the MIT License
 *
 * Contributor(s):
 *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
 *    kim3er, mfo, alnorth, Flamenco
 */

/**
 * Creates new jsPDF document object instance.
 *
 * @class
 * @param orientation One of "portrait" or "landscape" (or shortcuts "p" (Default), "l")
 * @param unit        Measurement unit to be used when coordinates are specified.
 *                    One of "pt" (points), "mm" (Default), "cm", "in"
 * @param format      One of 'pageFormats' as shown below, default: a4
 * @returns {jsPDF}
 * @name jsPDF
 */
var jsPDF = function (global) {
  'use strict';

  var pdfVersion = '1.3',
      pageFormats = { // Size in pt of various paper formats
    'a0': [2383.94, 3370.39],
    'a1': [1683.78, 2383.94],
    'a2': [1190.55, 1683.78],
    'a3': [841.89, 1190.55],
    'a4': [595.28, 841.89],
    'a5': [419.53, 595.28],
    'a6': [297.64, 419.53],
    'a7': [209.76, 297.64],
    'a8': [147.40, 209.76],
    'a9': [104.88, 147.40],
    'a10': [73.70, 104.88],
    'b0': [2834.65, 4008.19],
    'b1': [2004.09, 2834.65],
    'b2': [1417.32, 2004.09],
    'b3': [1000.63, 1417.32],
    'b4': [708.66, 1000.63],
    'b5': [498.90, 708.66],
    'b6': [354.33, 498.90],
    'b7': [249.45, 354.33],
    'b8': [175.75, 249.45],
    'b9': [124.72, 175.75],
    'b10': [87.87, 124.72],
    'c0': [2599.37, 3676.54],
    'c1': [1836.85, 2599.37],
    'c2': [1298.27, 1836.85],
    'c3': [918.43, 1298.27],
    'c4': [649.13, 918.43],
    'c5': [459.21, 649.13],
    'c6': [323.15, 459.21],
    'c7': [229.61, 323.15],
    'c8': [161.57, 229.61],
    'c9': [113.39, 161.57],
    'c10': [79.37, 113.39],
    'dl': [311.81, 623.62],
    'letter': [612, 792],
    'government-letter': [576, 756],
    'legal': [612, 1008],
    'junior-legal': [576, 360],
    'ledger': [1224, 792],
    'tabloid': [792, 1224],
    'credit-card': [153, 243]
  };

  /**
   * jsPDF's Internal PubSub Implementation.
   * See mrrio.github.io/jsPDF/doc/symbols/PubSub.html
   * Backward compatible rewritten on 2014 by
   * Diego Casorran, https://github.com/diegocr
   *
   * @class
   * @name PubSub
   * @ignore This should not be in the public docs.
   */
  function PubSub(context) {
    var topics = {};

    this.subscribe = function (topic, callback, once) {
      if (typeof callback !== 'function') {
        return false;
      }

      if (!topics.hasOwnProperty(topic)) {
        topics[topic] = {};
      }

      var id = Math.random().toString(35);
      topics[topic][id] = [callback, !!once];

      return id;
    };

    this.unsubscribe = function (token) {
      for (var topic in topics) {
        if (topics[topic][token]) {
          delete topics[topic][token];
          return true;
        }
      }
      return false;
    };

    this.publish = function (topic) {
      if (topics.hasOwnProperty(topic)) {
        var args = Array.prototype.slice.call(arguments, 1),
            idr = [];

        for (var id in topics[topic]) {
          var sub = topics[topic][id];
          try {
            sub[0].apply(context, args);
          } catch (ex) {
            if (global.console) {
              console.error('jsPDF PubSub Error', ex.message, ex);
            }
          }
          if (sub[1]) idr.push(id);
        }
        if (idr.length) idr.forEach(this.unsubscribe);
      }
    };
  }

  /**
   * @constructor
   * @private
   */
  function jsPDF(orientation, unit, format, compressPdf) {
    var options = {};

    if ((typeof orientation === 'undefined' ? 'undefined' : _typeof(orientation)) === 'object') {
      options = orientation;

      orientation = options.orientation;
      unit = options.unit || unit;
      format = options.format || format;
      compressPdf = options.compress || options.compressPdf || compressPdf;
    }

    // Default options
    unit = unit || 'mm';
    format = format || 'a4';
    orientation = ('' + (orientation || 'P')).toLowerCase();

    var format_as_string = ('' + format).toLowerCase(),
        compress = !!compressPdf && typeof Uint8Array === 'function',
        textColor = options.textColor || '0 g',
        drawColor = options.drawColor || '0 G',
        activeFontSize = options.fontSize || 16,
        lineHeightProportion = options.lineHeight || 1.15,
        lineWidth = options.lineWidth || 0.200025,
        // 2mm
    objectNumber = 2,
        // 'n' Current object number
    outToPages = !1,
        // switches where out() prints. outToPages true = push to pages obj. outToPages false = doc builder content
    offsets = [],
        // List of offsets. Activated and reset by buildDocument(). Pupulated by various calls buildDocument makes.
    fonts = {},
        // collection of font objects, where key is fontKey - a dynamically created label for a given font.
    fontmap = {},
        // mapping structure fontName > fontStyle > font key - performance layer. See addFont()
    activeFontKey,
        // will be string representing the KEY of the font as combination of fontName + fontStyle
    k,
        // Scale factor
    tmp,
        page = 0,
        currentPage,
        pages = [],
        pagesContext = [],
        // same index as pages and pagedim
    pagedim = [],
        content = [],
        additionalObjects = [],
        lineCapID = 0,
        lineJoinID = 0,
        content_length = 0,
        pageWidth,
        pageHeight,
        pageMode,
        zoomMode,
        layoutMode,
        documentProperties = {
      'title': '',
      'subject': '',
      'author': '',
      'keywords': '',
      'creator': ''
    },
        API = {},
        events = new PubSub(API),


    /////////////////////
    // Private functions
    /////////////////////
    f2 = function f2(number) {
      return number.toFixed(2); // Ie, %.2f
    },
        f3 = function f3(number) {
      return number.toFixed(3); // Ie, %.3f
    },
        padd2 = function padd2(number) {
      return ('0' + parseInt(number)).slice(-2);
    },
        out = function out(string) {
      if (outToPages) {
        /* set by beginPage */
        pages[currentPage].push(string);
      } else {
        // +1 for '\n' that will be used to join 'content'
        content_length += string.length + 1;
        content.push(string);
      }
    },
        newObject = function newObject() {
      // Begin a new object
      objectNumber++;
      offsets[objectNumber] = content_length;
      out(objectNumber + ' 0 obj');
      return objectNumber;
    },

    // Does not output the object until after the pages have been output.
    // Returns an object containing the objectId and content.
    // All pages have been added so the object ID can be estimated to start right after.
    // This does not modify the current objectNumber;  It must be updated after the newObjects are output.
    newAdditionalObject = function newAdditionalObject() {
      var objId = pages.length * 2 + 1;
      objId += additionalObjects.length;
      var obj = {
        objId: objId,
        content: ''
      };
      additionalObjects.push(obj);
      return obj;
    },

    // Does not output the object.  The caller must call newObjectDeferredBegin(oid) before outputing any data
    newObjectDeferred = function newObjectDeferred() {
      objectNumber++;
      offsets[objectNumber] = function () {
        return content_length;
      };
      return objectNumber;
    },
        newObjectDeferredBegin = function newObjectDeferredBegin(oid) {
      offsets[oid] = content_length;
    },
        putStream = function putStream(str) {
      out('stream');
      out(str);
      out('endstream');
    },
        putPages = function putPages() {
      var n,
          p,
          arr,
          i,
          deflater,
          adler32,
          adler32cs,
          wPt,
          hPt,
          pageObjectNumbers = [];

      adler32cs = global.adler32cs || jsPDF.adler32cs;
      if (compress && typeof adler32cs === 'undefined') {
        compress = false;
      }

      // outToPages = false as set in endDocument(). out() writes to content.

      for (n = 1; n <= page; n++) {
        pageObjectNumbers.push(newObject());
        wPt = (pageWidth = pagedim[n].width) * k;
        hPt = (pageHeight = pagedim[n].height) * k;
        out('<</Type /Page');
        out('/Parent 1 0 R');
        out('/Resources 2 0 R');
        out('/MediaBox [0 0 ' + f2(wPt) + ' ' + f2(hPt) + ']');
        // Added for annotation plugin
        events.publish('putPage', {
          pageNumber: n,
          page: pages[n]
        });
        out('/Contents ' + (objectNumber + 1) + ' 0 R');
        out('>>');
        out('endobj');

        // Page content
        p = pages[n].join('\n');
        newObject();
        if (compress) {
          arr = [];
          i = p.length;
          while (i--) {
            arr[i] = p.charCodeAt(i);
          }
          adler32 = adler32cs.from(p);
          deflater = new Deflater(6);
          deflater.append(new Uint8Array(arr));
          p = deflater.flush();
          arr = new Uint8Array(p.length + 6);
          arr.set(new Uint8Array([120, 156])), arr.set(p, 2);
          arr.set(new Uint8Array([adler32 & 0xFF, adler32 >> 8 & 0xFF, adler32 >> 16 & 0xFF, adler32 >> 24 & 0xFF]), p.length + 2);
          p = String.fromCharCode.apply(null, arr);
          out('<</Length ' + p.length + ' /Filter [/FlateDecode]>>');
        } else {
          out('<</Length ' + p.length + '>>');
        }
        putStream(p);
        out('endobj');
      }
      offsets[1] = content_length;
      out('1 0 obj');
      out('<</Type /Pages');
      var kids = '/Kids [';
      for (i = 0; i < page; i++) {
        kids += pageObjectNumbers[i] + ' 0 R ';
      }
      out(kids + ']');
      out('/Count ' + page);
      out('>>');
      out('endobj');
      events.publish('postPutPages');
    },
        putFont = function putFont(font) {
      font.objectNumber = newObject();
      out('<</BaseFont/' + font.PostScriptName + '/Type/Font');
      if (typeof font.encoding === 'string') {
        out('/Encoding/' + font.encoding);
      }
      out('/Subtype/Type1>>');
      out('endobj');
    },
        putFonts = function putFonts() {
      for (var fontKey in fonts) {
        if (fonts.hasOwnProperty(fontKey)) {
          putFont(fonts[fontKey]);
        }
      }
    },
        putXobjectDict = function putXobjectDict() {
      // Loop through images, or other data objects
      events.publish('putXobjectDict');
    },
        putResourceDictionary = function putResourceDictionary() {
      out('/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]');
      out('/Font <<');

      // Do this for each font, the '1' bit is the index of the font
      for (var fontKey in fonts) {
        if (fonts.hasOwnProperty(fontKey)) {
          out('/' + fontKey + ' ' + fonts[fontKey].objectNumber + ' 0 R');
        }
      }
      out('>>');
      out('/XObject <<');
      putXobjectDict();
      out('>>');
    },
        putResources = function putResources() {
      putFonts();
      events.publish('putResources');
      // Resource dictionary
      offsets[2] = content_length;
      out('2 0 obj');
      out('<<');
      putResourceDictionary();
      out('>>');
      out('endobj');
      events.publish('postPutResources');
    },
        putAdditionalObjects = function putAdditionalObjects() {
      events.publish('putAdditionalObjects');
      for (var i = 0; i < additionalObjects.length; i++) {
        var obj = additionalObjects[i];
        offsets[obj.objId] = content_length;
        out(obj.objId + ' 0 obj');
        out(obj.content);
        out('endobj');
      }
      objectNumber += additionalObjects.length;
      events.publish('postPutAdditionalObjects');
    },
        addToFontDictionary = function addToFontDictionary(fontKey, fontName, fontStyle) {
      // this is mapping structure for quick font key lookup.
      // returns the KEY of the font (ex: "F1") for a given
      // pair of font name and type (ex: "Arial". "Italic")
      if (!fontmap.hasOwnProperty(fontName)) {
        fontmap[fontName] = {};
      }
      fontmap[fontName][fontStyle] = fontKey;
    },

    /**
     * FontObject describes a particular font as member of an instnace of jsPDF
     *
     * It's a collection of properties like 'id' (to be used in PDF stream),
     * 'fontName' (font's family name), 'fontStyle' (font's style variant label)
     *
     * @class
     * @public
     * @property id {String} PDF-document-instance-specific label assinged to the font.
     * @property PostScriptName {String} PDF specification full name for the font
     * @property encoding {Object} Encoding_name-to-Font_metrics_object mapping.
     * @name FontObject
     * @ignore This should not be in the public docs.
     */
    addFont = function addFont(PostScriptName, fontName, fontStyle, encoding) {
      var fontKey = 'F' + (Object.keys(fonts).length + 1).toString(10),

      // This is FontObject
      font = fonts[fontKey] = {
        'id': fontKey,
        'PostScriptName': PostScriptName,
        'fontName': fontName,
        'fontStyle': fontStyle,
        'encoding': encoding,
        'metadata': {}
      };
      addToFontDictionary(fontKey, fontName, fontStyle);
      events.publish('addFont', font);

      return fontKey;
    },
        addFonts = function addFonts() {

      var HELVETICA = "helvetica",
          TIMES = "times",
          COURIER = "courier",
          NORMAL = "normal",
          BOLD = "bold",
          ITALIC = "italic",
          BOLD_ITALIC = "bolditalic",
          encoding = 'StandardEncoding',
          ZAPF = "zapfdingbats",
          standardFonts = [['Helvetica', HELVETICA, NORMAL], ['Helvetica-Bold', HELVETICA, BOLD], ['Helvetica-Oblique', HELVETICA, ITALIC], ['Helvetica-BoldOblique', HELVETICA, BOLD_ITALIC], ['Courier', COURIER, NORMAL], ['Courier-Bold', COURIER, BOLD], ['Courier-Oblique', COURIER, ITALIC], ['Courier-BoldOblique', COURIER, BOLD_ITALIC], ['Times-Roman', TIMES, NORMAL], ['Times-Bold', TIMES, BOLD], ['Times-Italic', TIMES, ITALIC], ['Times-BoldItalic', TIMES, BOLD_ITALIC], ['ZapfDingbats', ZAPF]];

      for (var i = 0, l = standardFonts.length; i < l; i++) {
        var fontKey = addFont(standardFonts[i][0], standardFonts[i][1], standardFonts[i][2], encoding);

        // adding aliases for standard fonts, this time matching the capitalization
        var parts = standardFonts[i][0].split('-');
        addToFontDictionary(fontKey, parts[0], parts[1] || '');
      }
      events.publish('addFonts', {
        fonts: fonts,
        dictionary: fontmap
      });
    },
        SAFE = function __safeCall(fn) {
      fn.foo = function __safeCallWrapper() {
        try {
          return fn.apply(this, arguments);
        } catch (e) {
          var stack = e.stack || '';
          if (~stack.indexOf(' at ')) stack = stack.split(" at ")[1];
          var m = "Error in function " + stack.split("\n")[0].split('<')[0] + ": " + e.message;
          if (global.console) {
            global.console.error(m, e);
            if (global.alert) alert(m);
          } else {
            throw new Error(m);
          }
        }
      };
      fn.foo.bar = fn;
      return fn.foo;
    },
        to8bitStream = function to8bitStream(text, flags) {
      /**
       * PDF 1.3 spec:
       * "For text strings encoded in Unicode, the first two bytes must be 254 followed by
       * 255, representing the Unicode byte order marker, U+FEFF. (This sequence conflicts
       * with the PDFDocEncoding character sequence thorn ydieresis, which is unlikely
       * to be a meaningful beginning of a word or phrase.) The remainder of the
       * string consists of Unicode character codes, according to the UTF-16 encoding
       * specified in the Unicode standard, version 2.0. Commonly used Unicode values
       * are represented as 2 bytes per character, with the high-order byte appearing first
       * in the string."
       *
       * In other words, if there are chars in a string with char code above 255, we
       * recode the string to UCS2 BE - string doubles in length and BOM is prepended.
       *
       * HOWEVER!
       * Actual *content* (body) text (as opposed to strings used in document properties etc)
       * does NOT expect BOM. There, it is treated as a literal GID (Glyph ID)
       *
       * Because of Adobe's focus on "you subset your fonts!" you are not supposed to have
       * a font that maps directly Unicode (UCS2 / UTF16BE) code to font GID, but you could
       * fudge it with "Identity-H" encoding and custom CIDtoGID map that mimics Unicode
       * code page. There, however, all characters in the stream are treated as GIDs,
       * including BOM, which is the reason we need to skip BOM in content text (i.e. that
       * that is tied to a font).
       *
       * To signal this "special" PDFEscape / to8bitStream handling mode,
       * API.text() function sets (unless you overwrite it with manual values
       * given to API.text(.., flags) )
       * flags.autoencode = true
       * flags.noBOM = true
       *
       * ===================================================================================
       * `flags` properties relied upon:
       *   .sourceEncoding = string with encoding label.
       *                     "Unicode" by default. = encoding of the incoming text.
       *                     pass some non-existing encoding name
       *                     (ex: 'Do not touch my strings! I know what I am doing.')
       *                     to make encoding code skip the encoding step.
       *   .outputEncoding = Either valid PDF encoding name
       *                     (must be supported by jsPDF font metrics, otherwise no encoding)
       *                     or a JS object, where key = sourceCharCode, value = outputCharCode
       *                     missing keys will be treated as: sourceCharCode === outputCharCode
       *   .noBOM
       *       See comment higher above for explanation for why this is important
       *   .autoencode
       *       See comment higher above for explanation for why this is important
       */

      var i, l, sourceEncoding, encodingBlock, outputEncoding, newtext, isUnicode, ch, bch;

      flags = flags || {};
      sourceEncoding = flags.sourceEncoding || 'Unicode';
      outputEncoding = flags.outputEncoding;

      // This 'encoding' section relies on font metrics format
      // attached to font objects by, among others,
      // "Willow Systems' standard_font_metrics plugin"
      // see jspdf.plugin.standard_font_metrics.js for format
      // of the font.metadata.encoding Object.
      // It should be something like
      //   .encoding = {'codePages':['WinANSI....'], 'WinANSI...':{code:code, ...}}
      //   .widths = {0:width, code:width, ..., 'fof':divisor}
      //   .kerning = {code:{previous_char_code:shift, ..., 'fof':-divisor},...}
      if ((flags.autoencode || outputEncoding) && fonts[activeFontKey].metadata && fonts[activeFontKey].metadata[sourceEncoding] && fonts[activeFontKey].metadata[sourceEncoding].encoding) {
        encodingBlock = fonts[activeFontKey].metadata[sourceEncoding].encoding;

        // each font has default encoding. Some have it clearly defined.
        if (!outputEncoding && fonts[activeFontKey].encoding) {
          outputEncoding = fonts[activeFontKey].encoding;
        }

        // Hmmm, the above did not work? Let's try again, in different place.
        if (!outputEncoding && encodingBlock.codePages) {
          outputEncoding = encodingBlock.codePages[0]; // let's say, first one is the default
        }

        if (typeof outputEncoding === 'string') {
          outputEncoding = encodingBlock[outputEncoding];
        }
        // we want output encoding to be a JS Object, where
        // key = sourceEncoding's character code and
        // value = outputEncoding's character code.
        if (outputEncoding) {
          isUnicode = false;
          newtext = [];
          for (i = 0, l = text.length; i < l; i++) {
            ch = outputEncoding[text.charCodeAt(i)];
            if (ch) {
              newtext.push(String.fromCharCode(ch));
            } else {
              newtext.push(text[i]);
            }

            // since we are looping over chars anyway, might as well
            // check for residual unicodeness
            if (newtext[i].charCodeAt(0) >> 8) {
              /* more than 255 */
              isUnicode = true;
            }
          }
          text = newtext.join('');
        }
      }

      i = text.length;
      // isUnicode may be set to false above. Hence the triple-equal to undefined
      while (isUnicode === undefined && i !== 0) {
        if (text.charCodeAt(i - 1) >> 8) {
          /* more than 255 */
          isUnicode = true;
        }
        i--;
      }
      if (!isUnicode) {
        return text;
      }

      newtext = flags.noBOM ? [] : [254, 255];
      for (i = 0, l = text.length; i < l; i++) {
        ch = text.charCodeAt(i);
        bch = ch >> 8; // divide by 256
        if (bch >> 8) {
          /* something left after dividing by 256 second time */
          throw new Error("Character at position " + i + " of string '" + text + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
        }
        newtext.push(bch);
        newtext.push(ch - (bch << 8));
      }
      return String.fromCharCode.apply(undefined, newtext);
    },
        pdfEscape = function pdfEscape(text, flags) {
      /**
       * Replace '/', '(', and ')' with pdf-safe versions
       *
       * Doing to8bitStream does NOT make this PDF display unicode text. For that
       * we also need to reference a unicode font and embed it - royal pain in the rear.
       *
       * There is still a benefit to to8bitStream - PDF simply cannot handle 16bit chars,
       * which JavaScript Strings are happy to provide. So, while we still cannot display
       * 2-byte characters property, at least CONDITIONALLY converting (entire string containing)
       * 16bit chars to (USC-2-BE) 2-bytes per char + BOM streams we ensure that entire PDF
       * is still parseable.
       * This will allow immediate support for unicode in document properties strings.
       */
      return to8bitStream(text, flags).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    },
        putInfo = function putInfo() {
      out('/Producer (jsPDF ' + jsPDF.version + ')');
      for (var key in documentProperties) {
        if (documentProperties.hasOwnProperty(key) && documentProperties[key]) {
          out('/' + key.substr(0, 1).toUpperCase() + key.substr(1) + ' (' + pdfEscape(documentProperties[key]) + ')');
        }
      }
      var created = new Date(),
          tzoffset = created.getTimezoneOffset(),
          tzsign = tzoffset < 0 ? '+' : '-',
          tzhour = Math.floor(Math.abs(tzoffset / 60)),
          tzmin = Math.abs(tzoffset % 60),
          tzstr = [tzsign, padd2(tzhour), "'", padd2(tzmin), "'"].join('');
      out(['/CreationDate (D:', created.getFullYear(), padd2(created.getMonth() + 1), padd2(created.getDate()), padd2(created.getHours()), padd2(created.getMinutes()), padd2(created.getSeconds()), tzstr, ')'].join(''));
    },
        putCatalog = function putCatalog() {
      out('/Type /Catalog');
      out('/Pages 1 0 R');
      // PDF13ref Section 7.2.1
      if (!zoomMode) zoomMode = 'fullwidth';
      switch (zoomMode) {
        case 'fullwidth':
          out('/OpenAction [3 0 R /FitH null]');
          break;
        case 'fullheight':
          out('/OpenAction [3 0 R /FitV null]');
          break;
        case 'fullpage':
          out('/OpenAction [3 0 R /Fit]');
          break;
        case 'original':
          out('/OpenAction [3 0 R /XYZ null null 1]');
          break;
        default:
          var pcn = '' + zoomMode;
          if (pcn.substr(pcn.length - 1) === '%') zoomMode = parseInt(zoomMode) / 100;
          if (typeof zoomMode === 'number') {
            out('/OpenAction [3 0 R /XYZ null null ' + f2(zoomMode) + ']');
          }
      }
      if (!layoutMode) layoutMode = 'continuous';
      switch (layoutMode) {
        case 'continuous':
          out('/PageLayout /OneColumn');
          break;
        case 'single':
          out('/PageLayout /SinglePage');
          break;
        case 'two':
        case 'twoleft':
          out('/PageLayout /TwoColumnLeft');
          break;
        case 'tworight':
          out('/PageLayout /TwoColumnRight');
          break;
      }
      if (pageMode) {
        /**
         * A name object specifying how the document should be displayed when opened:
         * UseNone      : Neither document outline nor thumbnail images visible -- DEFAULT
         * UseOutlines  : Document outline visible
         * UseThumbs    : Thumbnail images visible
         * FullScreen   : Full-screen mode, with no menu bar, window controls, or any other window visible
         */
        out('/PageMode /' + pageMode);
      }
      events.publish('putCatalog');
    },
        putTrailer = function putTrailer() {
      out('/Size ' + (objectNumber + 1));
      out('/Root ' + objectNumber + ' 0 R');
      out('/Info ' + (objectNumber - 1) + ' 0 R');
    },
        beginPage = function beginPage(width, height) {
      // Dimensions are stored as user units and converted to points on output
      var orientation = typeof height === 'string' && height.toLowerCase();
      if (typeof width === 'string') {
        var format = width.toLowerCase();
        if (pageFormats.hasOwnProperty(format)) {
          width = pageFormats[format][0] / k;
          height = pageFormats[format][1] / k;
        }
      }
      if (Array.isArray(width)) {
        height = width[1];
        width = width[0];
      }
      if (orientation) {
        switch (orientation.substr(0, 1)) {
          case 'l':
            if (height > width) orientation = 's';
            break;
          case 'p':
            if (width > height) orientation = 's';
            break;
        }
        if (orientation === 's') {
          tmp = width;
          width = height;
          height = tmp;
        }
      }
      outToPages = true;
      pages[++page] = [];
      pagedim[page] = {
        width: Number(width) || pageWidth,
        height: Number(height) || pageHeight
      };
      pagesContext[page] = {};
      _setPage(page);
    },
        _addPage = function _addPage() {
      beginPage.apply(this, arguments);
      // Set line width
      out(f2(lineWidth * k) + ' w');
      // Set draw color
      out(drawColor);
      // resurrecting non-default line caps, joins
      if (lineCapID !== 0) {
        out(lineCapID + ' J');
      }
      if (lineJoinID !== 0) {
        out(lineJoinID + ' j');
      }
      events.publish('addPage', {
        pageNumber: page
      });
    },
        _deletePage = function _deletePage(n) {
      if (n > 0 && n <= page) {
        pages.splice(n, 1);
        pagedim.splice(n, 1);
        page--;
        if (currentPage > page) {
          currentPage = page;
        }
        this.setPage(currentPage);
      }
    },
        _setPage = function _setPage(n) {
      if (n > 0 && n <= page) {
        currentPage = n;
        pageWidth = pagedim[n].width;
        pageHeight = pagedim[n].height;
      }
    },

    /**
     * Returns a document-specific font key - a label assigned to a
     * font name + font type combination at the time the font was added
     * to the font inventory.
     *
     * Font key is used as label for the desired font for a block of text
     * to be added to the PDF document stream.
     * @private
     * @function
     * @param fontName {String} can be undefined on "falthy" to indicate "use current"
     * @param fontStyle {String} can be undefined on "falthy" to indicate "use current"
     * @returns {String} Font key.
     */
    _getFont = function _getFont(fontName, fontStyle) {
      var key;

      fontName = fontName !== undefined ? fontName : fonts[activeFontKey].fontName;
      fontStyle = fontStyle !== undefined ? fontStyle : fonts[activeFontKey].fontStyle;

      if (fontName !== undefined) {
        fontName = fontName.toLowerCase();
      }
      switch (fontName) {
        case 'sans-serif':
        case 'verdana':
        case 'arial':
        case 'helvetica':
          fontName = 'helvetica';
          break;
        case 'fixed':
        case 'monospace':
        case 'terminal':
        case 'courier':
          fontName = 'courier';
          break;
        case 'serif':
        case 'cursive':
        case 'fantasy':
        default:
          fontName = 'times';
          break;
      }

      try {
        // get a string like 'F3' - the KEY corresponding tot he font + type combination.
        key = fontmap[fontName][fontStyle];
      } catch (e) {}

      if (!key) {
        //throw new Error("Unable to look up font label for font '" + fontName + "', '"
        //+ fontStyle + "'. Refer to getFontList() for available fonts.");
        key = fontmap['times'][fontStyle];
        if (key == null) {
          key = fontmap['times']['normal'];
        }
      }
      return key;
    },
        buildDocument = function buildDocument() {
      outToPages = false; // switches out() to content

      objectNumber = 2;
      content_length = 0;
      content = [];
      offsets = [];
      additionalObjects = [];
      // Added for AcroForm
      events.publish('buildDocument');

      // putHeader()
      out('%PDF-' + pdfVersion);

      putPages();

      // Must happen after putPages
      // Modifies current object Id
      putAdditionalObjects();

      putResources();

      // Info
      newObject();
      out('<<');
      putInfo();
      out('>>');
      out('endobj');

      // Catalog
      newObject();
      out('<<');
      putCatalog();
      out('>>');
      out('endobj');

      // Cross-ref
      var o = content_length,
          i,
          p = "0000000000";
      out('xref');
      out('0 ' + (objectNumber + 1));
      out(p + ' 65535 f ');
      for (i = 1; i <= objectNumber; i++) {
        var offset = offsets[i];
        if (typeof offset === 'function') {
          out((p + offsets[i]()).slice(-10) + ' 00000 n ');
        } else {
          out((p + offsets[i]).slice(-10) + ' 00000 n ');
        }
      }
      // Trailer
      out('trailer');
      out('<<');
      putTrailer();
      out('>>');
      out('startxref');
      out('' + o);
      out('%%EOF');

      outToPages = true;

      return content.join('\n');
    },
        getStyle = function getStyle(style) {
      // see path-painting operators in PDF spec
      var op = 'S'; // stroke
      if (style === 'F') {
        op = 'f'; // fill
      } else if (style === 'FD' || style === 'DF') {
        op = 'B'; // both
      } else if (style === 'f' || style === 'f*' || style === 'B' || style === 'B*') {
        /*
         Allow direct use of these PDF path-painting operators:
         - f	fill using nonzero winding number rule
         - f*	fill using even-odd rule
         - B	fill then stroke with fill using non-zero winding number rule
         - B*	fill then stroke with fill using even-odd rule
         */
        op = style;
      }
      return op;
    },
        getArrayBuffer = function getArrayBuffer() {
      var data = buildDocument(),
          len = data.length,
          ab = new ArrayBuffer(len),
          u8 = new Uint8Array(ab);

      while (len--) {
        u8[len] = data.charCodeAt(len);
      }return ab;
    },
        getBlob = function getBlob() {
      return new Blob([getArrayBuffer()], {
        type: "application/pdf"
      });
    },

    /**
     * Generates the PDF document.
     *
     * If `type` argument is undefined, output is raw body of resulting PDF returned as a string.
     *
     * @param {String} type A string identifying one of the possible output types.
     * @param {Object} options An object providing some additional signalling to PDF generator.
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name output
     */
    _output = SAFE(function (type, options) {
      var datauri = ('' + type).substr(0, 6) === 'dataur' ? 'data:application/pdf;base64,' + btoa(buildDocument()) : 0;

      switch (type) {
        case undefined:
          return buildDocument();
        case 'save':
          if (navigator.getUserMedia) {
            if (global.URL === undefined || global.URL.createObjectURL === undefined) {
              return API.output('dataurlnewwindow');
            }
          }
          saveAs(getBlob(), options);
          if (typeof saveAs.unload === 'function') {
            if (global.setTimeout) {
              setTimeout(saveAs.unload, 911);
            }
          }
          break;
        case 'arraybuffer':
          return getArrayBuffer();
        case 'blob':
          return getBlob();
        case 'bloburi':
        case 'bloburl':
          // User is responsible of calling revokeObjectURL
          return global.URL && global.URL.createObjectURL(getBlob()) || void 0;
        case 'datauristring':
        case 'dataurlstring':
          return datauri;
        case 'dataurlnewwindow':
          var nW = global.open(datauri);
          if (nW || typeof safari === "undefined") return nW;
        /* pass through */
        case 'datauri':
        case 'dataurl':
          return global.document.location.href = datauri;
        default:
          throw new Error('Output type "' + type + '" is not supported.');
      }
      // @TODO: Add different output options
    });

    switch (unit) {
      case 'pt':
        k = 1;
        break;
      case 'mm':
        k = 72 / 25.4000508;
        break;
      case 'cm':
        k = 72 / 2.54000508;
        break;
      case 'in':
        k = 72;
        break;
      case 'px':
        k = 96 / 72;
        break;
      case 'pc':
        k = 12;
        break;
      case 'em':
        k = 12;
        break;
      case 'ex':
        k = 6;
        break;
      default:
        throw 'Invalid unit: ' + unit;
    }

    //---------------------------------------
    // Public API

    /**
     * Object exposing internal API to plugins
     * @public
     */
    API.internal = {
      'pdfEscape': pdfEscape,
      'getStyle': getStyle,
      /**
       * Returns {FontObject} describing a particular font.
       * @public
       * @function
       * @param fontName {String} (Optional) Font's family name
       * @param fontStyle {String} (Optional) Font's style variation name (Example:"Italic")
       * @returns {FontObject}
       */
      'getFont': function getFont() {
        return fonts[_getFont.apply(API, arguments)];
      },
      'getFontSize': function getFontSize() {
        return activeFontSize;
      },
      'getLineHeight': function getLineHeight() {
        return activeFontSize * lineHeightProportion;
      },
      'write': function write(string1 /*, string2, string3, etc */) {
        out(arguments.length === 1 ? string1 : Array.prototype.join.call(arguments, ' '));
      },
      'getCoordinateString': function getCoordinateString(value) {
        return f2(value * k);
      },
      'getVerticalCoordinateString': function getVerticalCoordinateString(value) {
        return f2((pageHeight - value) * k);
      },
      'collections': {},
      'newObject': newObject,
      'newAdditionalObject': newAdditionalObject,
      'newObjectDeferred': newObjectDeferred,
      'newObjectDeferredBegin': newObjectDeferredBegin,
      'putStream': putStream,
      'events': events,
      // ratio that you use in multiplication of a given "size" number to arrive to 'point'
      // units of measurement.
      // scaleFactor is set at initialization of the document and calculated against the stated
      // default measurement units for the document.
      // If default is "mm", k is the number that will turn number in 'mm' into 'points' number.
      // through multiplication.
      'scaleFactor': k,
      'pageSize': {
        get width() {
          return pageWidth;
        },
        get height() {
          return pageHeight;
        }
      },
      'output': function output(type, options) {
        return _output(type, options);
      },
      'getNumberOfPages': function getNumberOfPages() {
        return pages.length - 1;
      },
      'pages': pages,
      'out': out,
      'f2': f2,
      'getPageInfo': function getPageInfo(pageNumberOneBased) {
        var objId = (pageNumberOneBased - 1) * 2 + 3;
        return {
          objId: objId,
          pageNumber: pageNumberOneBased,
          pageContext: pagesContext[pageNumberOneBased]
        };
      },
      'getCurrentPageInfo': function getCurrentPageInfo() {
        var objId = (currentPage - 1) * 2 + 3;
        return {
          objId: objId,
          pageNumber: currentPage,
          pageContext: pagesContext[currentPage]
        };
      },
      'getPDFVersion': function getPDFVersion() {
        return pdfVersion;
      }
    };

    /**
     * Adds (and transfers the focus to) new page to the PDF document.
     * @function
     * @returns {jsPDF}
     *
     * @methodOf jsPDF#
     * @name addPage
     */
    API.addPage = function () {
      _addPage.apply(this, arguments);
      return this;
    };
    /**
     * Adds (and transfers the focus to) new page to the PDF document.
     * @function
     * @returns {jsPDF}
     *
     * @methodOf jsPDF#
     * @name setPage
     * @param {Number} page Switch the active page to the page number specified
     * @example
     * doc = jsPDF()
     * doc.addPage()
     * doc.addPage()
     * doc.text('I am on page 3', 10, 10)
     * doc.setPage(1)
     * doc.text('I am on page 1', 10, 10)
     */
    API.setPage = function () {
      _setPage.apply(this, arguments);
      return this;
    };
    API.insertPage = function (beforePage) {
      this.addPage();
      this.movePage(currentPage, beforePage);
      return this;
    };
    API.movePage = function (targetPage, beforePage) {
      if (targetPage > beforePage) {
        var tmpPages = pages[targetPage];
        var tmpPagedim = pagedim[targetPage];
        var tmpPagesContext = pagesContext[targetPage];
        for (var i = targetPage; i > beforePage; i--) {
          pages[i] = pages[i - 1];
          pagedim[i] = pagedim[i - 1];
          pagesContext[i] = pagesContext[i - 1];
        }
        pages[beforePage] = tmpPages;
        pagedim[beforePage] = tmpPagedim;
        pagesContext[beforePage] = tmpPagesContext;
        this.setPage(beforePage);
      } else if (targetPage < beforePage) {
        var tmpPages = pages[targetPage];
        var tmpPagedim = pagedim[targetPage];
        var tmpPagesContext = pagesContext[targetPage];
        for (var i = targetPage; i < beforePage; i++) {
          pages[i] = pages[i + 1];
          pagedim[i] = pagedim[i + 1];
          pagesContext[i] = pagesContext[i + 1];
        }
        pages[beforePage] = tmpPages;
        pagedim[beforePage] = tmpPagedim;
        pagesContext[beforePage] = tmpPagesContext;
        this.setPage(beforePage);
      }
      return this;
    };

    API.deletePage = function () {
      _deletePage.apply(this, arguments);
      return this;
    };

    /**
     * Set the display mode options of the page like zoom and layout.
     *
     * @param {integer|String} zoom   You can pass an integer or percentage as
     * a string. 2 will scale the document up 2x, '200%' will scale up by the
     * same amount. You can also set it to 'fullwidth', 'fullheight',
     * 'fullpage', or 'original'.
     *
     * Only certain PDF readers support this, such as Adobe Acrobat
     *
     * @param {String} layout Layout mode can be: 'continuous' - this is the
     * default continuous scroll. 'single' - the single page mode only shows one
     * page at a time. 'twoleft' - two column left mode, first page starts on
     * the left, and 'tworight' - pages are laid out in two columns, with the
     * first page on the right. This would be used for books.
     * @param {String} pmode 'UseOutlines' - it shows the
     * outline of the document on the left. 'UseThumbs' - shows thumbnails along
     * the left. 'FullScreen' - prompts the user to enter fullscreen mode.
     *
     * @function
     * @returns {jsPDF}
     * @name setDisplayMode
     */
    API.setDisplayMode = function (zoom, layout, pmode) {
      zoomMode = zoom;
      layoutMode = layout;
      pageMode = pmode;

      var validPageModes = [undefined, null, 'UseNone', 'UseOutlines', 'UseThumbs', 'FullScreen'];
      if (validPageModes.indexOf(pmode) == -1) {
        throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + pmode + '" is not recognized.');
      }
      return this;
    },

    /**
     * Adds text to page. Supports adding multiline text when 'text' argument is an Array of Strings.
     *
     * @function
     * @param {String|Array} text String or array of strings to be added to the page. Each line is shifted one line down per font, spacing settings declared before this call.
     * @param {Number} x Coordinate (in units declared at inception of PDF document) against left edge of the page
     * @param {Number} y Coordinate (in units declared at inception of PDF document) against upper edge of the page
     * @param {Object} flags Collection of settings signalling how the text must be encoded. Defaults are sane. If you think you want to pass some flags, you likely can read the source.
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name text
     */
    API.text = function (text, x, y, flags, angle, align) {
      /**
       * Inserts something like this into PDF
       *   BT
       *    /F1 16 Tf  % Font name + size
       *    16 TL % How many units down for next line in multiline text
       *    0 g % color
       *    28.35 813.54 Td % position
       *    (line one) Tj
       *    T* (line two) Tj
       *    T* (line three) Tj
       *   ET
       */
      function ESC(s) {
        s = s.split("\t").join(Array(options.TabLen || 9).join(" "));
        return pdfEscape(s, flags);
      }

      // Pre-August-2012 the order of arguments was function(x, y, text, flags)
      // in effort to make all calls have similar signature like
      //   function(data, coordinates... , miscellaneous)
      // this method had its args flipped.
      // code below allows backward compatibility with old arg order.
      if (typeof text === 'number') {
        tmp = y;
        y = x;
        x = text;
        text = tmp;
      }

      // If there are any newlines in text, we assume
      // the user wanted to print multiple lines, so break the
      // text up into an array.  If the text is already an array,
      // we assume the user knows what they are doing.
      // Convert text into an array anyway to simplify
      // later code.
      if (typeof text === 'string') {
        if (text.match(/[\n\r]/)) {
          text = text.split(/\r\n|\r|\n/g);
        } else {
          text = [text];
        }
      }
      if (typeof angle === 'string') {
        align = angle;
        angle = null;
      }
      if (typeof flags === 'string') {
        align = flags;
        flags = null;
      }
      if (typeof flags === 'number') {
        angle = flags;
        flags = null;
      }
      var xtra = '',
          mode = 'Td',
          todo;
      if (angle) {
        angle *= Math.PI / 180;
        var c = Math.cos(angle),
            s = Math.sin(angle);
        xtra = [f2(c), f2(s), f2(s * -1), f2(c), ''].join(" ");
        mode = 'Tm';
      }
      flags = flags || {};
      if (!('noBOM' in flags)) flags.noBOM = true;
      if (!('autoencode' in flags)) flags.autoencode = true;

      var strokeOption = '';
      var pageContext = this.internal.getCurrentPageInfo().pageContext;
      if (true === flags.stroke) {
        if (pageContext.lastTextWasStroke !== true) {
          strokeOption = '1 Tr\n';
          pageContext.lastTextWasStroke = true;
        }
      } else {
        if (pageContext.lastTextWasStroke) {
          strokeOption = '0 Tr\n';
        }
        pageContext.lastTextWasStroke = false;
      }

      if (typeof this._runningPageHeight === 'undefined') {
        this._runningPageHeight = 0;
      }

      if (typeof text === 'string') {
        text = ESC(text);
      } else if (Object.prototype.toString.call(text) === '[object Array]') {
        // we don't want to destroy  original text array, so cloning it
        var sa = text.concat(),
            da = [],
            len = sa.length;
        // we do array.join('text that must not be PDFescaped")
        // thus, pdfEscape each component separately
        while (len--) {
          da.push(ESC(sa.shift()));
        }
        var linesLeft = Math.ceil((pageHeight - y - this._runningPageHeight) * k / (activeFontSize * lineHeightProportion));
        if (0 <= linesLeft && linesLeft < da.length + 1) {
          //todo = da.splice(linesLeft-1);
        }

        if (align) {
          var left,
              prevX,
              maxLineLength,
              leading = activeFontSize * lineHeightProportion,
              lineWidths = text.map(function (v) {
            return this.getStringUnitWidth(v) * activeFontSize / k;
          }, this);
          maxLineLength = Math.max.apply(Math, lineWidths);
          // The first line uses the "main" Td setting,
          // and the subsequent lines are offset by the
          // previous line's x coordinate.
          if (align === "center") {
            // The passed in x coordinate defines
            // the center point.
            left = x - maxLineLength / 2;
            x -= lineWidths[0] / 2;
          } else if (align === "right") {
            // The passed in x coordinate defines the
            // rightmost point of the text.
            left = x - maxLineLength;
            x -= lineWidths[0];
          } else {
            throw new Error('Unrecognized alignment option, use "center" or "right".');
          }
          prevX = x;
          text = da[0];
          for (var i = 1, len = da.length; i < len; i++) {
            var delta = maxLineLength - lineWidths[i];
            if (align === "center") delta /= 2;
            // T* = x-offset leading Td ( text )
            text += ") Tj\n" + (left - prevX + delta) + " -" + leading + " Td (" + da[i];
            prevX = left + delta;
          }
        } else {
          text = da.join(") Tj\nT* (");
        }
      } else {
        throw new Error('Type of text must be string or Array. "' + text + '" is not recognized.');
      }
      // Using "'" ("go next line and render text" mark) would save space but would complicate our rendering code, templates

      // BT .. ET does NOT have default settings for Tf. You must state that explicitely every time for BT .. ET
      // if you want text transformation matrix (+ multiline) to work reliably (which reads sizes of things from font declarations)
      // Thus, there is NO useful, *reliable* concept of "default" font for a page.
      // The fact that "default" (reuse font used before) font worked before in basic cases is an accident
      // - readers dealing smartly with brokenness of jsPDF's markup.

      var curY;

      if (todo) {
        //this.addPage();
        //this._runningPageHeight += y -  (activeFontSize * 1.7 / k);
        //curY = f2(pageHeight - activeFontSize * 1.7 /k);
      } else {
        curY = f2((pageHeight - y) * k);
      }
      //curY = f2((pageHeight - (y - this._runningPageHeight)) * k);

      //			if (curY < 0){
      //				console.log('auto page break');
      //				this.addPage();
      //				this._runningPageHeight = y -  (activeFontSize * 1.7 / k);
      //				curY = f2(pageHeight - activeFontSize * 1.7 /k);
      //			}

      out('BT\n/' + activeFontKey + ' ' + activeFontSize + ' Tf\n' + // font face, style, size
      activeFontSize * lineHeightProportion + ' TL\n' + // line spacing
      strokeOption + // stroke option
      textColor + '\n' + xtra + f2(x * k) + ' ' + curY + ' ' + mode + '\n(' + text + ') Tj\nET');

      if (todo) {
        //this.text( todo, x, activeFontSize * 1.7 / k);
        //this.text( todo, x, this._runningPageHeight + (activeFontSize * 1.7 / k));
        this.text(todo, x, y); // + (activeFontSize * 1.7 / k));
      }

      return this;
    };

    /**
     * Letter spacing method to print text with gaps
     *
     * @function
     * @param {String|Array} text String to be added to the page.
     * @param {Number} x Coordinate (in units declared at inception of PDF document) against left edge of the page
     * @param {Number} y Coordinate (in units declared at inception of PDF document) against upper edge of the page
     * @param {Number} spacing Spacing (in units declared at inception)
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name lstext
     * @deprecated We'll be removing this function. It doesn't take character width into account.
     */
    API.lstext = function (text, x, y, spacing) {
      console.warn('jsPDF.lstext is deprecated');
      for (var i = 0, len = text.length; i < len; i++, x += spacing) {
        this.text(text[i], x, y);
      }return this;
    };

    API.line = function (x1, y1, x2, y2) {
      return this.lines([[x2 - x1, y2 - y1]], x1, y1);
    };

    API.clip = function () {
      // By patrick-roberts, github.com/MrRio/jsPDF/issues/328
      // Call .clip() after calling .rect() with a style argument of null
      out('W'); // clip
      out('S'); // stroke path; necessary for clip to work
    };

    /**
     * This fixes the previous function clip(). Perhaps the 'stroke path' hack was due to the missing 'n' instruction?
     * We introduce the fixed version so as to not break API.
     * @param fillRule
     */
    API.clip_fixed = function (fillRule) {
      // Call .clip() after calling drawing ops with a style argument of null
      // W is the PDF clipping op
      if ('evenodd' === fillRule) {
        out('W*');
      } else {
        out('W');
      }
      // End the path object without filling or stroking it.
      // This operator is a path-painting no-op, used primarily for the side effect of changing the current clipping path
      // (see Section 4.4.3, “Clipping Path Operators”)
      out('n');
    };

    /**
     * Adds series of curves (straight lines or cubic bezier curves) to canvas, starting at `x`, `y` coordinates.
     * All data points in `lines` are relative to last line origin.
     * `x`, `y` become x1,y1 for first line / curve in the set.
     * For lines you only need to specify [x2, y2] - (ending point) vector against x1, y1 starting point.
     * For bezier curves you need to specify [x2,y2,x3,y3,x4,y4] - vectors to control points 1, 2, ending point. All vectors are against the start of the curve - x1,y1.
     *
     * @example .lines([[2,2],[-2,2],[1,1,2,2,3,3],[2,1]], 212,110, 10) // line, line, bezier curve, line
     * @param {Array} lines Array of *vector* shifts as pairs (lines) or sextets (cubic bezier curves).
     * @param {Number} x Coordinate (in units declared at inception of PDF document) against left edge of the page
     * @param {Number} y Coordinate (in units declared at inception of PDF document) against upper edge of the page
     * @param {Number} scale (Defaults to [1.0,1.0]) x,y Scaling factor for all vectors. Elements can be any floating number Sub-one makes drawing smaller. Over-one grows the drawing. Negative flips the direction.
     * @param {String} style A string specifying the painting style or null.  Valid styles include: 'S' [default] - stroke, 'F' - fill,  and 'DF' (or 'FD') -  fill then stroke. A null value postpones setting the style so that a shape may be composed using multiple method calls. The last drawing method call used to define the shape should not have a null style argument.
     * @param {Boolean} closed If true, the path is closed with a straight line from the end of the last curve to the starting point.
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name lines
     */
    API.lines = function (lines, x, y, scale, style, closed) {
      var scalex, scaley, i, l, leg, x2, y2, x3, y3, x4, y4;

      // Pre-August-2012 the order of arguments was function(x, y, lines, scale, style)
      // in effort to make all calls have similar signature like
      //   function(content, coordinateX, coordinateY , miscellaneous)
      // this method had its args flipped.
      // code below allows backward compatibility with old arg order.
      if (typeof lines === 'number') {
        tmp = y;
        y = x;
        x = lines;
        lines = tmp;
      }

      scale = scale || [1, 1];

      // starting point
      out(f3(x * k) + ' ' + f3((pageHeight - y) * k) + ' m ');

      scalex = scale[0];
      scaley = scale[1];
      l = lines.length;
      //, x2, y2 // bezier only. In page default measurement "units", *after* scaling
      //, x3, y3 // bezier only. In page default measurement "units", *after* scaling
      // ending point for all, lines and bezier. . In page default measurement "units", *after* scaling
      x4 = x; // last / ending point = starting point for first item.
      y4 = y; // last / ending point = starting point for first item.

      for (i = 0; i < l; i++) {
        leg = lines[i];
        if (leg.length === 2) {
          // simple line
          x4 = leg[0] * scalex + x4; // here last x4 was prior ending point
          y4 = leg[1] * scaley + y4; // here last y4 was prior ending point
          out(f3(x4 * k) + ' ' + f3((pageHeight - y4) * k) + ' l');
        } else {
          // bezier curve
          x2 = leg[0] * scalex + x4; // here last x4 is prior ending point
          y2 = leg[1] * scaley + y4; // here last y4 is prior ending point
          x3 = leg[2] * scalex + x4; // here last x4 is prior ending point
          y3 = leg[3] * scaley + y4; // here last y4 is prior ending point
          x4 = leg[4] * scalex + x4; // here last x4 was prior ending point
          y4 = leg[5] * scaley + y4; // here last y4 was prior ending point
          out(f3(x2 * k) + ' ' + f3((pageHeight - y2) * k) + ' ' + f3(x3 * k) + ' ' + f3((pageHeight - y3) * k) + ' ' + f3(x4 * k) + ' ' + f3((pageHeight - y4) * k) + ' c');
        }
      }

      if (closed) {
        out(' h');
      }

      // stroking / filling / both the path
      if (style !== null) {
        out(getStyle(style));
      }
      return this;
    };

    /**
     * Adds a rectangle to PDF
     *
     * @param {Number} x Coordinate (in units declared at inception of PDF document) against left edge of the page
     * @param {Number} y Coordinate (in units declared at inception of PDF document) against upper edge of the page
     * @param {Number} w Width (in units declared at inception of PDF document)
     * @param {Number} h Height (in units declared at inception of PDF document)
     * @param {String} style A string specifying the painting style or null.  Valid styles include: 'S' [default] - stroke, 'F' - fill,  and 'DF' (or 'FD') -  fill then stroke. A null value postpones setting the style so that a shape may be composed using multiple method calls. The last drawing method call used to define the shape should not have a null style argument.
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name rect
     */
    API.rect = function (x, y, w, h, style) {
      var op = getStyle(style);
      out([f2(x * k), f2((pageHeight - y) * k), f2(w * k), f2(-h * k), 're'].join(' '));

      if (style !== null) {
        out(getStyle(style));
      }

      return this;
    };

    /**
     * Adds a triangle to PDF
     *
     * @param {Number} x1 Coordinate (in units declared at inception of PDF document) against left edge of the page
     * @param {Number} y1 Coordinate (in units declared at inception of PDF document) against upper edge of the page
     * @param {Number} x2 Coordinate (in units declared at inception of PDF document) against left edge of the page
     * @param {Number} y2 Coordinate (in units declared at inception of PDF document) against upper edge of the page
     * @param {Number} x3 Coordinate (in units declared at inception of PDF document) against left edge of the page
     * @param {Number} y3 Coordinate (in units declared at inception of PDF document) against upper edge of the page
     * @param {String} style A string specifying the painting style or null.  Valid styles include: 'S' [default] - stroke, 'F' - fill,  and 'DF' (or 'FD') -  fill then stroke. A null value postpones setting the style so that a shape may be composed using multiple method calls. The last drawing method call used to define the shape should not have a null style argument.
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name triangle
     */
    API.triangle = function (x1, y1, x2, y2, x3, y3, style) {
      this.lines([[x2 - x1, y2 - y1], // vector to point 2
      [x3 - x2, y3 - y2], // vector to point 3
      [x1 - x3, y1 - y3] // closing vector back to point 1
      ], x1, y1, // start of path
      [1, 1], style, true);
      return this;
    };

    /**
     * Adds a rectangle with rounded corners to PDF
     *
     * @param {Number} x Coordinate (in units declared at inception of PDF document) against left edge of the page
     * @param {Number} y Coordinate (in units declared at inception of PDF document) against upper edge of the page
     * @param {Number} w Width (in units declared at inception of PDF document)
     * @param {Number} h Height (in units declared at inception of PDF document)
     * @param {Number} rx Radius along x axis (in units declared at inception of PDF document)
     * @param {Number} rx Radius along y axis (in units declared at inception of PDF document)
     * @param {String} style A string specifying the painting style or null.  Valid styles include: 'S' [default] - stroke, 'F' - fill,  and 'DF' (or 'FD') -  fill then stroke. A null value postpones setting the style so that a shape may be composed using multiple method calls. The last drawing method call used to define the shape should not have a null style argument.
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name roundedRect
     */
    API.roundedRect = function (x, y, w, h, rx, ry, style) {
      var MyArc = 4 / 3 * (Math.SQRT2 - 1);
      this.lines([[w - 2 * rx, 0], [rx * MyArc, 0, rx, ry - ry * MyArc, rx, ry], [0, h - 2 * ry], [0, ry * MyArc, -(rx * MyArc), ry, -rx, ry], [-w + 2 * rx, 0], [-(rx * MyArc), 0, -rx, -(ry * MyArc), -rx, -ry], [0, -h + 2 * ry], [0, -(ry * MyArc), rx * MyArc, -ry, rx, -ry]], x + rx, y, // start of path
      [1, 1], style);
      return this;
    };

    /**
     * Adds an ellipse to PDF
     *
     * @param {Number} x Coordinate (in units declared at inception of PDF document) against left edge of the page
     * @param {Number} y Coordinate (in units declared at inception of PDF document) against upper edge of the page
     * @param {Number} rx Radius along x axis (in units declared at inception of PDF document)
     * @param {Number} rx Radius along y axis (in units declared at inception of PDF document)
     * @param {String} style A string specifying the painting style or null.  Valid styles include: 'S' [default] - stroke, 'F' - fill,  and 'DF' (or 'FD') -  fill then stroke. A null value postpones setting the style so that a shape may be composed using multiple method calls. The last drawing method call used to define the shape should not have a null style argument.
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name ellipse
     */
    API.ellipse = function (x, y, rx, ry, style) {
      var lx = 4 / 3 * (Math.SQRT2 - 1) * rx,
          ly = 4 / 3 * (Math.SQRT2 - 1) * ry;

      out([f2((x + rx) * k), f2((pageHeight - y) * k), 'm', f2((x + rx) * k), f2((pageHeight - (y - ly)) * k), f2((x + lx) * k), f2((pageHeight - (y - ry)) * k), f2(x * k), f2((pageHeight - (y - ry)) * k), 'c'].join(' '));
      out([f2((x - lx) * k), f2((pageHeight - (y - ry)) * k), f2((x - rx) * k), f2((pageHeight - (y - ly)) * k), f2((x - rx) * k), f2((pageHeight - y) * k), 'c'].join(' '));
      out([f2((x - rx) * k), f2((pageHeight - (y + ly)) * k), f2((x - lx) * k), f2((pageHeight - (y + ry)) * k), f2(x * k), f2((pageHeight - (y + ry)) * k), 'c'].join(' '));
      out([f2((x + lx) * k), f2((pageHeight - (y + ry)) * k), f2((x + rx) * k), f2((pageHeight - (y + ly)) * k), f2((x + rx) * k), f2((pageHeight - y) * k), 'c'].join(' '));

      if (style !== null) {
        out(getStyle(style));
      }

      return this;
    };

    /**
     * Adds an circle to PDF
     *
     * @param {Number} x Coordinate (in units declared at inception of PDF document) against left edge of the page
     * @param {Number} y Coordinate (in units declared at inception of PDF document) against upper edge of the page
     * @param {Number} r Radius (in units declared at inception of PDF document)
     * @param {String} style A string specifying the painting style or null.  Valid styles include: 'S' [default] - stroke, 'F' - fill,  and 'DF' (or 'FD') -  fill then stroke. A null value postpones setting the style so that a shape may be composed using multiple method calls. The last drawing method call used to define the shape should not have a null style argument.
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name circle
     */
    API.circle = function (x, y, r, style) {
      return this.ellipse(x, y, r, r, style);
    };

    /**
     * Adds a properties to the PDF document
     *
     * @param {Object} A property_name-to-property_value object structure.
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name setProperties
     */
    API.setProperties = function (properties) {
      // copying only those properties we can render.
      for (var property in documentProperties) {
        if (documentProperties.hasOwnProperty(property) && properties[property]) {
          documentProperties[property] = properties[property];
        }
      }
      return this;
    };

    /**
     * Sets font size for upcoming text elements.
     *
     * @param {Number} size Font size in points.
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name setFontSize
     */
    API.setFontSize = function (size) {
      activeFontSize = size;
      return this;
    };

    /**
     * Sets text font face, variant for upcoming text elements.
     * See output of jsPDF.getFontList() for possible font names, styles.
     *
     * @param {String} fontName Font name or family. Example: "times"
     * @param {String} fontStyle Font style or variant. Example: "italic"
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name setFont
     */
    API.setFont = function (fontName, fontStyle) {
      activeFontKey = _getFont(fontName, fontStyle);
      // if font is not found, the above line blows up and we never go further
      return this;
    };

    /**
     * Switches font style or variant for upcoming text elements,
     * while keeping the font face or family same.
     * See output of jsPDF.getFontList() for possible font names, styles.
     *
     * @param {String} style Font style or variant. Example: "italic"
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name setFontStyle
     */
    API.setFontStyle = API.setFontType = function (style) {
      activeFontKey = _getFont(undefined, style);
      // if font is not found, the above line blows up and we never go further
      return this;
    };

    /**
     * Returns an object - a tree of fontName to fontStyle relationships available to
     * active PDF document.
     *
     * @public
     * @function
     * @returns {Object} Like {'times':['normal', 'italic', ... ], 'arial':['normal', 'bold', ... ], ... }
     * @methodOf jsPDF#
     * @name getFontList
     */
    API.getFontList = function () {
      // TODO: iterate over fonts array or return copy of fontmap instead in case more are ever added.
      var list = {},
          fontName,
          fontStyle,
          tmp;

      for (fontName in fontmap) {
        if (fontmap.hasOwnProperty(fontName)) {
          list[fontName] = tmp = [];
          for (fontStyle in fontmap[fontName]) {
            if (fontmap[fontName].hasOwnProperty(fontStyle)) {
              tmp.push(fontStyle);
            }
          }
        }
      }

      return list;
    };

    /**
     * Add a custom font.
     *
     * @param {String} Postscript name of the Font.  Example: "Menlo-Regular"
     * @param {String} Name of font-family from @font-face definition.  Example: "Menlo Regular"
     * @param {String} Font style.  Example: "normal"
     * @function
     * @returns the {fontKey} (same as the internal method)
     * @methodOf jsPDF#
     * @name addFont
     */
    API.addFont = function (postScriptName, fontName, fontStyle) {
      addFont(postScriptName, fontName, fontStyle, 'StandardEncoding');
    };

    /**
     * Sets line width for upcoming lines.
     *
     * @param {Number} width Line width (in units declared at inception of PDF document)
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name setLineWidth
     */
    API.setLineWidth = function (width) {
      out((width * k).toFixed(2) + ' w');
      return this;
    };

    /**
     * Sets the stroke color for upcoming elements.
     *
     * Depending on the number of arguments given, Gray, RGB, or CMYK
     * color space is implied.
     *
     * When only ch1 is given, "Gray" color space is implied and it
     * must be a value in the range from 0.00 (solid black) to to 1.00 (white)
     * if values are communicated as String types, or in range from 0 (black)
     * to 255 (white) if communicated as Number type.
     * The RGB-like 0-255 range is provided for backward compatibility.
     *
     * When only ch1,ch2,ch3 are given, "RGB" color space is implied and each
     * value must be in the range from 0.00 (minimum intensity) to to 1.00
     * (max intensity) if values are communicated as String types, or
     * from 0 (min intensity) to to 255 (max intensity) if values are communicated
     * as Number types.
     * The RGB-like 0-255 range is provided for backward compatibility.
     *
     * When ch1,ch2,ch3,ch4 are given, "CMYK" color space is implied and each
     * value must be a in the range from 0.00 (0% concentration) to to
     * 1.00 (100% concentration)
     *
     * Because JavaScript treats fixed point numbers badly (rounds to
     * floating point nearest to binary representation) it is highly advised to
     * communicate the fractional numbers as String types, not JavaScript Number type.
     *
     * @param {Number|String} ch1 Color channel value
     * @param {Number|String} ch2 Color channel value
     * @param {Number|String} ch3 Color channel value
     * @param {Number|String} ch4 Color channel value
     *
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name setDrawColor
     */
    API.setDrawColor = function (ch1, ch2, ch3, ch4) {
      var color;
      if (ch2 === undefined || ch4 === undefined && ch1 === ch2 === ch3) {
        // Gray color space.
        if (typeof ch1 === 'string') {
          color = ch1 + ' G';
        } else {
          color = f2(ch1 / 255) + ' G';
        }
      } else if (ch4 === undefined) {
        // RGB
        if (typeof ch1 === 'string') {
          color = [ch1, ch2, ch3, 'RG'].join(' ');
        } else {
          color = [f2(ch1 / 255), f2(ch2 / 255), f2(ch3 / 255), 'RG'].join(' ');
        }
      } else {
        // CMYK
        if (typeof ch1 === 'string') {
          color = [ch1, ch2, ch3, ch4, 'K'].join(' ');
        } else {
          color = [f2(ch1), f2(ch2), f2(ch3), f2(ch4), 'K'].join(' ');
        }
      }

      out(color);
      return this;
    };

    /**
     * Sets the fill color for upcoming elements.
     *
     * Depending on the number of arguments given, Gray, RGB, or CMYK
     * color space is implied.
     *
     * When only ch1 is given, "Gray" color space is implied and it
     * must be a value in the range from 0.00 (solid black) to to 1.00 (white)
     * if values are communicated as String types, or in range from 0 (black)
     * to 255 (white) if communicated as Number type.
     * The RGB-like 0-255 range is provided for backward compatibility.
     *
     * When only ch1,ch2,ch3 are given, "RGB" color space is implied and each
     * value must be in the range from 0.00 (minimum intensity) to to 1.00
     * (max intensity) if values are communicated as String types, or
     * from 0 (min intensity) to to 255 (max intensity) if values are communicated
     * as Number types.
     * The RGB-like 0-255 range is provided for backward compatibility.
     *
     * When ch1,ch2,ch3,ch4 are given, "CMYK" color space is implied and each
     * value must be a in the range from 0.00 (0% concentration) to to
     * 1.00 (100% concentration)
     *
     * Because JavaScript treats fixed point numbers badly (rounds to
     * floating point nearest to binary representation) it is highly advised to
     * communicate the fractional numbers as String types, not JavaScript Number type.
     *
     * @param {Number|String} ch1 Color channel value
     * @param {Number|String} ch2 Color channel value
     * @param {Number|String} ch3 Color channel value
     * @param {Number|String} ch4 Color channel value
     *
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name setFillColor
     */
    API.setFillColor = function (ch1, ch2, ch3, ch4) {
      var color;

      if (ch2 === undefined || ch4 === undefined && ch1 === ch2 === ch3) {
        // Gray color space.
        if (typeof ch1 === 'string') {
          color = ch1 + ' g';
        } else {
          color = f2(ch1 / 255) + ' g';
        }
      } else if (ch4 === undefined || (typeof ch4 === 'undefined' ? 'undefined' : _typeof(ch4)) === 'object') {
        // RGB
        if (typeof ch1 === 'string') {
          color = [ch1, ch2, ch3, 'rg'].join(' ');
        } else {
          color = [f2(ch1 / 255), f2(ch2 / 255), f2(ch3 / 255), 'rg'].join(' ');
        }
        if (ch4 && ch4.a === 0) {
          //TODO Implement transparency.
          //WORKAROUND use white for now
          color = ['255', '255', '255', 'rg'].join(' ');
        }
      } else {
        // CMYK
        if (typeof ch1 === 'string') {
          color = [ch1, ch2, ch3, ch4, 'k'].join(' ');
        } else {
          color = [f2(ch1), f2(ch2), f2(ch3), f2(ch4), 'k'].join(' ');
        }
      }

      out(color);
      return this;
    };

    /**
     * Sets the text color for upcoming elements.
     * If only one, first argument is given,
     * treats the value as gray-scale color value.
     *
     * @param {Number} r Red channel color value in range 0-255 or {String} r color value in hexadecimal, example: '#FFFFFF'
     * @param {Number} g Green channel color value in range 0-255
     * @param {Number} b Blue channel color value in range 0-255
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name setTextColor
     */
    API.setTextColor = function (r, g, b) {
      if (typeof r === 'string' && /^#[0-9A-Fa-f]{6}$/.test(r)) {
        var hex = parseInt(r.substr(1), 16);
        r = hex >> 16 & 255;
        g = hex >> 8 & 255;
        b = hex & 255;
      }

      if (r === 0 && g === 0 && b === 0 || typeof g === 'undefined') {
        textColor = f3(r / 255) + ' g';
      } else {
        textColor = [f3(r / 255), f3(g / 255), f3(b / 255), 'rg'].join(' ');
      }
      return this;
    };

    /**
     * Is an Object providing a mapping from human-readable to
     * integer flag values designating the varieties of line cap
     * and join styles.
     *
     * @returns {Object}
     * @fieldOf jsPDF#
     * @name CapJoinStyles
     */
    API.CapJoinStyles = {
      0: 0,
      'butt': 0,
      'but': 0,
      'miter': 0,
      1: 1,
      'round': 1,
      'rounded': 1,
      'circle': 1,
      2: 2,
      'projecting': 2,
      'project': 2,
      'square': 2,
      'bevel': 2
    };

    /**
     * Sets the line cap styles
     * See {jsPDF.CapJoinStyles} for variants
     *
     * @param {String|Number} style A string or number identifying the type of line cap
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name setLineCap
     */
    API.setLineCap = function (style) {
      var id = this.CapJoinStyles[style];
      if (id === undefined) {
        throw new Error("Line cap style of '" + style + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
      }
      lineCapID = id;
      out(id + ' J');

      return this;
    };

    /**
     * Sets the line join styles
     * See {jsPDF.CapJoinStyles} for variants
     *
     * @param {String|Number} style A string or number identifying the type of line join
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name setLineJoin
     */
    API.setLineJoin = function (style) {
      var id = this.CapJoinStyles[style];
      if (id === undefined) {
        throw new Error("Line join style of '" + style + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
      }
      lineJoinID = id;
      out(id + ' j');

      return this;
    };

    // Output is both an internal (for plugins) and external function
    API.output = _output;

    /**
     * Saves as PDF document. An alias of jsPDF.output('save', 'filename.pdf')
     * @param  {String} filename The filename including extension.
     *
     * @function
     * @returns {jsPDF}
     * @methodOf jsPDF#
     * @name save
     */
    API.save = function (filename) {
      API.output('save', filename);
    };

    // applying plugins (more methods) ON TOP of built-in API.
    // this is intentional as we allow plugins to override
    // built-ins
    for (var plugin in jsPDF.API) {
      if (jsPDF.API.hasOwnProperty(plugin)) {
        if (plugin === 'events' && jsPDF.API.events.length) {
          (function (events, newEvents) {

            // jsPDF.API.events is a JS Array of Arrays
            // where each Array is a pair of event name, handler
            // Events were added by plugins to the jsPDF instantiator.
            // These are always added to the new instance and some ran
            // during instantiation.
            var eventname, handler_and_args, i;

            for (i = newEvents.length - 1; i !== -1; i--) {
              // subscribe takes 3 args: 'topic', function, runonce_flag
              // if undefined, runonce is false.
              // users can attach callback directly,
              // or they can attach an array with [callback, runonce_flag]
              // that's what the "apply" magic is for below.
              eventname = newEvents[i][0];
              handler_and_args = newEvents[i][1];
              events.subscribe.apply(events, [eventname].concat(typeof handler_and_args === 'function' ? [handler_and_args] : handler_and_args));
            }
          })(events, jsPDF.API.events);
        } else {
          API[plugin] = jsPDF.API[plugin];
        }
      }
    }

    //////////////////////////////////////////////////////
    // continuing initialization of jsPDF Document object
    //////////////////////////////////////////////////////
    // Add the first page automatically
    addFonts();
    activeFontKey = 'F1';
    _addPage(format, orientation);

    events.publish('initialized');
    return API;
  }

  /**
   * jsPDF.API is a STATIC property of jsPDF class.
   * jsPDF.API is an object you can add methods and properties to.
   * The methods / properties you add will show up in new jsPDF objects.
   *
   * One property is prepopulated. It is the 'events' Object. Plugin authors can add topics,
   * callbacks to this object. These will be reassigned to all new instances of jsPDF.
   * Examples:
   * jsPDF.API.events['initialized'] = function(){ 'this' is API object }
   * jsPDF.API.events['addFont'] = function(added_font_object){ 'this' is API object }
   *
   * @static
   * @public
   * @memberOf jsPDF
   * @name API
   *
   * @example
   * jsPDF.API.mymethod = function(){
   *   // 'this' will be ref to internal API object. see jsPDF source
   *   // , so you can refer to built-in methods like so:
   *   //     this.line(....)
   *   //     this.text(....)
   * }
   * var pdfdoc = new jsPDF()
   * pdfdoc.mymethod() // <- !!!!!!
   */
  jsPDF.API = {
    events: []
  };
  jsPDF.version = "1.x-master";

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return jsPDF;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsPDF;
  } else {
    global.jsPDF = jsPDF;
  }
  return jsPDF;
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || undefined);


/**
 * jsPDF AcroForm Plugin
 * Copyright (c) 2016 Alexander Weidt, https://github.com/BiggA94
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

(window.AcroForm = function (jsPDFAPI) {
    'use strict';

    var AcroForm = window.AcroForm;

    AcroForm.scale = function (x) {
        return x * (acroformPlugin.internal.scaleFactor / 1); // 1 = (96 / 72)
    };
    AcroForm.antiScale = function (x) {
        return 1 / acroformPlugin.internal.scaleFactor * x;
    };

    var acroformPlugin = {
        fields: [],
        xForms: [],
        /**
         * acroFormDictionaryRoot contains information about the AcroForm Dictionary
         * 0: The Event-Token, the AcroFormDictionaryCallback has
         * 1: The Object ID of the Root
         */
        acroFormDictionaryRoot: null,
        /**
         * After the PDF gets evaluated, the reference to the root has to be reset,
         * this indicates, whether the root has already been printed out
         */
        printedOut: false,
        internal: null
    };

    jsPDF.API.acroformPlugin = acroformPlugin;

    var annotReferenceCallback = function annotReferenceCallback() {
        for (var i in this.acroformPlugin.acroFormDictionaryRoot.Fields) {
            var formObject = this.acroformPlugin.acroFormDictionaryRoot.Fields[i];
            // add Annot Reference!
            if (formObject.hasAnnotation) {
                // If theres an Annotation Widget in the Form Object, put the Reference in the /Annot array
                createAnnotationReference.call(this, formObject);
            }
        }
    };

    var createAcroForm = function createAcroForm() {
        if (this.acroformPlugin.acroFormDictionaryRoot) {
            //return;
            throw new Error("Exception while creating AcroformDictionary");
        }

        // The Object Number of the AcroForm Dictionary
        this.acroformPlugin.acroFormDictionaryRoot = new AcroForm.AcroFormDictionary();

        this.acroformPlugin.internal = this.internal;

        // add Callback for creating the AcroForm Dictionary
        this.acroformPlugin.acroFormDictionaryRoot._eventID = this.internal.events.subscribe('postPutResources', AcroFormDictionaryCallback);

        this.internal.events.subscribe('buildDocument', annotReferenceCallback); //buildDocument

        // Register event, that is triggered when the DocumentCatalog is written, in order to add /AcroForm
        this.internal.events.subscribe('putCatalog', putCatalogCallback);

        // Register event, that creates all Fields
        this.internal.events.subscribe('postPutPages', createFieldCallback);
    };

    /**
     * Create the Reference to the widgetAnnotation, so that it gets referenced in the Annot[] int the+
     * (Requires the Annotation Plugin)
     */
    var createAnnotationReference = function createAnnotationReference(object) {
        var options = {
            type: 'reference',
            object: object
        };
        jsPDF.API.annotationPlugin.annotations[this.internal.getPageInfo(object.page).pageNumber].push(options);
    };

    var putForm = function putForm(formObject) {
        if (this.acroformPlugin.printedOut) {
            this.acroformPlugin.printedOut = false;
            this.acroformPlugin.acroFormDictionaryRoot = null;
        }
        if (!this.acroformPlugin.acroFormDictionaryRoot) {
            createAcroForm.call(this);
        }
        this.acroformPlugin.acroFormDictionaryRoot.Fields.push(formObject);
    };

    // Callbacks

    var putCatalogCallback = function putCatalogCallback() {
        //Put reference to AcroForm to DocumentCatalog
        if (typeof this.acroformPlugin.acroFormDictionaryRoot != 'undefined') {
            // for safety, shouldn't normally be the case
            this.internal.write('/AcroForm ' + this.acroformPlugin.acroFormDictionaryRoot.objId + ' ' + 0 + ' R');
        } else {
            console.log('Root missing...');
        }
    };

    /**
     * Adds /Acroform X 0 R to Document Catalog,
     * and creates the AcroForm Dictionary
     */
    var AcroFormDictionaryCallback = function AcroFormDictionaryCallback() {
        // Remove event
        this.internal.events.unsubscribe(this.acroformPlugin.acroFormDictionaryRoot._eventID);

        delete this.acroformPlugin.acroFormDictionaryRoot._eventID;

        this.acroformPlugin.printedOut = true;
    };

    /**
     * Creates the single Fields and writes them into the Document
     *
     * If fieldArray is set, use the fields that are inside it instead of the fields from the AcroRoot
     * (for the FormXObjects...)
     */
    var createFieldCallback = function createFieldCallback(fieldArray) {
        var standardFields = !fieldArray;

        if (!fieldArray) {
            // in case there is no fieldArray specified, we want to print out the Fields of the AcroForm
            // Print out Root
            this.internal.newObjectDeferredBegin(this.acroformPlugin.acroFormDictionaryRoot.objId);
            this.internal.out(this.acroformPlugin.acroFormDictionaryRoot.getString());
        }

        var fieldArray = fieldArray || this.acroformPlugin.acroFormDictionaryRoot.Kids;

        for (var i in fieldArray) {
            var key = i;
            var form = fieldArray[i];

            var oldRect = form.Rect;

            if (form.Rect) {
                form.Rect = AcroForm.internal.calculateCoordinates.call(this, form.Rect);
            }

            // Start Writing the Object
            this.internal.newObjectDeferredBegin(form.objId);

            var content = "";
            content += form.objId + " 0 obj\n";

            content += "<<\n" + form.getContent();

            form.Rect = oldRect;

            if (form.hasAppearanceStream && !form.appearanceStreamContent) {
                // Calculate Appearance
                var appearance = AcroForm.internal.calculateAppearanceStream.call(this, form);
                content += "/AP << /N " + appearance + " >>\n";

                this.acroformPlugin.xForms.push(appearance);
            }

            // Assume AppearanceStreamContent is a Array with N,R,D (at least one of them!)
            if (form.appearanceStreamContent) {
                content += "/AP << ";
                // Iterate over N,R and D
                for (var k in form.appearanceStreamContent) {
                    var value = form.appearanceStreamContent[k];
                    content += "/" + k + " ";
                    content += "<< ";
                    if (Object.keys(value).length >= 1 || Array.isArray(value)) {
                        // appearanceStream is an Array or Object!
                        for (var i in value) {
                            var obj = value[i];
                            if (typeof obj === 'function') {
                                // if Function is referenced, call it in order to get the FormXObject
                                obj = obj.call(this, form);
                            }
                            content += "/" + i + " " + obj + " ";

                            // In case the XForm is already used, e.g. OffState of CheckBoxes, don't add it
                            if (!(this.acroformPlugin.xForms.indexOf(obj) >= 0)) this.acroformPlugin.xForms.push(obj);
                        }
                    } else {
                        var obj = value;
                        if (typeof obj === 'function') {
                            // if Function is referenced, call it in order to get the FormXObject
                            obj = obj.call(this, form);
                        }
                        content += "/" + i + " " + obj + " \n";
                        if (!(this.acroformPlugin.xForms.indexOf(obj) >= 0)) this.acroformPlugin.xForms.push(obj);
                    }
                    content += " >>\n";
                }

                // appearance stream is a normal Object..
                content += ">>\n";
            }

            content += ">>\nendobj\n";

            this.internal.out(content);
        }
        if (standardFields) {
            createXFormObjectCallback.call(this, this.acroformPlugin.xForms);
        }
    };

    var createXFormObjectCallback = function createXFormObjectCallback(fieldArray) {
        for (var i in fieldArray) {
            var key = i;
            var form = fieldArray[i];
            // Start Writing the Object
            this.internal.newObjectDeferredBegin(form && form.objId);

            var content = "";
            content += form ? form.getString() : '';
            this.internal.out(content);

            delete fieldArray[key];
        }
    };

    // Public:

    jsPDFAPI.addField = function (fieldObject) {
        //var opt = parseOptions(fieldObject);
        if (fieldObject instanceof AcroForm.TextField) {
            addTextField.call(this, fieldObject);
        } else if (fieldObject instanceof AcroForm.ChoiceField) {
            addChoiceField.call(this, fieldObject);
        } else if (fieldObject instanceof AcroForm.Button) {
            addButton.call(this, fieldObject);
        } else if (fieldObject instanceof AcroForm.ChildClass) {
            putForm.call(this, fieldObject);
        } else if (fieldObject) {
            // try to put..
            putForm.call(this, fieldObject);
        }
        fieldObject.page = this.acroformPlugin.internal.getCurrentPageInfo().pageNumber;
        return this;
    };

    // ############### sort in:

    /**
     * Button
     * FT = Btn
     */
    var addButton = function addButton(options) {
        var options = options || new AcroForm.Field();

        options.FT = '/Btn';

        /**
         * Calculating the Ff entry:
         *
         * The Ff entry contains flags, that have to be set bitwise
         * In the Following the number in the Comment is the BitPosition
         */
        var flags = options.Ff || 0;

        // 17, Pushbutton
        if (options.pushbutton) {
            // Options.pushbutton should be 1 or 0
            flags = AcroForm.internal.setBitPosition(flags, 17);
            delete options.pushbutton;
        }

        //16, Radio
        if (options.radio) {
            //flags = options.Ff | options.radio << 15;
            flags = AcroForm.internal.setBitPosition(flags, 16);
            delete options.radio;
        }

        // 15, NoToggleToOff (Radio buttons only
        if (options.noToggleToOff) {
            //flags = options.Ff | options.noToggleToOff << 14;
            flags = AcroForm.internal.setBitPosition(flags, 15);
            //delete options.noToggleToOff;
        }

        // In case, there is no Flag set, it is a check-box
        options.Ff = flags;

        putForm.call(this, options);
    };

    var addTextField = function addTextField(options) {
        var options = options || new AcroForm.Field();

        options.FT = '/Tx';

        /**
         * Calculating the Ff entry:
         *
         * The Ff entry contains flags, that have to be set bitwise
         * In the Following the number in the Comment is the BitPosition
         */

        var flags = options.Ff || 0;

        // 13, multiline
        if (options.multiline) {
            // Set Flag
            flags = flags | 1 << 12;
            // Remove multiline from FieldObject
            //delete options.multiline;
        }

        // 14, Password
        if (options.password) {
            flags = flags | 1 << 13;
            //delete options.password;
        }

        // 21, FileSelect, PDF 1.4...
        if (options.fileSelect) {
            flags = flags | 1 << 20;
            //delete options.fileSelect;
        }

        // 23, DoNotSpellCheck, PDF 1.4...
        if (options.doNotSpellCheck) {
            flags = flags | 1 << 22;
            //delete options.doNotSpellCheck;
        }

        // 24, DoNotScroll, PDF 1.4...
        if (options.doNotScroll) {
            flags = flags | 1 << 23;
            //delete options.doNotScroll;
        }

        options.Ff = options.Ff || flags;

        // Add field
        putForm.call(this, options);
    };

    var addChoiceField = function addChoiceField(opt) {
        var options = opt || new AcroForm.Field();

        options.FT = '/Ch';

        /**
         * Calculating the Ff entry:
         *
         * The Ff entry contains flags, that have to be set bitwise
         * In the Following the number in the Comment is the BitPosition
         */

        var flags = options.Ff || 0;

        // 18, Combo (If not set, the choiceField is a listBox!!)
        if (options.combo) {
            // Set Flag
            flags = AcroForm.internal.setBitPosition(flags, 18);
            // Remove combo from FieldObject
            delete options.combo;
        }

        // 19, Edit
        if (options.edit) {
            flags = AcroForm.internal.setBitPosition(flags, 19);
            delete options.edit;
        }

        // 20, Sort
        if (options.sort) {
            flags = AcroForm.internal.setBitPosition(flags, 20);
            delete options.sort;
        }

        // 22, MultiSelect (PDF 1.4)
        if (options.multiSelect && this.internal.getPDFVersion() >= 1.4) {
            flags = AcroForm.internal.setBitPosition(flags, 22);
            delete options.multiSelect;
        }

        // 23, DoNotSpellCheck (PDF 1.4)
        if (options.doNotSpellCheck && this.internal.getPDFVersion() >= 1.4) {
            flags = AcroForm.internal.setBitPosition(flags, 23);
            delete options.doNotSpellCheck;
        }

        options.Ff = flags;

        //options.hasAnnotation = true;

        // Add field
        putForm.call(this, options);
    };
})(jsPDF.API);

var AcroForm = window.AcroForm;

AcroForm.internal = {};

AcroForm.createFormXObject = function (formObject) {
    var xobj = new AcroForm.FormXObject();
    var height = AcroForm.Appearance.internal.getHeight(formObject) || 0;
    var width = AcroForm.Appearance.internal.getWidth(formObject) || 0;
    xobj.BBox = [0, 0, width, height];
    return xobj;
};

// Contains Methods for creating standard appearances
AcroForm.Appearance = {
    CheckBox: {
        createAppearanceStream: function createAppearanceStream() {
            var appearance = {
                N: {
                    On: AcroForm.Appearance.CheckBox.YesNormal
                },
                D: {
                    On: AcroForm.Appearance.CheckBox.YesPushDown,
                    Off: AcroForm.Appearance.CheckBox.OffPushDown
                }
            };

            return appearance;
        },
        /**
         * If any other icons are needed, the number between the brackets can be changed
         * @returns {string}
         */
        createMK: function createMK() {
            // 3-> Hook
            return "<< /CA (3)>>";
        },
        /**
         * Returns the standard On Appearance for a CheckBox
         * @returns {AcroForm.FormXObject}
         */
        YesPushDown: function YesPushDown(formObject) {
            var xobj = AcroForm.createFormXObject(formObject);
            var stream = "";
            // F13 is ZapfDingbats (Symbolic)
            formObject.Q = 1; // set text-alignment as centered
            var calcRes = AcroForm.internal.calculateX(formObject, "3", "ZapfDingbats", 50);
            stream += "0.749023 g\n\
             0 0 " + AcroForm.Appearance.internal.getWidth(formObject) + " " + AcroForm.Appearance.internal.getHeight(formObject) + " re\n\
             f\n\
             BMC\n\
             q\n\
             0 0 1 rg\n\
             /F13 " + calcRes.fontSize + " Tf 0 g\n\
             BT\n";
            stream += calcRes.text;
            stream += "ET\n\
             Q\n\
             EMC\n";
            xobj.stream = stream;
            return xobj;
        },

        YesNormal: function YesNormal(formObject) {
            var xobj = AcroForm.createFormXObject(formObject);
            var stream = "";
            formObject.Q = 1; // set text-alignment as centered
            var calcRes = AcroForm.internal.calculateX(formObject, "3", "ZapfDingbats", AcroForm.Appearance.internal.getHeight(formObject) * 0.9);
            stream += "1 g\n\
0 0 " + AcroForm.Appearance.internal.getWidth(formObject) + " " + AcroForm.Appearance.internal.getHeight(formObject) + " re\n\
f\n\
q\n\
0 0 1 rg\n\
0 0 " + (AcroForm.Appearance.internal.getWidth(formObject) - 1) + " " + (AcroForm.Appearance.internal.getHeight(formObject) - 1) + " re\n\
W\n\
n\n\
0 g\n\
BT\n\
/F13 " + calcRes.fontSize + " Tf 0 g\n";
            stream += calcRes.text;
            stream += "ET\n\
             Q\n";
            xobj.stream = stream;
            return xobj;
        },

        /**
         * Returns the standard Off Appearance for a CheckBox
         * @returns {AcroForm.FormXObject}
         */
        OffPushDown: function OffPushDown(formObject) {
            var xobj = AcroForm.createFormXObject(formObject);
            var stream = "";
            stream += "0.749023 g\n\
            0 0 " + AcroForm.Appearance.internal.getWidth(formObject) + " " + AcroForm.Appearance.internal.getHeight(formObject) + " re\n\
            f\n";
            xobj.stream = stream;
            return xobj;
        }
    },

    RadioButton: {
        Circle: {
            createAppearanceStream: function createAppearanceStream(name) {
                var appearanceStreamContent = {
                    D: {
                        'Off': AcroForm.Appearance.RadioButton.Circle.OffPushDown
                    },
                    N: {}
                };
                appearanceStreamContent.N[name] = AcroForm.Appearance.RadioButton.Circle.YesNormal;
                appearanceStreamContent.D[name] = AcroForm.Appearance.RadioButton.Circle.YesPushDown;
                return appearanceStreamContent;
            },
            createMK: function createMK() {
                return "<< /CA (l)>>";
            },

            YesNormal: function YesNormal(formObject) {
                var xobj = AcroForm.createFormXObject(formObject);
                var stream = "";
                // Make the Radius of the Circle relative to min(height, width) of formObject
                var DotRadius = AcroForm.Appearance.internal.getWidth(formObject) <= AcroForm.Appearance.internal.getHeight(formObject) ? AcroForm.Appearance.internal.getWidth(formObject) / 4 : AcroForm.Appearance.internal.getHeight(formObject) / 4;
                // The Borderpadding...
                DotRadius *= 0.9;
                var c = AcroForm.Appearance.internal.Bezier_C;
                /*
                 The Following is a Circle created with Bezier-Curves.
                 */
                stream += "q\n\
1 0 0 1 " + AcroForm.Appearance.internal.getWidth(formObject) / 2 + " " + AcroForm.Appearance.internal.getHeight(formObject) / 2 + " cm\n\
" + DotRadius + " 0 m\n\
" + DotRadius + " " + DotRadius * c + " " + DotRadius * c + " " + DotRadius + " 0 " + DotRadius + " c\n\
-" + DotRadius * c + " " + DotRadius + " -" + DotRadius + " " + DotRadius * c + " -" + DotRadius + " 0 c\n\
-" + DotRadius + " -" + DotRadius * c + " -" + DotRadius * c + " -" + DotRadius + " 0 -" + DotRadius + " c\n\
" + DotRadius * c + " -" + DotRadius + " " + DotRadius + " -" + DotRadius * c + " " + DotRadius + " 0 c\n\
f\n\
Q\n";
                xobj.stream = stream;
                return xobj;
            },
            YesPushDown: function YesPushDown(formObject) {
                var xobj = AcroForm.createFormXObject(formObject);
                var stream = "";
                var DotRadius = AcroForm.Appearance.internal.getWidth(formObject) <= AcroForm.Appearance.internal.getHeight(formObject) ? AcroForm.Appearance.internal.getWidth(formObject) / 4 : AcroForm.Appearance.internal.getHeight(formObject) / 4;
                // The Borderpadding...
                DotRadius *= 0.9;
                // Save results for later use; no need to waste processor ticks on doing math
                var k = DotRadius * 2;
                // var c = AcroForm.Appearance.internal.Bezier_C;
                var kc = k * AcroForm.Appearance.internal.Bezier_C;
                var dc = DotRadius * AcroForm.Appearance.internal.Bezier_C;
                //                 stream += "0.749023 g\n\
                //             q\n\
                //           1 0 0 1 " + AcroForm.Appearance.internal.getWidth(formObject) / 2 + " " + AcroForm.Appearance.internal.getHeight(formObject) / 2 + " cm\n\
                // " + DotRadius * 2 + " 0 m\n\
                // " + DotRadius * 2 + " " + DotRadius * 2 * c + " " + DotRadius * 2 * c + " " + DotRadius * 2 + " 0 " + DotRadius * 2 + " c\n\
                // -" + DotRadius * 2 * c + " " + DotRadius * 2 + " -" + DotRadius * 2 + " " + DotRadius * 2 * c + " -" + DotRadius * 2 + " 0 c\n\
                // -" + DotRadius * 2 + " -" + DotRadius * 2 * c + " -" + DotRadius * 2 * c + " -" + DotRadius * 2 + " 0 -" + DotRadius * 2 + " c\n\
                // " + DotRadius * 2 * c + " -" + DotRadius * 2 + " " + DotRadius * 2 + " -" + DotRadius * 2 * c + " " + DotRadius * 2 + " 0 c\n\
                //             f\n\
                //             Q\n\
                //             0 g\n\
                //             q\n\
                //             1 0 0 1 " + AcroForm.Appearance.internal.getWidth(formObject) / 2 + " " + AcroForm.Appearance.internal.getHeight(formObject) / 2 + " cm\n\
                // " + DotRadius + " 0 m\n\
                // " + DotRadius + " " + DotRadius * c + " " + DotRadius * c + " " + DotRadius + " 0 " + DotRadius + " c\n\
                // -" + DotRadius * c + " " + DotRadius + " -" + DotRadius + " " + DotRadius * c + " -" + DotRadius + " 0 c\n\
                // -" + DotRadius + " -" + DotRadius * c + " -" + DotRadius * c + " -" + DotRadius + " 0 -" + DotRadius + " c\n\
                // " + DotRadius * c + " -" + DotRadius + " " + DotRadius + " -" + DotRadius * c + " " + DotRadius + " 0 c\n\
                //             f\n\
                //             Q\n";

                //  FASTER VERSION with less processor ticks spent on math operations
                stream += "0.749023 g\n\
            q\n\
           1 0 0 1 " + AcroForm.Appearance.internal.getWidth(formObject) / 2 + " " + AcroForm.Appearance.internal.getHeight(formObject) / 2 + " cm\n\
" + k + " 0 m\n\
" + k + " " + kc + " " + kc + " " + k + " 0 " + k + " c\n\
-" + kc + " " + k + " -" + k + " " + kc + " -" + k + " 0 c\n\
-" + k + " -" + kc + " -" + kc + " -" + k + " 0 -" + k + " c\n\
" + kc + " -" + k + " " + k + " -" + kc + " " + k + " 0 c\n\
            f\n\
            Q\n\
            0 g\n\
            q\n\
            1 0 0 1 " + AcroForm.Appearance.internal.getWidth(formObject) / 2 + " " + AcroForm.Appearance.internal.getHeight(formObject) / 2 + " cm\n\
" + DotRadius + " 0 m\n\
" + DotRadius + " " + dc + " " + dc + " " + DotRadius + " 0 " + DotRadius + " c\n\
-" + dc + " " + DotRadius + " -" + DotRadius + " " + dc + " -" + DotRadius + " 0 c\n\
-" + DotRadius + " -" + dc + " -" + dc + " -" + DotRadius + " 0 -" + DotRadius + " c\n\
" + dc + " -" + DotRadius + " " + DotRadius + " -" + dc + " " + DotRadius + " 0 c\n\
            f\n\
            Q\n";
                xobj.stream = stream;
                return xobj;
            },
            OffPushDown: function OffPushDown(formObject) {
                var xobj = AcroForm.createFormXObject(formObject);
                var stream = "";
                var DotRadius = AcroForm.Appearance.internal.getWidth(formObject) <= AcroForm.Appearance.internal.getHeight(formObject) ? AcroForm.Appearance.internal.getWidth(formObject) / 4 : AcroForm.Appearance.internal.getHeight(formObject) / 4;
                // The Borderpadding...
                DotRadius *= 0.9;
                // Save results for later use; no need to waste processor ticks on doing math
                var k = DotRadius * 2;
                // var c = AcroForm.Appearance.internal.Bezier_C;
                var kc = k * AcroForm.Appearance.internal.Bezier_C;
                //                 stream += "0.749023 g\n\
                //             q\n\
                //  1 0 0 1 " + AcroForm.Appearance.internal.getWidth(formObject) / 2 + " " + AcroForm.Appearance.internal.getHeight(formObject) / 2 + " cm\n\
                // " + DotRadius * 2 + " 0 m\n\
                // " + DotRadius * 2 + " " + DotRadius * 2 * c + " " + DotRadius * 2 * c + " " + DotRadius * 2 + " 0 " + DotRadius * 2 + " c\n\
                // -" + DotRadius * 2 * c + " " + DotRadius * 2 + " -" + DotRadius * 2 + " " + DotRadius * 2 * c + " -" + DotRadius * 2 + " 0 c\n\
                // -" + DotRadius * 2 + " -" + DotRadius * 2 * c + " -" + DotRadius * 2 * c + " -" + DotRadius * 2 + " 0 -" + DotRadius * 2 + " c\n\
                // " + DotRadius * 2 * c + " -" + DotRadius * 2 + " " + DotRadius * 2 + " -" + DotRadius * 2 * c + " " + DotRadius * 2 + " 0 c\n\
                //             f\n\
                //             Q\n";

                //  FASTER VERSION with less processor ticks spent on math operations
                stream += "0.749023 g\n\
            q\n\
 1 0 0 1 " + AcroForm.Appearance.internal.getWidth(formObject) / 2 + " " + AcroForm.Appearance.internal.getHeight(formObject) / 2 + " cm\n\
" + k + " 0 m\n\
" + k + " " + kc + " " + kc + " " + k + " 0 " + k + " c\n\
-" + kc + " " + k + " -" + k + " " + kc + " -" + k + " 0 c\n\
-" + k + " -" + kc + " -" + kc + " -" + k + " 0 -" + k + " c\n\
" + kc + " -" + k + " " + k + " -" + kc + " " + k + " 0 c\n\
            f\n\
            Q\n";
                xobj.stream = stream;
                return xobj;
            }
        },

        Cross: {
            /**
             * Creates the Actual AppearanceDictionary-References
             * @param name
             * @returns
             */
            createAppearanceStream: function createAppearanceStream(name) {
                var appearanceStreamContent = {
                    D: {
                        'Off': AcroForm.Appearance.RadioButton.Cross.OffPushDown
                    },
                    N: {}
                };
                appearanceStreamContent.N[name] = AcroForm.Appearance.RadioButton.Cross.YesNormal;
                appearanceStreamContent.D[name] = AcroForm.Appearance.RadioButton.Cross.YesPushDown;
                return appearanceStreamContent;
            },
            createMK: function createMK() {
                return "<< /CA (8)>>";
            },

            YesNormal: function YesNormal(formObject) {
                var xobj = AcroForm.createFormXObject(formObject);
                var stream = "";
                var cross = AcroForm.Appearance.internal.calculateCross(formObject);
                stream += "q\n\
            1 1 " + (AcroForm.Appearance.internal.getWidth(formObject) - 2) + " " + (AcroForm.Appearance.internal.getHeight(formObject) - 2) + " re\n\
            W\n\
            n\n\
            " + cross.x1.x + " " + cross.x1.y + " m\n\
            " + cross.x2.x + " " + cross.x2.y + " l\n\
            " + cross.x4.x + " " + cross.x4.y + " m\n\
            " + cross.x3.x + " " + cross.x3.y + " l\n\
            s\n\
            Q\n";
                xobj.stream = stream;
                return xobj;
            },
            YesPushDown: function YesPushDown(formObject) {
                var xobj = AcroForm.createFormXObject(formObject);
                var cross = AcroForm.Appearance.internal.calculateCross(formObject);
                var stream = "";
                stream += "0.749023 g\n\
            0 0 " + AcroForm.Appearance.internal.getWidth(formObject) + " " + AcroForm.Appearance.internal.getHeight(formObject) + " re\n\
            f\n\
            q\n\
            1 1 " + (AcroForm.Appearance.internal.getWidth(formObject) - 2) + " " + (AcroForm.Appearance.internal.getHeight(formObject) - 2) + " re\n\
            W\n\
            n\n\
            " + cross.x1.x + " " + cross.x1.y + " m\n\
            " + cross.x2.x + " " + cross.x2.y + " l\n\
            " + cross.x4.x + " " + cross.x4.y + " m\n\
            " + cross.x3.x + " " + cross.x3.y + " l\n\
            s\n\
            Q\n";
                xobj.stream = stream;
                return xobj;
            },
            OffPushDown: function OffPushDown(formObject) {
                var xobj = AcroForm.createFormXObject(formObject);
                var stream = "";
                stream += "0.749023 g\n\
            0 0 " + AcroForm.Appearance.internal.getWidth(formObject) + " " + AcroForm.Appearance.internal.getHeight(formObject) + " re\n\
            f\n";
                xobj.stream = stream;
                return xobj;
            }
        }
    },

    /**
     * Returns the standard Appearance
     * @returns {AcroForm.FormXObject}
     */
    createDefaultAppearanceStream: function createDefaultAppearanceStream(formObject) {
        var stream = "";
        // Set Helvetica to Standard Font (size: auto)
        // Color: Black
        stream += "/Helv 0 Tf 0 g";
        return stream;
    }
};

AcroForm.Appearance.internal = {
    Bezier_C: 0.551915024494,

    calculateCross: function calculateCross(formObject) {
        var min = function min(x, y) {
            return x > y ? y : x;
        };

        var width = AcroForm.Appearance.internal.getWidth(formObject);
        var height = AcroForm.Appearance.internal.getHeight(formObject);
        var a = min(width, height);
        var crossSize = a;
        var borderPadding = 2; // The Padding in px


        var cross = {
            x1: { // upperLeft
                x: (width - a) / 2,
                y: (height - a) / 2 + a },
            x2: { // lowerRight
                x: (width - a) / 2 + a,
                y: (height - a) / 2 //borderPadding
            },
            x3: { // lowerLeft
                x: (width - a) / 2,
                y: (height - a) / 2 //borderPadding
            },
            x4: { // upperRight
                x: (width - a) / 2 + a,
                y: (height - a) / 2 + a }
        };

        return cross;
    }
};
AcroForm.Appearance.internal.getWidth = function (formObject) {
    return formObject.Rect[2]; //(formObject.Rect[2] - formObject.Rect[0]) || 0;
};
AcroForm.Appearance.internal.getHeight = function (formObject) {
    return formObject.Rect[3]; //(formObject.Rect[1] - formObject.Rect[3]) || 0;
};

// ##########################

//### For inheritance:
AcroForm.internal.inherit = function (child, parent) {
    var ObjectCreate = Object.create || function (o) {
        var F = function F() {};
        F.prototype = o;
        return new F();
    };
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
};

// ### Handy Functions:

AcroForm.internal.arrayToPdfArray = function (array) {
    if (Array.isArray(array)) {
        var content = ' [';
        for (var i in array) {
            var element = array[i].toString();
            content += element;
            content += i < array.length - 1 ? ' ' : '';
        }
        content += ']';

        return content;
    }
};

AcroForm.internal.toPdfString = function (string) {
    string = string || "";

    // put Bracket at the Beginning of the String
    if (string.indexOf('(') !== 0) {
        string = '(' + string;
    }

    if (string.substring(string.length - 1) != ')') {
        string += '(';
    }
    return string;
};

// ##########################
//          Classes
// ##########################


AcroForm.PDFObject = function () {
    // The Object ID in the PDF Object Model
    // todo
    var _objId;
    Object.defineProperty(this, 'objId', {
        get: function get() {
            if (!_objId) {
                if (this.internal) {
                    _objId = this.internal.newObjectDeferred();
                } else if (jsPDF.API.acroformPlugin.internal) {
                    // todo - find better option, that doesn't rely on a Global Static var
                    _objId = jsPDF.API.acroformPlugin.internal.newObjectDeferred();
                }
            }
            if (!_objId) {
                console.log("Couldn't create Object ID");
            }
            return _objId;
        },
        configurable: false
    });
};

AcroForm.PDFObject.prototype.toString = function () {
    return this.objId + " 0 R";
};

AcroForm.PDFObject.prototype.getString = function () {
    var res = this.objId + " 0 obj\n<<";
    var content = this.getContent();

    res += content + ">>\n";
    if (this.stream) {
        res += "stream\n";
        res += this.stream;
        res += "endstream\n";
    }
    res += "endobj\n";
    return res;
};

AcroForm.PDFObject.prototype.getContent = function () {
    /**
     * Prints out all enumerable Variables from the Object
     * @param fieldObject
     * @returns {string}
     */
    var createContentFromFieldObject = function createContentFromFieldObject(fieldObject) {
        var content = '';

        var keys = Object.keys(fieldObject).filter(function (key) {
            return key != 'content' && key != 'appearanceStreamContent' && key.substring(0, 1) != "_";
        });

        for (var i in keys) {
            var key = keys[i];
            var value = fieldObject[key];

            /*if (key == 'Rect' && value) {
             value = AcroForm.internal.calculateCoordinates.call(jsPDF.API.acroformPlugin.internal, value);
             }*/

            if (value) {
                if (Array.isArray(value)) {
                    content += '/' + key + ' ' + AcroForm.internal.arrayToPdfArray(value) + "\n";
                } else if (value instanceof AcroForm.PDFObject) {
                    // In case it is a reference to another PDFObject, take the referennce number
                    content += '/' + key + ' ' + value.objId + " 0 R" + "\n";
                } else {
                    content += '/' + key + ' ' + value + '\n';
                }
            }
        }
        return content;
    };

    var object = "";

    object += createContentFromFieldObject(this);
    return object;
};

AcroForm.FormXObject = function () {
    AcroForm.PDFObject.call(this);
    this.Type = "/XObject";
    this.Subtype = "/Form";
    this.FormType = 1;
    this.BBox;
    this.Matrix;
    this.Resources = "2 0 R";
    this.PieceInfo;
    var _stream;
    Object.defineProperty(this, 'Length', {
        enumerable: true,
        get: function get() {
            return _stream !== undefined ? _stream.length : 0;
        }
    });
    Object.defineProperty(this, 'stream', {
        enumerable: false,
        set: function set(val) {
            _stream = val;
        },
        get: function get() {
            if (_stream) {
                return _stream;
            } else {
                return null;
            }
        }
    });
};

AcroForm.internal.inherit(AcroForm.FormXObject, AcroForm.PDFObject);

AcroForm.AcroFormDictionary = function () {
    AcroForm.PDFObject.call(this);
    var _Kids = [];
    Object.defineProperty(this, 'Kids', {
        enumerable: false,
        configurable: true,
        get: function get() {
            if (_Kids.length > 0) {
                return _Kids;
            } else {
                return;
            }
        }
    });
    Object.defineProperty(this, 'Fields', {
        enumerable: true,
        configurable: true,
        get: function get() {
            return _Kids;
        }
    });
    // Default Appearance
    this.DA;
};

AcroForm.internal.inherit(AcroForm.AcroFormDictionary, AcroForm.PDFObject);

// ##### The Objects, the User can Create:


// The Field Object contains the Variables, that every Field needs
// Rectangle for Appearance: lower_left_X, lower_left_Y, width, height
AcroForm.Field = function () {
    'use strict';

    AcroForm.PDFObject.call(this);

    var _Rect;
    Object.defineProperty(this, 'Rect', {
        enumerable: true,
        configurable: false,
        get: function get() {
            if (!_Rect) {
                return;
            }
            var tmp = _Rect;
            //var calculatedRes = AcroForm.internal.calculateCoordinates(_Rect); // do later!
            return tmp;
        },
        set: function set(val) {
            _Rect = val;
        }
    });

    var _FT = "";
    Object.defineProperty(this, 'FT', {
        enumerable: true,
        set: function set(val) {
            _FT = val;
        },
        get: function get() {
            return _FT;
        }
    });
    /**
     * The Partial name of the Field Object.
     * It has to be unique.
     */
    var _T;

    Object.defineProperty(this, 'T', {
        enumerable: true,
        configurable: false,
        set: function set(val) {
            _T = val;
        },
        get: function get() {
            if (!_T || _T.length < 1) {
                if (this instanceof AcroForm.ChildClass) {
                    // In case of a Child from a Radio´Group, you don't need a FieldName!!!
                    return;
                }
                return "(FieldObject" + AcroForm.Field.FieldNum++ + ")";
            }
            if (_T.substring(0, 1) == "(" && _T.substring(_T.length - 1)) {
                return _T;
            }
            return "(" + _T + ")";
        }
    });

    var _DA;
    // Defines the default appearance (Needed for variable Text)
    Object.defineProperty(this, 'DA', {
        enumerable: true,
        get: function get() {
            if (!_DA) {
                return;
            }
            return '(' + _DA + ')';
        },
        set: function set(val) {
            _DA = val;
        }
    });

    var _DV;
    // Defines the default value
    Object.defineProperty(this, 'DV', {
        enumerable: true,
        configurable: true,
        get: function get() {
            if (!_DV) {
                return;
            }
            return _DV;
        },
        set: function set(val) {
            _DV = val;
        }
    });

    //this.Type = "/Annot";
    //this.Subtype = "/Widget";
    Object.defineProperty(this, 'Type', {
        enumerable: true,
        get: function get() {
            return this.hasAnnotation ? "/Annot" : null;
        }
    });

    Object.defineProperty(this, 'Subtype', {
        enumerable: true,
        get: function get() {
            return this.hasAnnotation ? "/Widget" : null;
        }
    });

    /**
     *
     * @type {Array}
     */
    this.BG;

    Object.defineProperty(this, 'hasAnnotation', {
        enumerable: false,
        get: function get() {
            if (this.Rect || this.BC || this.BG) {
                return true;
            }
            return false;
        }
    });

    Object.defineProperty(this, 'hasAppearanceStream', {
        enumerable: false,
        configurable: true,
        writable: true
    });

    Object.defineProperty(this, 'page', {
        enumerable: false,
        configurable: true,
        writable: true
    });
};
AcroForm.Field.FieldNum = 0;

AcroForm.internal.inherit(AcroForm.Field, AcroForm.PDFObject);

AcroForm.ChoiceField = function () {
    AcroForm.Field.call(this);
    // Field Type = Choice Field
    this.FT = "/Ch";
    // options
    this.Opt = [];
    this.V = '()';
    // Top Index
    this.TI = 0;
    /**
     * Defines, whether the
     * @type {boolean}
     */
    this.combo = false;
    /**
     * Defines, whether the Choice Field is an Edit Field.
     * An Edit Field is automatically an Combo Field.
     */
    Object.defineProperty(this, 'edit', {
        enumerable: true,
        set: function set(val) {
            if (val == true) {
                this._edit = true;
                // ComboBox has to be true
                this.combo = true;
            } else {
                this._edit = false;
            }
        },
        get: function get() {
            if (!this._edit) {
                return false;
            }
            return this._edit;
        },
        configurable: false
    });
    this.hasAppearanceStream = true;
    Object.defineProperty(this, 'V', {
        get: function get() {
            AcroForm.internal.toPdfString();
        }
    });
};
AcroForm.internal.inherit(AcroForm.ChoiceField, AcroForm.Field);
window["ChoiceField"] = AcroForm.ChoiceField;

AcroForm.ListBox = function () {
    AcroForm.ChoiceField.call(this);
    //var combo = true;
};
AcroForm.internal.inherit(AcroForm.ListBox, AcroForm.ChoiceField);
window["ListBox"] = AcroForm.ListBox;

AcroForm.ComboBox = function () {
    AcroForm.ListBox.call(this);
    this.combo = true;
};
AcroForm.internal.inherit(AcroForm.ComboBox, AcroForm.ListBox);
window["ComboBox"] = AcroForm.ComboBox;

AcroForm.EditBox = function () {
    AcroForm.ComboBox.call(this);
    this.edit = true;
};
AcroForm.internal.inherit(AcroForm.EditBox, AcroForm.ComboBox);
window["EditBox"] = AcroForm.EditBox;

AcroForm.Button = function () {
    AcroForm.Field.call(this);
    this.FT = "/Btn";
    //this.hasAnnotation = true;
};
AcroForm.internal.inherit(AcroForm.Button, AcroForm.Field);
window["Button"] = AcroForm.Button;

AcroForm.PushButton = function () {
    AcroForm.Button.call(this);
    this.pushbutton = true;
};
AcroForm.internal.inherit(AcroForm.PushButton, AcroForm.Button);
window["PushButton"] = AcroForm.PushButton;

AcroForm.RadioButton = function () {
    AcroForm.Button.call(this);
    this.radio = true;
    var _Kids = [];
    Object.defineProperty(this, 'Kids', {
        enumerable: true,
        get: function get() {
            if (_Kids.length > 0) {
                return _Kids;
            }
        }
    });

    Object.defineProperty(this, '__Kids', {
        get: function get() {
            return _Kids;
        }
    });

    var _noToggleToOff;

    Object.defineProperty(this, 'noToggleToOff', {
        enumerable: false,
        get: function get() {
            return _noToggleToOff;
        },
        set: function set(val) {
            _noToggleToOff = val;
        }
    });

    //this.hasAnnotation = false;
};
AcroForm.internal.inherit(AcroForm.RadioButton, AcroForm.Button);
window["RadioButton"] = AcroForm.RadioButton;

/*
 * The Child classs of a RadioButton (the radioGroup)
 * -> The single Buttons
 */
AcroForm.ChildClass = function (parent, name) {
    AcroForm.Field.call(this);
    this.Parent = parent;

    // todo: set AppearanceType as variable that can be set from the outside...
    this._AppearanceType = AcroForm.Appearance.RadioButton.Circle; // The Default appearanceType is the Circle
    this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(name);

    // Set Print in the Annot Flag
    this.F = AcroForm.internal.setBitPosition(this.F, 3, 1);

    // Set AppearanceCharacteristicsDictionary with default appearance if field is not interacting with user
    this.MK = this._AppearanceType.createMK(); // (8) -> Cross, (1)-> Circle, ()-> nothing

    // Default Appearance is Off
    this.AS = "/Off"; // + name;

    this._Name = name;
};
AcroForm.internal.inherit(AcroForm.ChildClass, AcroForm.Field);

AcroForm.RadioButton.prototype.setAppearance = function (appearance) {
    if (!('createAppearanceStream' in appearance && 'createMK' in appearance)) {
        console.log("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
        return;
    }
    for (var i in this.__Kids) {
        var child = this.__Kids[i];

        child.appearanceStreamContent = appearance.createAppearanceStream(child._Name);
        child.MK = appearance.createMK();
    }
};

AcroForm.RadioButton.prototype.createOption = function (name) {
    var parent = this;
    var kidCount = this.__Kids.length;

    // Create new Child for RadioGroup
    var child = new AcroForm.ChildClass(parent, name);
    // Add to Parent
    this.__Kids.push(child);

    jsPDF.API.addField(child);

    return child;
};

AcroForm.CheckBox = function () {
    Button.call(this);
    this.appearanceStreamContent = AcroForm.Appearance.CheckBox.createAppearanceStream();
    this.MK = AcroForm.Appearance.CheckBox.createMK();
    this.AS = "/On";
    this.V = "/On";
};
AcroForm.internal.inherit(AcroForm.CheckBox, AcroForm.Button);
window["CheckBox"] = AcroForm.CheckBox;

AcroForm.TextField = function () {
    AcroForm.Field.call(this);
    this.DA = AcroForm.Appearance.createDefaultAppearanceStream();
    this.F = 4;
    var _V;
    Object.defineProperty(this, 'V', {
        get: function get() {
            if (_V) {
                return "(" + _V + ")";
            } else {
                return _V;
            }
        },
        enumerable: true,
        set: function set(val) {
            _V = val;
        }
    });

    var _DV;
    Object.defineProperty(this, 'DV', {
        get: function get() {
            if (_DV) {
                return "(" + _DV + ")";
            } else {
                return _DV;
            }
        },
        enumerable: true,
        set: function set(val) {
            _DV = val;
        }
    });

    var _multiline = false;
    Object.defineProperty(this, 'multiline', {
        enumerable: false,
        get: function get() {
            return _multiline;
        },
        set: function set(val) {
            _multiline = val;
        }
    });

    //this.multiline = false;
    //this.password = false;
    /**
     * For PDF 1.4
     * @type {boolean}
     */
    //this.fileSelect = false;
    /**
     * For PDF 1.4
     * @type {boolean}
     */
    //this.doNotSpellCheck = false;
    /**
     * For PDF 1.4
     * @type {boolean}
     */
    //this.doNotScroll = false;

    var _MaxLen = false;
    Object.defineProperty(this, 'MaxLen', {
        enumerable: true,
        get: function get() {
            return _MaxLen;
        },
        set: function set(val) {
            _MaxLen = val;
        }
    });

    Object.defineProperty(this, 'hasAppearanceStream', {
        enumerable: false,
        get: function get() {
            return this.V || this.DV;
        }
    });
};
AcroForm.internal.inherit(AcroForm.TextField, AcroForm.Field);
window["TextField"] = AcroForm.TextField;

AcroForm.PasswordField = function () {
    TextField.call(this);
    Object.defineProperty(this, 'password', {
        value: true,
        enumerable: false,
        configurable: false,
        writable: false
    });
};
AcroForm.internal.inherit(AcroForm.PasswordField, AcroForm.TextField);
window["PasswordField"] = AcroForm.PasswordField;

// ############ internal functions

/*
 * small workaround for calculating the TextMetric approximately
 * @param text
 * @param fontsize
 * @returns {TextMetrics} (Has Height and Width)
 */
AcroForm.internal.calculateFontSpace = function (text, fontsize, fonttype) {
    var fonttype = fonttype || "helvetica";
    //re-use canvas object for speed improvements
    var canvas = AcroForm.internal.calculateFontSpace.canvas || (AcroForm.internal.calculateFontSpace.canvas = document.createElement('canvas'));

    var context = canvas.getContext('2d');
    context.save();
    var newFont = fontsize + " " + fonttype;
    context.font = newFont;
    var res = context.measureText(text);
    context.fontcolor = 'black';
    // Calculate height:
    var context = canvas.getContext('2d');
    res.height = context.measureText("3").width * 1.5; // 3 because in ZapfDingbats its a Hook and a 3 in normal fonts
    context.restore();

    var width = res.width;

    return res;
};

AcroForm.internal.calculateX = function (formObject, text, font, maxFontSize) {
    var maxFontSize = maxFontSize || 12;
    var font = font || "helvetica";
    var returnValue = {
        text: "",
        fontSize: ""
    };
    // Remove Brackets
    text = text.substr(0, 1) == '(' ? text.substr(1) : text;
    text = text.substr(text.length - 1) == ')' ? text.substr(0, text.length - 1) : text;
    // split into array of words
    var textSplit = text.split(' ');

    /**
     * the color could be ((alpha)||(r,g,b)||(c,m,y,k))
     * @type {string}
     */
    var color = "0 g\n";
    var fontSize = maxFontSize; // The Starting fontSize (The Maximum)
    var lineSpacing = 2;
    var borderPadding = 2;

    var height = AcroForm.Appearance.internal.getHeight(formObject) || 0;
    height = height < 0 ? -height : height;
    var width = AcroForm.Appearance.internal.getWidth(formObject) || 0;
    width = width < 0 ? -width : width;

    var isSmallerThanWidth = function isSmallerThanWidth(i, lastLine, fontSize) {
        if (i + 1 < textSplit.length) {
            var tmp = lastLine + " " + textSplit[i + 1];
            var TextWidth = AcroForm.internal.calculateFontSpace(tmp, fontSize + "px", font).width;
            var FieldWidth = width - 2 * borderPadding;
            return TextWidth <= FieldWidth;
        } else {
            return false;
        }
    };

    fontSize++;
    FontSize: while (true) {
        var text = "";
        fontSize--;
        var textHeight = AcroForm.internal.calculateFontSpace("3", fontSize + "px", font).height;
        var startY = formObject.multiline ? height - fontSize : (height - textHeight) / 2;
        startY += lineSpacing;
        var startX = -borderPadding;

        var lastX = startX,
            lastY = startY;
        var firstWordInLine = 0,
            lastWordInLine = 0;
        var lastLength = 0;

        var y = 0;
        if (fontSize == 0) {
            // In case, the Text doesn't fit at all
            fontSize = 12;
            text = "(...) Tj\n";
            text += "% Width of Text: " + AcroForm.internal.calculateFontSpace(text, "1px").width + ", FieldWidth:" + width + "\n";
            break;
        }

        lastLength = AcroForm.internal.calculateFontSpace(textSplit[0] + " ", fontSize + "px", font).width;

        var lastLine = "";
        var lineCount = 0;
        Line: for (var i in textSplit) {
            lastLine += textSplit[i] + " ";
            // Remove last blank
            lastLine = lastLine.substr(lastLine.length - 1) == " " ? lastLine.substr(0, lastLine.length - 1) : lastLine;
            var key = parseInt(i);
            lastLength = AcroForm.internal.calculateFontSpace(lastLine + " ", fontSize + "px", font).width;
            var nextLineIsSmaller = isSmallerThanWidth(key, lastLine, fontSize);
            var isLastWord = i >= textSplit.length - 1;
            if (nextLineIsSmaller && !isLastWord) {
                lastLine += " ";
                continue; // Line
            } else if (!nextLineIsSmaller && !isLastWord) {
                if (!formObject.multiline) {
                    continue FontSize;
                } else {
                    if ((textHeight + lineSpacing) * (lineCount + 2) + lineSpacing > height) {
                        // If the Text is higher than the FieldObject
                        continue FontSize;
                    }
                    lastWordInLine = key;
                    // go on
                }
            } else if (isLastWord) {
                lastWordInLine = key;
            } else {
                if (formObject.multiline && (textHeight + lineSpacing) * (lineCount + 2) + lineSpacing > height) {
                    // If the Text is higher than the FieldObject
                    continue FontSize;
                }
            }

            var line = '';

            for (var x = firstWordInLine; x <= lastWordInLine; x++) {
                line += textSplit[x] + ' ';
            }

            // Remove last blank
            line = line.substr(line.length - 1) == " " ? line.substr(0, line.length - 1) : line;
            //lastLength -= blankSpace.width;
            lastLength = AcroForm.internal.calculateFontSpace(line, fontSize + "px", font).width;

            // Calculate startX
            switch (formObject.Q) {
                case 2:
                    // Right justified
                    startX = width - lastLength - borderPadding;
                    break;
                case 1:
                    // Q = 1 := Text-Alignment: Center
                    startX = (width - lastLength) / 2;
                    break;
                case 0:
                default:
                    startX = borderPadding;
                    break;
            }
            text += startX + ' ' + lastY + ' Td\n';
            text += '(' + line + ') Tj\n';
            // reset X in PDF
            text += -startX + ' 0 Td\n';

            // After a Line, adjust y position
            lastY = -(fontSize + lineSpacing);
            lastX = startX;

            // Reset for next iteration step
            lastLength = 0;
            firstWordInLine = lastWordInLine + 1;
            lineCount++;

            lastLine = "";
            continue Line;
        }
        break;
    }

    returnValue.text = text;
    returnValue.fontSize = fontSize;

    return returnValue;
};

AcroForm.internal.calculateAppearanceStream = function (formObject) {
    if (formObject.appearanceStreamContent) {
        // If appearanceStream is already set, use it
        return formObject.appearanceStreamContent;
    }

    if (!formObject.V && !formObject.DV) {
        return;
    }

    // else calculate it

    var stream = '';

    var text = formObject.V || formObject.DV;

    var calcRes = AcroForm.internal.calculateX(formObject, text);

    stream += '/Tx BMC\n' + 'q\n' +
    //color + '\n' +
    '/F1 ' + calcRes.fontSize + ' Tf\n' +
    // Text Matrix
    '1 0 0 1 0 0 Tm\n';
    // Begin Text
    stream += 'BT\n';
    stream += calcRes.text;
    // End Text
    stream += 'ET\n';
    stream += 'Q\n' + 'EMC\n';

    var appearanceStreamContent = new AcroForm.createFormXObject(formObject);

    appearanceStreamContent.stream = stream;

    var appearance = {
        N: {
            'Normal': appearanceStreamContent
        }
    };

    return appearanceStreamContent;
};

/*
 * Converts the Parameters from x,y,w,h to lowerLeftX, lowerLeftY, upperRightX, upperRightY
 * @param x
 * @param y
 * @param w
 * @param h
 * @returns {*[]}
 */
AcroForm.internal.calculateCoordinates = function (x, y, w, h) {
    var coordinates = {};

    if (this.internal) {
        var mmtopx = function mmtopx(x) {
            return x * this.internal.scaleFactor;
        };

        if (Array.isArray(x)) {
            x[0] = AcroForm.scale(x[0]);
            x[1] = AcroForm.scale(x[1]);
            x[2] = AcroForm.scale(x[2]);
            x[3] = AcroForm.scale(x[3]);

            coordinates.lowerLeft_X = x[0] || 0;
            coordinates.lowerLeft_Y = mmtopx.call(this, this.internal.pageSize.height) - x[3] - x[1] || 0;
            coordinates.upperRight_X = x[0] + x[2] || 0;
            coordinates.upperRight_Y = mmtopx.call(this, this.internal.pageSize.height) - x[1] || 0;
        } else {
            x = AcroForm.scale(x);
            y = AcroForm.scale(y);
            w = AcroForm.scale(w);
            h = AcroForm.scale(h);
            coordinates.lowerLeft_X = x || 0;
            coordinates.lowerLeft_Y = this.internal.pageSize.height - y || 0;
            coordinates.upperRight_X = x + w || 0;
            coordinates.upperRight_Y = this.internal.pageSize.height - y + h || 0;
        }
    } else {
        // old method, that is fallback, if we can't get the pageheight, the coordinate-system starts from lower left
        if (Array.isArray(x)) {
            coordinates.lowerLeft_X = x[0] || 0;
            coordinates.lowerLeft_Y = x[1] || 0;
            coordinates.upperRight_X = x[0] + x[2] || 0;
            coordinates.upperRight_Y = x[1] + x[3] || 0;
        } else {
            coordinates.lowerLeft_X = x || 0;
            coordinates.lowerLeft_Y = y || 0;
            coordinates.upperRight_X = x + w || 0;
            coordinates.upperRight_Y = y + h || 0;
        }
    }

    return [coordinates.lowerLeft_X, coordinates.lowerLeft_Y, coordinates.upperRight_X, coordinates.upperRight_Y];
};

AcroForm.internal.calculateColor = function (r, g, b) {
    var color = new Array(3);
    color.r = r | 0;
    color.g = g | 0;
    color.b = b | 0;
    return color;
};

AcroForm.internal.getBitPosition = function (variable, position) {
    variable = variable || 0;
    var bitMask = 1;
    bitMask = bitMask << position - 1;
    return variable | bitMask;
};

AcroForm.internal.setBitPosition = function (variable, position, value) {
    variable = variable || 0;
    value = value || 1;

    var bitMask = 1;
    bitMask = bitMask << position - 1;

    if (value == 1) {
        // Set the Bit to 1
        var variable = variable | bitMask;
    } else {
        // Set the Bit to 0
        var variable = variable & ~bitMask;
    }

    return variable;
};

/**
 * jsPDF addHTML PlugIn
 * Copyright (c) 2014 Diego Casorran
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

(function (jsPDFAPI) {
	'use strict';

	/**
  * Renders an HTML element to canvas object which added to the PDF
  *
  * This feature requires [html2canvas](https://github.com/niklasvh/html2canvas)
  * or [rasterizeHTML](https://github.com/cburgmer/rasterizeHTML.js)
  *
  * @returns {jsPDF}
  * @name addHTML
  * @param element {Mixed} HTML Element, or anything supported by html2canvas.
  * @param x {Number} starting X coordinate in jsPDF instance's declared units.
  * @param y {Number} starting Y coordinate in jsPDF instance's declared units.
  * @param options {Object} Additional options, check the code below.
  * @param callback {Function} to call when the rendering has finished.
  * NOTE: Every parameter is optional except 'element' and 'callback', in such
  *       case the image is positioned at 0x0 covering the whole PDF document
  *       size. Ie, to easily take screenshots of webpages saving them to PDF.
  * @deprecated This is being replace with a vector-supporting API. See
  * [this link](https://cdn.rawgit.com/MrRio/jsPDF/master/examples/html2pdf/showcase_supported_html.html)
  */

	jsPDFAPI.addHTML = function (element, x, y, options, callback) {
		'use strict';

		if (typeof html2canvas === 'undefined' && typeof rasterizeHTML === 'undefined') throw new Error('You need either ' + 'https://github.com/niklasvh/html2canvas' + ' or https://github.com/cburgmer/rasterizeHTML.js');

		if (typeof x !== 'number') {
			options = x;
			callback = y;
		}

		if (typeof options === 'function') {
			callback = options;
			options = null;
		}

		var I = this.internal,
		    K = I.scaleFactor,
		    W = I.pageSize.width,
		    H = I.pageSize.height;

		options = options || {};
		options.onrendered = function (obj) {
			x = parseInt(x) || 0;
			y = parseInt(y) || 0;
			var dim = options.dim || {};
			var h = dim.h || 0;
			var w = dim.w || Math.min(W, obj.width / K) - x;

			var format = 'JPEG';
			if (options.format) format = options.format;

			if (obj.height > H && options.pagesplit) {
				var crop = function () {
					var cy = 0;
					while (1) {
						var canvas = document.createElement('canvas');
						canvas.width = Math.min(W * K, obj.width);
						canvas.height = Math.min(H * K, obj.height - cy);
						var ctx = canvas.getContext('2d');
						ctx.drawImage(obj, 0, cy, obj.width, canvas.height, 0, 0, canvas.width, canvas.height);
						var args = [canvas, x, cy ? 0 : y, canvas.width / K, canvas.height / K, format, null, 'SLOW'];
						this.addImage.apply(this, args);
						cy += canvas.height;
						if (cy >= obj.height) break;
						this.addPage();
					}
					callback(w, cy, null, args);
				}.bind(this);
				if (obj.nodeName === 'CANVAS') {
					var img = new Image();
					img.onload = crop;
					img.src = obj.toDataURL("image/png");
					obj = img;
				} else {
					crop();
				}
			} else {
				var alias = Math.random().toString(35);
				var args = [obj, x, y, w, h, format, alias, 'SLOW'];

				this.addImage.apply(this, args);

				callback(w, h, alias, args);
			}
		}.bind(this);

		if (typeof html2canvas !== 'undefined' && !options.rstz) {
			return html2canvas(element, options);
		}

		if (typeof rasterizeHTML !== 'undefined') {
			var meth = 'drawDocument';
			if (typeof element === 'string') {
				meth = /^http/.test(element) ? 'drawURL' : 'drawHTML';
			}
			options.width = options.width || W * K;
			return rasterizeHTML[meth](element, void 0, options).then(function (r) {
				options.onrendered(r.image);
			}, function (e) {
				callback(null, e);
			});
		}

		return null;
	};
})(jsPDF.API);

/** @preserve
 * jsPDF addImage plugin
 * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
 *               2013 Chris Dowling, https://github.com/gingerchris
 *               2013 Trinh Ho, https://github.com/ineedfat
 *               2013 Edwin Alejandro Perez, https://github.com/eaparango
 *               2013 Norah Smith, https://github.com/burnburnrocket
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 James Robb, https://github.com/jamesbrobb
 *
 * 
 */

(function (jsPDFAPI) {
	'use strict';

	var namespace = 'addImage_',
	    supported_image_types = ['jpeg', 'jpg', 'png'];

	// Image functionality ported from pdf.js
	var putImage = function putImage(img) {

		var objectNumber = this.internal.newObject(),
		    out = this.internal.write,
		    putStream = this.internal.putStream;

		img['n'] = objectNumber;

		out('<</Type /XObject');
		out('/Subtype /Image');
		out('/Width ' + img['w']);
		out('/Height ' + img['h']);
		if (img['cs'] === this.color_spaces.INDEXED) {
			out('/ColorSpace [/Indexed /DeviceRGB '
			// if an indexed png defines more than one colour with transparency, we've created a smask
			+ (img['pal'].length / 3 - 1) + ' ' + ('smask' in img ? objectNumber + 2 : objectNumber + 1) + ' 0 R]');
		} else {
			out('/ColorSpace /' + img['cs']);
			if (img['cs'] === this.color_spaces.DEVICE_CMYK) {
				out('/Decode [1 0 1 0 1 0 1 0]');
			}
		}
		out('/BitsPerComponent ' + img['bpc']);
		if ('f' in img) {
			out('/Filter /' + img['f']);
		}
		if ('dp' in img) {
			out('/DecodeParms <<' + img['dp'] + '>>');
		}
		if ('trns' in img && img['trns'].constructor == Array) {
			var trns = '',
			    i = 0,
			    len = img['trns'].length;
			for (; i < len; i++) {
				trns += img['trns'][i] + ' ' + img['trns'][i] + ' ';
			}out('/Mask [' + trns + ']');
		}
		if ('smask' in img) {
			out('/SMask ' + (objectNumber + 1) + ' 0 R');
		}
		out('/Length ' + img['data'].length + '>>');

		putStream(img['data']);

		out('endobj');

		// Soft mask
		if ('smask' in img) {
			var dp = '/Predictor ' + img['p'] + ' /Colors 1 /BitsPerComponent ' + img['bpc'] + ' /Columns ' + img['w'];
			var smask = { 'w': img['w'], 'h': img['h'], 'cs': 'DeviceGray', 'bpc': img['bpc'], 'dp': dp, 'data': img['smask'] };
			if ('f' in img) smask.f = img['f'];
			putImage.call(this, smask);
		}

		//Palette
		if (img['cs'] === this.color_spaces.INDEXED) {

			this.internal.newObject();
			//out('<< /Filter / ' + img['f'] +' /Length ' + img['pal'].length + '>>');
			//putStream(zlib.compress(img['pal']));
			out('<< /Length ' + img['pal'].length + '>>');
			putStream(this.arrayBufferToBinaryString(new Uint8Array(img['pal'])));
			out('endobj');
		}
	},
	    putResourcesCallback = function putResourcesCallback() {
		var images = this.internal.collections[namespace + 'images'];
		for (var i in images) {
			putImage.call(this, images[i]);
		}
	},
	    putXObjectsDictCallback = function putXObjectsDictCallback() {
		var images = this.internal.collections[namespace + 'images'],
		    out = this.internal.write,
		    image;
		for (var i in images) {
			image = images[i];
			out('/I' + image['i'], image['n'], '0', 'R');
		}
	},
	    checkCompressValue = function checkCompressValue(value) {
		if (value && typeof value === 'string') value = value.toUpperCase();
		return value in jsPDFAPI.image_compression ? value : jsPDFAPI.image_compression.NONE;
	},
	    getImages = function getImages() {
		var images = this.internal.collections[namespace + 'images'];
		//first run, so initialise stuff
		if (!images) {
			this.internal.collections[namespace + 'images'] = images = {};
			this.internal.events.subscribe('putResources', putResourcesCallback);
			this.internal.events.subscribe('putXobjectDict', putXObjectsDictCallback);
		}

		return images;
	},
	    getImageIndex = function getImageIndex(images) {
		var imageIndex = 0;

		if (images) {
			// this is NOT the first time this method is ran on this instance of jsPDF object.
			imageIndex = Object.keys ? Object.keys(images).length : function (o) {
				var i = 0;
				for (var e in o) {
					if (o.hasOwnProperty(e)) {
						i++;
					}
				}
				return i;
			}(images);
		}

		return imageIndex;
	},
	    notDefined = function notDefined(value) {
		return typeof value === 'undefined' || value === null;
	},
	    generateAliasFromData = function generateAliasFromData(data) {
		return typeof data === 'string' && jsPDFAPI.sHashCode(data);
	},
	    doesNotSupportImageType = function doesNotSupportImageType(type) {
		return supported_image_types.indexOf(type) === -1;
	},
	    processMethodNotEnabled = function processMethodNotEnabled(type) {
		return typeof jsPDFAPI['process' + type.toUpperCase()] !== 'function';
	},
	    isDOMElement = function isDOMElement(object) {
		return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.nodeType === 1;
	},
	    createDataURIFromElement = function createDataURIFromElement(element, format, angle) {

		//if element is an image which uses data url definition, just return the dataurl
		if (element.nodeName === 'IMG' && element.hasAttribute('src')) {
			var src = '' + element.getAttribute('src');
			if (!angle && src.indexOf('data:image/') === 0) return src;

			// only if the user doesn't care about a format
			if (!format && /\.png(?:[?#].*)?$/i.test(src)) format = 'png';
		}

		if (element.nodeName === 'CANVAS') {
			var canvas = element;
		} else {
			var canvas = document.createElement('canvas');
			canvas.width = element.clientWidth || element.width;
			canvas.height = element.clientHeight || element.height;

			var ctx = canvas.getContext('2d');
			if (!ctx) {
				throw 'addImage requires canvas to be supported by browser.';
			}
			if (angle) {
				var x,
				    y,
				    b,
				    c,
				    s,
				    w,
				    h,
				    to_radians = Math.PI / 180,
				    angleInRadians;

				if ((typeof angle === 'undefined' ? 'undefined' : _typeof(angle)) === 'object') {
					x = angle.x;
					y = angle.y;
					b = angle.bg;
					angle = angle.angle;
				}
				angleInRadians = angle * to_radians;
				c = Math.abs(Math.cos(angleInRadians));
				s = Math.abs(Math.sin(angleInRadians));
				w = canvas.width;
				h = canvas.height;
				canvas.width = h * s + w * c;
				canvas.height = h * c + w * s;

				if (isNaN(x)) x = canvas.width / 2;
				if (isNaN(y)) y = canvas.height / 2;

				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.fillStyle = b || 'white';
				ctx.fillRect(0, 0, canvas.width, canvas.height);
				ctx.save();
				ctx.translate(x, y);
				ctx.rotate(angleInRadians);
				ctx.drawImage(element, -(w / 2), -(h / 2));
				ctx.rotate(-angleInRadians);
				ctx.translate(-x, -y);
				ctx.restore();
			} else {
				ctx.drawImage(element, 0, 0, canvas.width, canvas.height);
			}
		}
		return canvas.toDataURL(('' + format).toLowerCase() == 'png' ? 'image/png' : 'image/jpeg');
	},
	    checkImagesForAlias = function checkImagesForAlias(alias, images) {
		var cached_info;
		if (images) {
			for (var e in images) {
				if (alias === images[e].alias) {
					cached_info = images[e];
					break;
				}
			}
		}
		return cached_info;
	},
	    determineWidthAndHeight = function determineWidthAndHeight(w, h, info) {
		if (!w && !h) {
			w = -96;
			h = -96;
		}
		if (w < 0) {
			w = -1 * info['w'] * 72 / w / this.internal.scaleFactor;
		}
		if (h < 0) {
			h = -1 * info['h'] * 72 / h / this.internal.scaleFactor;
		}
		if (w === 0) {
			w = h * info['w'] / info['h'];
		}
		if (h === 0) {
			h = w * info['h'] / info['w'];
		}

		return [w, h];
	},
	    writeImageToPDF = function writeImageToPDF(x, y, w, h, info, index, images) {
		var dims = determineWidthAndHeight.call(this, w, h, info),
		    coord = this.internal.getCoordinateString,
		    vcoord = this.internal.getVerticalCoordinateString;

		w = dims[0];
		h = dims[1];

		images[index] = info;

		this.internal.write('q', coord(w), '0 0', coord(h) // TODO: check if this should be shifted by vcoord
		, coord(x), vcoord(y + h), 'cm /I' + info['i'], 'Do Q');
	};

	/**
  * COLOR SPACES
  */
	jsPDFAPI.color_spaces = {
		DEVICE_RGB: 'DeviceRGB',
		DEVICE_GRAY: 'DeviceGray',
		DEVICE_CMYK: 'DeviceCMYK',
		CAL_GREY: 'CalGray',
		CAL_RGB: 'CalRGB',
		LAB: 'Lab',
		ICC_BASED: 'ICCBased',
		INDEXED: 'Indexed',
		PATTERN: 'Pattern',
		SEPARATION: 'Separation',
		DEVICE_N: 'DeviceN'
	};

	/**
  * DECODE METHODS
  */
	jsPDFAPI.decode = {
		DCT_DECODE: 'DCTDecode',
		FLATE_DECODE: 'FlateDecode',
		LZW_DECODE: 'LZWDecode',
		JPX_DECODE: 'JPXDecode',
		JBIG2_DECODE: 'JBIG2Decode',
		ASCII85_DECODE: 'ASCII85Decode',
		ASCII_HEX_DECODE: 'ASCIIHexDecode',
		RUN_LENGTH_DECODE: 'RunLengthDecode',
		CCITT_FAX_DECODE: 'CCITTFaxDecode'
	};

	/**
  * IMAGE COMPRESSION TYPES
  */
	jsPDFAPI.image_compression = {
		NONE: 'NONE',
		FAST: 'FAST',
		MEDIUM: 'MEDIUM',
		SLOW: 'SLOW'
	};

	jsPDFAPI.sHashCode = function (str) {
		return Array.prototype.reduce && str.split("").reduce(function (a, b) {
			a = (a << 5) - a + b.charCodeAt(0);return a & a;
		}, 0);
	};

	jsPDFAPI.isString = function (object) {
		return typeof object === 'string';
	};

	/**
  * Strips out and returns info from a valid base64 data URI
  * @param {String[dataURI]} a valid data URI of format 'data:[<MIME-type>][;base64],<data>'
  * @returns an Array containing the following
  * [0] the complete data URI
  * [1] <MIME-type>
  * [2] format - the second part of the mime-type i.e 'png' in 'image/png'
  * [4] <data>
  */
	jsPDFAPI.extractInfoFromBase64DataURI = function (dataURI) {
		return (/^data:([\w]+?\/([\w]+?));base64,(.+?)$/g.exec(dataURI)
		);
	};

	/**
  * Check to see if ArrayBuffer is supported
  */
	jsPDFAPI.supportsArrayBuffer = function () {
		return typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined';
	};

	/**
  * Tests supplied object to determine if ArrayBuffer
  * @param {Object[object]}
  */
	jsPDFAPI.isArrayBuffer = function (object) {
		if (!this.supportsArrayBuffer()) return false;
		return object instanceof ArrayBuffer;
	};

	/**
  * Tests supplied object to determine if it implements the ArrayBufferView (TypedArray) interface
  * @param {Object[object]}
  */
	jsPDFAPI.isArrayBufferView = function (object) {
		if (!this.supportsArrayBuffer()) return false;
		if (typeof Uint32Array === 'undefined') return false;
		return object instanceof Int8Array || object instanceof Uint8Array || typeof Uint8ClampedArray !== 'undefined' && object instanceof Uint8ClampedArray || object instanceof Int16Array || object instanceof Uint16Array || object instanceof Int32Array || object instanceof Uint32Array || object instanceof Float32Array || object instanceof Float64Array;
	};

	/**
  * Exactly what it says on the tin
  */
	jsPDFAPI.binaryStringToUint8Array = function (binary_string) {
		/*
   * not sure how efficient this will be will bigger files. Is there a native method?
   */
		var len = binary_string.length;
		var bytes = new Uint8Array(len);
		for (var i = 0; i < len; i++) {
			bytes[i] = binary_string.charCodeAt(i);
		}
		return bytes;
	};

	/**
  * @see this discussion
  * http://stackoverflow.com/questions/6965107/converting-between-strings-and-arraybuffers
  *
  * As stated, i imagine the method below is highly inefficent for large files.
  *
  * Also of note from Mozilla,
  *
  * "However, this is slow and error-prone, due to the need for multiple conversions (especially if the binary data is not actually byte-format data, but, for example, 32-bit integers or floats)."
  *
  * https://developer.mozilla.org/en-US/Add-ons/Code_snippets/StringView
  *
  * Although i'm strugglig to see how StringView solves this issue? Doesn't appear to be a direct method for conversion?
  *
  * Async method using Blob and FileReader could be best, but i'm not sure how to fit it into the flow?
  */
	jsPDFAPI.arrayBufferToBinaryString = function (buffer) {
		/*if('TextDecoder' in window){
  	var decoder = new TextDecoder('ascii');
  	return decoder.decode(buffer);
  }*/

		if (this.isArrayBuffer(buffer)) buffer = new Uint8Array(buffer);

		var binary_string = '';
		var len = buffer.byteLength;
		for (var i = 0; i < len; i++) {
			binary_string += String.fromCharCode(buffer[i]);
		}
		return binary_string;
		/*
   * Another solution is the method below - convert array buffer straight to base64 and then use atob
   */
		//return atob(this.arrayBufferToBase64(buffer));
	};

	/**
  * Converts an ArrayBuffer directly to base64
  *
  * Taken from here
  *
  * http://jsperf.com/encoding-xhr-image-data/31
  *
  * Need to test if this is a better solution for larger files
  *
  */
	jsPDFAPI.arrayBufferToBase64 = function (arrayBuffer) {
		var base64 = '';
		var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

		var bytes = new Uint8Array(arrayBuffer);
		var byteLength = bytes.byteLength;
		var byteRemainder = byteLength % 3;
		var mainLength = byteLength - byteRemainder;

		var a, b, c, d;
		var chunk;

		// Main loop deals with bytes in chunks of 3
		for (var i = 0; i < mainLength; i = i + 3) {
			// Combine the three bytes into a single integer
			chunk = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];

			// Use bitmasks to extract 6-bit segments from the triplet
			a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
			b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
			c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
			d = chunk & 63; // 63       = 2^6 - 1

			// Convert the raw binary segments to the appropriate ASCII encoding
			base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
		}

		// Deal with the remaining bytes and padding
		if (byteRemainder == 1) {
			chunk = bytes[mainLength];

			a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

			// Set the 4 least significant bits to zero
			b = (chunk & 3) << 4; // 3   = 2^2 - 1

			base64 += encodings[a] + encodings[b] + '==';
		} else if (byteRemainder == 2) {
			chunk = bytes[mainLength] << 8 | bytes[mainLength + 1];

			a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
			b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

			// Set the 2 least significant bits to zero
			c = (chunk & 15) << 2; // 15    = 2^4 - 1

			base64 += encodings[a] + encodings[b] + encodings[c] + '=';
		}

		return base64;
	};

	jsPDFAPI.createImageInfo = function (data, wd, ht, cs, bpc, f, imageIndex, alias, dp, trns, pal, smask, p) {
		var info = {
			alias: alias,
			w: wd,
			h: ht,
			cs: cs,
			bpc: bpc,
			i: imageIndex,
			data: data
			// n: objectNumber will be added by putImage code
		};

		if (f) info.f = f;
		if (dp) info.dp = dp;
		if (trns) info.trns = trns;
		if (pal) info.pal = pal;
		if (smask) info.smask = smask;
		if (p) info.p = p; // predictor parameter for PNG compression

		return info;
	};

	jsPDFAPI.addImage = function (imageData, format, x, y, w, h, alias, compression, rotation) {
		'use strict';

		if (typeof format !== 'string') {
			var tmp = h;
			h = w;
			w = y;
			y = x;
			x = format;
			format = tmp;
		}

		if ((typeof imageData === 'undefined' ? 'undefined' : _typeof(imageData)) === 'object' && !isDOMElement(imageData) && "imageData" in imageData) {
			var options = imageData;

			imageData = options.imageData;
			format = options.format || format;
			x = options.x || x || 0;
			y = options.y || y || 0;
			w = options.w || w;
			h = options.h || h;
			alias = options.alias || alias;
			compression = options.compression || compression;
			rotation = options.rotation || options.angle || rotation;
		}

		if (isNaN(x) || isNaN(y)) {
			console.error('jsPDF.addImage: Invalid coordinates', arguments);
			throw new Error('Invalid coordinates passed to jsPDF.addImage');
		}

		var images = getImages.call(this),
		    info;

		if (!(info = checkImagesForAlias(imageData, images))) {
			var dataAsBinaryString;

			if (isDOMElement(imageData)) imageData = createDataURIFromElement(imageData, format, rotation);

			if (notDefined(alias)) alias = generateAliasFromData(imageData);

			if (!(info = checkImagesForAlias(alias, images))) {

				if (this.isString(imageData)) {

					var base64Info = this.extractInfoFromBase64DataURI(imageData);

					if (base64Info) {

						format = base64Info[2];
						imageData = atob(base64Info[3]); //convert to binary string
					} else {

						if (imageData.charCodeAt(0) === 0x89 && imageData.charCodeAt(1) === 0x50 && imageData.charCodeAt(2) === 0x4e && imageData.charCodeAt(3) === 0x47) format = 'png';
					}
				}
				format = (format || 'JPEG').toLowerCase();

				if (doesNotSupportImageType(format)) throw new Error('addImage currently only supports formats ' + supported_image_types + ', not \'' + format + '\'');

				if (processMethodNotEnabled(format)) throw new Error('please ensure that the plugin for \'' + format + '\' support is added');

				/**
     * need to test if it's more efficient to convert all binary strings
     * to TypedArray - or should we just leave and process as string?
     */
				if (this.supportsArrayBuffer()) {
					// no need to convert if imageData is already uint8array
					if (!(imageData instanceof Uint8Array)) {
						dataAsBinaryString = imageData;
						imageData = this.binaryStringToUint8Array(imageData);
					}
				}

				info = this['process' + format.toUpperCase()](imageData, getImageIndex(images), alias, checkCompressValue(compression), dataAsBinaryString);

				if (!info) throw new Error('An unkwown error occurred whilst processing the image');
			}
		}

		writeImageToPDF.call(this, x, y, w, h, info, info.i, images);

		return this;
	};

	/**
  * JPEG SUPPORT
  **/

	//takes a string imgData containing the raw bytes of
	//a jpeg image and returns [width, height]
	//Algorithm from: http://www.64lines.com/jpeg-width-height
	var getJpegSize = function getJpegSize(imgData) {
		'use strict';

		var width, height, numcomponents;
		// Verify we have a valid jpeg header 0xff,0xd8,0xff,0xe0,?,?,'J','F','I','F',0x00
		if (!imgData.charCodeAt(0) === 0xff || !imgData.charCodeAt(1) === 0xd8 || !imgData.charCodeAt(2) === 0xff || !imgData.charCodeAt(3) === 0xe0 || !imgData.charCodeAt(6) === 'J'.charCodeAt(0) || !imgData.charCodeAt(7) === 'F'.charCodeAt(0) || !imgData.charCodeAt(8) === 'I'.charCodeAt(0) || !imgData.charCodeAt(9) === 'F'.charCodeAt(0) || !imgData.charCodeAt(10) === 0x00) {
			throw new Error('getJpegSize requires a binary string jpeg file');
		}
		var blockLength = imgData.charCodeAt(4) * 256 + imgData.charCodeAt(5);
		var i = 4,
		    len = imgData.length;
		while (i < len) {
			i += blockLength;
			if (imgData.charCodeAt(i) !== 0xff) {
				throw new Error('getJpegSize could not find the size of the image');
			}
			if (imgData.charCodeAt(i + 1) === 0xc0 || //(SOF) Huffman  - Baseline DCT
			imgData.charCodeAt(i + 1) === 0xc1 || //(SOF) Huffman  - Extended sequential DCT
			imgData.charCodeAt(i + 1) === 0xc2 || // Progressive DCT (SOF2)
			imgData.charCodeAt(i + 1) === 0xc3 || // Spatial (sequential) lossless (SOF3)
			imgData.charCodeAt(i + 1) === 0xc4 || // Differential sequential DCT (SOF5)
			imgData.charCodeAt(i + 1) === 0xc5 || // Differential progressive DCT (SOF6)
			imgData.charCodeAt(i + 1) === 0xc6 || // Differential spatial (SOF7)
			imgData.charCodeAt(i + 1) === 0xc7) {
				height = imgData.charCodeAt(i + 5) * 256 + imgData.charCodeAt(i + 6);
				width = imgData.charCodeAt(i + 7) * 256 + imgData.charCodeAt(i + 8);
				numcomponents = imgData.charCodeAt(i + 9);
				return [width, height, numcomponents];
			} else {
				i += 2;
				blockLength = imgData.charCodeAt(i) * 256 + imgData.charCodeAt(i + 1);
			}
		}
	},
	    getJpegSizeFromBytes = function getJpegSizeFromBytes(data) {

		var hdr = data[0] << 8 | data[1];

		if (hdr !== 0xFFD8) throw new Error('Supplied data is not a JPEG');

		var len = data.length,
		    block = (data[4] << 8) + data[5],
		    pos = 4,
		    bytes,
		    width,
		    height,
		    numcomponents;

		while (pos < len) {
			pos += block;
			bytes = readBytes(data, pos);
			block = (bytes[2] << 8) + bytes[3];
			if ((bytes[1] === 0xC0 || bytes[1] === 0xC2) && bytes[0] === 0xFF && block > 7) {
				bytes = readBytes(data, pos + 5);
				width = (bytes[2] << 8) + bytes[3];
				height = (bytes[0] << 8) + bytes[1];
				numcomponents = bytes[4];
				return { width: width, height: height, numcomponents: numcomponents };
			}

			pos += 2;
		}

		throw new Error('getJpegSizeFromBytes could not find the size of the image');
	},
	    readBytes = function readBytes(data, offset) {
		return data.subarray(offset, offset + 5);
	};

	jsPDFAPI.processJPEG = function (data, index, alias, compression, dataAsBinaryString) {
		'use strict';

		var colorSpace = this.color_spaces.DEVICE_RGB,
		    filter = this.decode.DCT_DECODE,
		    bpc = 8,
		    dims;

		if (this.isString(data)) {
			dims = getJpegSize(data);
			return this.createImageInfo(data, dims[0], dims[1], dims[3] == 1 ? this.color_spaces.DEVICE_GRAY : colorSpace, bpc, filter, index, alias);
		}

		if (this.isArrayBuffer(data)) data = new Uint8Array(data);

		if (this.isArrayBufferView(data)) {

			dims = getJpegSizeFromBytes(data);

			// if we already have a stored binary string rep use that
			data = dataAsBinaryString || this.arrayBufferToBinaryString(data);

			return this.createImageInfo(data, dims.width, dims.height, dims.numcomponents == 1 ? this.color_spaces.DEVICE_GRAY : colorSpace, bpc, filter, index, alias);
		}

		return null;
	};

	jsPDFAPI.processJPG = function () /*data, index, alias, compression, dataAsBinaryString*/{
		return this.processJPEG.apply(this, arguments);
	};
})(jsPDF.API);

/**
 * jsPDF Annotations PlugIn
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

/**
 * There are many types of annotations in a PDF document. Annotations are placed
 * on a page at a particular location. They are not 'attached' to an object.
 * <br />
 * This plugin current supports <br />
 * <li> Goto Page (set pageNumber and top in options)
 * <li> Goto Name (set name and top in options)
 * <li> Goto URL (set url in options)
 * <p>
 * 	The destination magnification factor can also be specified when goto is a page number or a named destination. (see documentation below)
 *  (set magFactor in options).  XYZ is the default.
 * </p>
 * <p>
 *  Links, Text, Popup, and FreeText are supported.
 * </p>
 * <p>
 * Options In PDF spec Not Implemented Yet
 * <li> link border
 * <li> named target
 * <li> page coordinates
 * <li> destination page scaling and layout
 * <li> actions other than URL and GotoPage
 * <li> background / hover actions
 * </p>
 */

/*
    Destination Magnification Factors
    See PDF 1.3 Page 386 for meanings and options

    [supported]
	XYZ (options; left top zoom)
	Fit (no options)
	FitH (options: top)
	FitV (options: left)

	[not supported]
	FitR
	FitB
	FitBH
	FitBV
 */

(function (jsPDFAPI) {
	'use strict';

	var annotationPlugin = {

		/**
   * An array of arrays, indexed by <em>pageNumber</em>.
   */
		annotations: [],

		f2: function f2(number) {
			return number.toFixed(2);
		},

		notEmpty: function notEmpty(obj) {
			if (typeof obj != 'undefined') {
				if (obj != '') {
					return true;
				}
			}
		}
	};

	jsPDF.API.annotationPlugin = annotationPlugin;

	jsPDF.API.events.push(['addPage', function (info) {
		this.annotationPlugin.annotations[info.pageNumber] = [];
	}]);

	jsPDFAPI.events.push(['putPage', function (info) {
		//TODO store annotations in pageContext so reorder/remove will not affect them.
		var pageAnnos = this.annotationPlugin.annotations[info.pageNumber];

		var found = false;
		for (var a = 0; a < pageAnnos.length && !found; a++) {
			var anno = pageAnnos[a];
			switch (anno.type) {
				case 'link':
					if (annotationPlugin.notEmpty(anno.options.url) || annotationPlugin.notEmpty(anno.options.pageNumber)) {
						found = true;
						break;
					}
				case 'reference':
				case 'text':
				case 'freetext':
					found = true;
					break;
			}
		}
		if (found == false) {
			return;
		}

		this.internal.write("/Annots [");
		var f2 = this.annotationPlugin.f2;
		var k = this.internal.scaleFactor;
		var pageHeight = this.internal.pageSize.height;
		var pageInfo = this.internal.getPageInfo(info.pageNumber);
		for (var a = 0; a < pageAnnos.length; a++) {
			var anno = pageAnnos[a];

			switch (anno.type) {
				case 'reference':
					// References to Widget Anotations (for AcroForm Fields)
					this.internal.write(' ' + anno.object.objId + ' 0 R ');
					break;
				case 'text':
					// Create a an object for both the text and the popup
					var objText = this.internal.newAdditionalObject();
					var objPopup = this.internal.newAdditionalObject();

					var title = anno.title || 'Note';
					var rect = "/Rect [" + f2(anno.bounds.x * k) + " " + f2(pageHeight - (anno.bounds.y + anno.bounds.h) * k) + " " + f2((anno.bounds.x + anno.bounds.w) * k) + " " + f2((pageHeight - anno.bounds.y) * k) + "] ";
					line = '<</Type /Annot /Subtype /' + 'Text' + ' ' + rect + '/Contents (' + anno.contents + ')';
					line += ' /Popup ' + objPopup.objId + " 0 R";
					line += ' /P ' + pageInfo.objId + " 0 R";
					line += ' /T (' + title + ') >>';
					objText.content = line;

					var parent = objText.objId + ' 0 R';
					var popoff = 30;
					var rect = "/Rect [" + f2((anno.bounds.x + popoff) * k) + " " + f2(pageHeight - (anno.bounds.y + anno.bounds.h) * k) + " " + f2((anno.bounds.x + anno.bounds.w + popoff) * k) + " " + f2((pageHeight - anno.bounds.y) * k) + "] ";
					//var rect2 = "/Rect [" + f2(anno.bounds.x * k) + " " + f2((pageHeight - anno.bounds.y) * k) + " " + f2(anno.bounds.x + anno.bounds.w * k) + " " + f2(pageHeight - (anno.bounds.y + anno.bounds.h) * k) + "] ";
					line = '<</Type /Annot /Subtype /' + 'Popup' + ' ' + rect + ' /Parent ' + parent;
					if (anno.open) {
						line += ' /Open true';
					}
					line += ' >>';
					objPopup.content = line;

					this.internal.write(objText.objId, '0 R', objPopup.objId, '0 R');

					break;
				case 'freetext':
					var rect = "/Rect [" + f2(anno.bounds.x * k) + " " + f2((pageHeight - anno.bounds.y) * k) + " " + f2(anno.bounds.x + anno.bounds.w * k) + " " + f2(pageHeight - (anno.bounds.y + anno.bounds.h) * k) + "] ";
					var color = anno.color || '#000000';
					line = '<</Type /Annot /Subtype /' + 'FreeText' + ' ' + rect + '/Contents (' + anno.contents + ')';
					line += ' /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#' + color + ')';
					line += ' /Border [0 0 0]';
					line += ' >>';
					this.internal.write(line);
					break;
				case 'link':
					if (anno.options.name) {
						var loc = this.annotations._nameMap[anno.options.name];
						anno.options.pageNumber = loc.page;
						anno.options.top = loc.y;
					} else {
						if (!anno.options.top) {
							anno.options.top = 0;
						}
					}

					//var pageHeight = this.internal.pageSize.height * this.internal.scaleFactor;
					var rect = "/Rect [" + f2(anno.x * k) + " " + f2((pageHeight - anno.y) * k) + " " + f2(anno.x + anno.w * k) + " " + f2(pageHeight - (anno.y + anno.h) * k) + "] ";

					var line = '';
					if (anno.options.url) {
						line = '<</Type /Annot /Subtype /Link ' + rect + '/Border [0 0 0] /A <</S /URI /URI (' + anno.options.url + ') >>';
					} else if (anno.options.pageNumber) {
						// first page is 0
						var info = this.internal.getPageInfo(anno.options.pageNumber);
						line = '<</Type /Annot /Subtype /Link ' + rect + '/Border [0 0 0] /Dest [' + info.objId + " 0 R";
						anno.options.magFactor = anno.options.magFactor || "XYZ";
						switch (anno.options.magFactor) {
							case 'Fit':
								line += ' /Fit]';
								break;
							case 'FitH':
								//anno.options.top = anno.options.top || f2(pageHeight * k);
								line += ' /FitH ' + anno.options.top + ']';
								break;
							case 'FitV':
								anno.options.left = anno.options.left || 0;
								line += ' /FitV ' + anno.options.left + ']';
								break;
							case 'XYZ':
							default:
								var top = f2((pageHeight - anno.options.top) * k); // || f2(pageHeight * k);
								anno.options.left = anno.options.left || 0;
								// 0 or null zoom will not change zoom factor
								if (typeof anno.options.zoom === 'undefined') {
									anno.options.zoom = 0;
								}
								line += ' /XYZ ' + anno.options.left + ' ' + top + ' ' + anno.options.zoom + ']';
								break;
						}
					} else {
						// TODO error - should not be here
					}
					if (line != '') {
						line += " >>";
						this.internal.write(line);
					}
					break;
			}
		}
		this.internal.write("]");
	}]);

	jsPDFAPI.createAnnotation = function (options) {
		switch (options.type) {
			case 'link':
				this.link(options.bounds.x, options.bounds.y, options.bounds.w, options.bounds.h, options);
				break;
			case 'text':
			case 'freetext':
				this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push(options);
				break;
		}
	};

	/**
  * valid options
  * <li> pageNumber or url [required]
  * <p>If pageNumber is specified, top and zoom may also be specified</p>
  */
	jsPDFAPI.link = function (x, y, w, h, options) {
		'use strict';

		this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push({
			x: x,
			y: y,
			w: w,
			h: h,
			options: options,
			type: 'link'
		});
	};

	/**
  * valid options
  * <li> pageNumber or url [required]
  * <p>If pageNumber is specified, top and zoom may also be specified</p>
  */
	jsPDFAPI.link = function (x, y, w, h, options) {
		'use strict';

		this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push({
			x: x,
			y: y,
			w: w,
			h: h,
			options: options,
			type: 'link'
		});
	};

	/**
  * Currently only supports single line text.
  * Returns the width of the text/link
  */
	jsPDFAPI.textWithLink = function (text, x, y, options) {
		'use strict';

		var width = this.getTextWidth(text);
		var height = this.internal.getLineHeight();
		this.text(text, x, y);
		//TODO We really need the text baseline height to do this correctly.
		// Or ability to draw text on top, bottom, center, or baseline.
		y += height * .2;
		this.link(x, y - height, width, height, options);
		return width;
	};

	//TODO move into external library
	jsPDFAPI.getTextWidth = function (text) {
		'use strict';

		var fontSize = this.internal.getFontSize();
		var txtWidth = this.getStringUnitWidth(text) * fontSize / this.internal.scaleFactor;
		return txtWidth;
	};

	//TODO move into external library
	jsPDFAPI.getLineHeight = function () {
		return this.internal.getLineHeight();
	};

	return this;
})(jsPDF.API);

/**
 * jsPDF Autoprint Plugin
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

/**
* Makes the PDF automatically print. This works in Chrome, Firefox, Acrobat
* Reader.
*
* @returns {jsPDF}
* @name autoPrint
* @example
* var doc = new jsPDF()
* doc.text(10, 10, 'This is a test')
* doc.autoPrint()
* doc.save('autoprint.pdf')
*/

(function (jsPDFAPI) {
  'use strict';

  jsPDFAPI.autoPrint = function () {
    'use strict';

    var refAutoPrintTag;

    this.internal.events.subscribe('postPutResources', function () {
      refAutoPrintTag = this.internal.newObject();
      this.internal.write("<< /S/Named /Type/Action /N/Print >>", "endobj");
    });

    this.internal.events.subscribe("putCatalog", function () {
      this.internal.write("/OpenAction " + refAutoPrintTag + " 0" + " R");
    });
    return this;
  };
})(jsPDF.API);

/**
 * jsPDF Canvas PlugIn
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

/**
 * This plugin mimics the HTML5 Canvas
 * 
 * The goal is to provide a way for current canvas users to print directly to a PDF.
 */

(function (jsPDFAPI) {
	'use strict';

	jsPDFAPI.events.push(['initialized', function () {
		this.canvas.pdf = this;
	}]);

	jsPDFAPI.canvas = {
		getContext: function getContext(name) {
			this.pdf.context2d._canvas = this;
			return this.pdf.context2d;
		},
		style: {}
	};

	Object.defineProperty(jsPDFAPI.canvas, 'width', {
		get: function get() {
			return this._width;
		},
		set: function set(value) {
			this._width = value;
			this.getContext('2d').pageWrapX = value + 1;
		}
	});

	Object.defineProperty(jsPDFAPI.canvas, 'height', {
		get: function get() {
			return this._height;
		},
		set: function set(value) {
			this._height = value;
			this.getContext('2d').pageWrapY = value + 1;
		}
	});

	return this;
})(jsPDF.API);

/** ====================================================================
 * jsPDF Cell plugin
 * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
 *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Hall, james@parall.ax
 *               2014 Diego Casorran, https://github.com/diegocr
 *
 * 
 * ====================================================================
 */

(function (jsPDFAPI) {
    'use strict';
    /*jslint browser:true */
    /*global document: false, jsPDF */

    var fontName,
        fontSize,
        fontStyle,
        padding = 3,
        margin = 13,
        headerFunction,
        lastCellPos = { x: undefined, y: undefined, w: undefined, h: undefined, ln: undefined },
        pages = 1,
        setLastCellPosition = function setLastCellPosition(x, y, w, h, ln) {
        lastCellPos = { 'x': x, 'y': y, 'w': w, 'h': h, 'ln': ln };
    },
        getLastCellPosition = function getLastCellPosition() {
        return lastCellPos;
    },
        NO_MARGINS = { left: 0, top: 0, bottom: 0 };

    jsPDFAPI.setHeaderFunction = function (func) {
        headerFunction = func;
    };

    jsPDFAPI.getTextDimensions = function (txt) {
        fontName = this.internal.getFont().fontName;
        fontSize = this.table_font_size || this.internal.getFontSize();
        fontStyle = this.internal.getFont().fontStyle;
        // 1 pixel = 0.264583 mm and 1 mm = 72/25.4 point
        var px2pt = 0.264583 * 72 / 25.4,
            dimensions,
            text;

        text = document.createElement('font');
        text.id = "jsPDFCell";

        try {
            text.style.fontStyle = fontStyle;
        } catch (e) {
            text.style.fontWeight = fontStyle;
        }

        text.style.fontName = fontName;
        text.style.fontSize = fontSize + 'pt';
        try {
            text.textContent = txt;
        } catch (e) {
            text.innerText = txt;
        }

        document.body.appendChild(text);

        dimensions = { w: (text.offsetWidth + 1) * px2pt, h: (text.offsetHeight + 1) * px2pt };

        document.body.removeChild(text);

        return dimensions;
    };

    jsPDFAPI.cellAddPage = function () {
        var margins = this.margins || NO_MARGINS;

        this.addPage();

        setLastCellPosition(margins.left, margins.top, undefined, undefined);
        //setLastCellPosition(undefined, undefined, undefined, undefined, undefined);
        pages += 1;
    };

    jsPDFAPI.cellInitialize = function () {
        lastCellPos = { x: undefined, y: undefined, w: undefined, h: undefined, ln: undefined };
        pages = 1;
    };

    jsPDFAPI.cell = function (x, y, w, h, txt, ln, align) {
        var curCell = getLastCellPosition();
        var pgAdded = false;

        // If this is not the first cell, we must change its position
        if (curCell.ln !== undefined) {
            if (curCell.ln === ln) {
                //Same line
                x = curCell.x + curCell.w;
                y = curCell.y;
            } else {
                //New line
                var margins = this.margins || NO_MARGINS;
                if (curCell.y + curCell.h + h + margin >= this.internal.pageSize.height - margins.bottom) {
                    this.cellAddPage();
                    pgAdded = true;
                    if (this.printHeaders && this.tableHeaderRow) {
                        this.printHeaderRow(ln, true);
                    }
                }
                //We ignore the passed y: the lines may have different heights
                y = getLastCellPosition().y + getLastCellPosition().h;
                if (pgAdded) y = margin + 10;
            }
        }

        if (txt[0] !== undefined) {
            if (this.printingHeaderRow) {
                this.rect(x, y, w, h, 'FD');
            } else {
                this.rect(x, y, w, h);
            }
            if (align === 'right') {
                if (!(txt instanceof Array)) {
                    txt = [txt];
                }
                for (var i = 0; i < txt.length; i++) {
                    var currentLine = txt[i];
                    var textSize = this.getStringUnitWidth(currentLine) * this.internal.getFontSize();
                    this.text(currentLine, x + w - textSize - padding, y + this.internal.getLineHeight() * (i + 1));
                }
            } else {
                this.text(txt, x + padding, y + this.internal.getLineHeight());
            }
        }
        setLastCellPosition(x, y, w, h, ln);
        return this;
    };

    /**
     * Return the maximum value from an array
     * @param array
     * @param comparisonFn
     * @returns {*}
     */
    jsPDFAPI.arrayMax = function (array, comparisonFn) {
        var max = array[0],
            i,
            ln,
            item;

        for (i = 0, ln = array.length; i < ln; i += 1) {
            item = array[i];

            if (comparisonFn) {
                if (comparisonFn(max, item) === -1) {
                    max = item;
                }
            } else {
                if (item > max) {
                    max = item;
                }
            }
        }

        return max;
    };

    /**
     * Create a table from a set of data.
     * @param {Integer} [x] : left-position for top-left corner of table
     * @param {Integer} [y] top-position for top-left corner of table
     * @param {Object[]} [data] As array of objects containing key-value pairs corresponding to a row of data.
     * @param {String[]} [headers] Omit or null to auto-generate headers at a performance cost
      * @param {Object} [config.printHeaders] True to print column headers at the top of every page
     * @param {Object} [config.autoSize] True to dynamically set the column widths to match the widest cell value
     * @param {Object} [config.margins] margin values for left, top, bottom, and width
     * @param {Object} [config.fontSize] Integer fontSize to use (optional)
     */

    jsPDFAPI.table = function (x, y, data, headers, config) {
        if (!data) {
            throw 'No data for PDF table';
        }

        var headerNames = [],
            headerPrompts = [],
            header,
            i,
            ln,
            cln,
            columnMatrix = {},
            columnWidths = {},
            columnData,
            column,
            columnMinWidths = [],
            j,
            tableHeaderConfigs = [],
            model,
            jln,
            func,


        //set up defaults. If a value is provided in config, defaults will be overwritten:
        autoSize = false,
            printHeaders = true,
            fontSize = 12,
            margins = NO_MARGINS;

        margins.width = this.internal.pageSize.width;

        if (config) {
            //override config defaults if the user has specified non-default behavior:
            if (config.autoSize === true) {
                autoSize = true;
            }
            if (config.printHeaders === false) {
                printHeaders = false;
            }
            if (config.fontSize) {
                fontSize = config.fontSize;
            }
            if (config.css && typeof config.css['font-size'] !== "undefined") {
                fontSize = config.css['font-size'] * 16;
            }
            if (config.margins) {
                margins = config.margins;
            }
        }

        /**
         * @property {Number} lnMod
         * Keep track of the current line number modifier used when creating cells
         */
        this.lnMod = 0;
        lastCellPos = { x: undefined, y: undefined, w: undefined, h: undefined, ln: undefined }, pages = 1;

        this.printHeaders = printHeaders;
        this.margins = margins;
        this.setFontSize(fontSize);
        this.table_font_size = fontSize;

        // Set header values
        if (headers === undefined || headers === null) {
            // No headers defined so we derive from data
            headerNames = Object.keys(data[0]);
        } else if (headers[0] && typeof headers[0] !== 'string') {
            var px2pt = 0.264583 * 72 / 25.4;

            // Split header configs into names and prompts
            for (i = 0, ln = headers.length; i < ln; i += 1) {
                header = headers[i];
                headerNames.push(header.name);
                headerPrompts.push(header.prompt);
                columnWidths[header.name] = header.width * px2pt;
            }
        } else {
            headerNames = headers;
        }

        if (autoSize) {
            // Create a matrix of columns e.g., {column_title: [row1_Record, row2_Record]}
            func = function func(rec) {
                return rec[header];
            };

            for (i = 0, ln = headerNames.length; i < ln; i += 1) {
                header = headerNames[i];

                columnMatrix[header] = data.map(func);

                // get header width
                columnMinWidths.push(this.getTextDimensions(headerPrompts[i] || header).w);
                column = columnMatrix[header];

                // get cell widths
                for (j = 0, cln = column.length; j < cln; j += 1) {
                    columnData = column[j];
                    columnMinWidths.push(this.getTextDimensions(columnData).w);
                }

                // get final column width
                columnWidths[header] = jsPDFAPI.arrayMax(columnMinWidths);

                //have to reset
                columnMinWidths = [];
            }
        }

        // -- Construct the table

        if (printHeaders) {
            var lineHeight = this.calculateLineHeight(headerNames, columnWidths, headerPrompts.length ? headerPrompts : headerNames);

            // Construct the header row
            for (i = 0, ln = headerNames.length; i < ln; i += 1) {
                header = headerNames[i];
                tableHeaderConfigs.push([x, y, columnWidths[header], lineHeight, String(headerPrompts.length ? headerPrompts[i] : header)]);
            }

            // Store the table header config
            this.setTableHeaderRow(tableHeaderConfigs);

            // Print the header for the start of the table
            this.printHeaderRow(1, false);
        }

        // Construct the data rows
        for (i = 0, ln = data.length; i < ln; i += 1) {
            var lineHeight;
            model = data[i];
            lineHeight = this.calculateLineHeight(headerNames, columnWidths, model);

            for (j = 0, jln = headerNames.length; j < jln; j += 1) {
                header = headerNames[j];
                this.cell(x, y, columnWidths[header], lineHeight, model[header], i + 2, header.align);
            }
        }
        this.lastCellPos = lastCellPos;
        this.table_x = x;
        this.table_y = y;
        return this;
    };
    /**
     * Calculate the height for containing the highest column
     * @param {String[]} headerNames is the header, used as keys to the data
     * @param {Integer[]} columnWidths is size of each column
     * @param {Object[]} model is the line of data we want to calculate the height of
     */
    jsPDFAPI.calculateLineHeight = function (headerNames, columnWidths, model) {
        var header,
            lineHeight = 0;
        for (var j = 0; j < headerNames.length; j++) {
            header = headerNames[j];
            model[header] = this.splitTextToSize(String(model[header]), columnWidths[header] - padding);
            var h = this.internal.getLineHeight() * model[header].length + padding;
            if (h > lineHeight) lineHeight = h;
        }
        return lineHeight;
    };

    /**
     * Store the config for outputting a table header
     * @param {Object[]} config
     * An array of cell configs that would define a header row: Each config matches the config used by jsPDFAPI.cell
     * except the ln parameter is excluded
     */
    jsPDFAPI.setTableHeaderRow = function (config) {
        this.tableHeaderRow = config;
    };

    /**
     * Output the store header row
     * @param lineNumber The line number to output the header at
     */
    jsPDFAPI.printHeaderRow = function (lineNumber, new_page) {
        if (!this.tableHeaderRow) {
            throw 'Property tableHeaderRow does not exist.';
        }

        var tableHeaderCell, tmpArray, i, ln;

        this.printingHeaderRow = true;
        if (headerFunction !== undefined) {
            var position = headerFunction(this, pages);
            setLastCellPosition(position[0], position[1], position[2], position[3], -1);
        }
        this.setFontStyle('bold');
        var tempHeaderConf = [];
        for (i = 0, ln = this.tableHeaderRow.length; i < ln; i += 1) {
            this.setFillColor(200, 200, 200);

            tableHeaderCell = this.tableHeaderRow[i];
            if (new_page) {
                this.margins.top = margin;
                tableHeaderCell[1] = this.margins && this.margins.top || 0;
                tempHeaderConf.push(tableHeaderCell);
            }
            tmpArray = [].concat(tableHeaderCell);
            this.cell.apply(this, tmpArray.concat(lineNumber));
        }
        if (tempHeaderConf.length > 0) {
            this.setTableHeaderRow(tempHeaderConf);
        }
        this.setFontStyle('normal');
        this.printingHeaderRow = false;
    };
})(jsPDF.API);

/**
 * jsPDF Context2D PlugIn Copyright (c) 2014 Steven Spungin (TwelveTone LLC) steven@twelvetone.tv
 *
 * Licensed under the MIT License. http://opensource.org/licenses/mit-license
 */

/**
 * This plugin mimics the HTML5 Canvas's context2d.
 *
 * The goal is to provide a way for current canvas implementations to print directly to a PDF.
 */

/**
 * TODO implement stroke opacity (refactor from fill() method )
 * TODO transform angle and radii parameters
 */

/**
 * require('jspdf.js'); require('lib/css_colors.js');
 */

(function (jsPDFAPI) {
    'use strict';

    jsPDFAPI.events.push(['initialized', function () {
        this.context2d.pdf = this;
        this.context2d.internal.pdf = this;
        this.context2d.ctx = new context();
        this.context2d.ctxStack = [];
        this.context2d.path = [];
    }]);

    jsPDFAPI.context2d = {
        pageWrapXEnabled: false,
        pageWrapYEnabled: false,
        pageWrapX: 9999999,
        pageWrapY: 9999999,
        ctx: new context(),
        f2: function f2(number) {
            return number.toFixed(2);
        },

        fillRect: function fillRect(x, y, w, h) {
            if (this._isFillTransparent()) {
                return;
            }
            x = this._wrapX(x);
            y = this._wrapY(y);

            var xRect = this._matrix_map_rect(this.ctx._transform, { x: x, y: y, w: w, h: h });
            this.pdf.rect(xRect.x, xRect.y, xRect.w, xRect.h, "f");
        },

        strokeRect: function strokeRect(x, y, w, h) {
            if (this._isStrokeTransparent()) {
                return;
            }
            x = this._wrapX(x);
            y = this._wrapY(y);

            var xRect = this._matrix_map_rect(this.ctx._transform, { x: x, y: y, w: w, h: h });
            this.pdf.rect(xRect.x, xRect.y, xRect.w, xRect.h, "s");
        },

        /**
         * We cannot clear PDF commands that were already written to PDF, so we use white instead. <br />
         * As a special case, read a special flag (ignoreClearRect) and do nothing if it is set.
         * This results in all calls to clearRect() to do nothing, and keep the canvas transparent.
         * This flag is stored in the save/restore context and is managed the same way as other drawing states.
         * @param x
         * @param y
         * @param w
         * @param h
         */
        clearRect: function clearRect(x, y, w, h) {
            if (this.ctx.ignoreClearRect) {
                return;
            }

            x = this._wrapX(x);
            y = this._wrapY(y);

            var xRect = this._matrix_map_rect(this.ctx._transform, { x: x, y: y, w: w, h: h });
            this.save();
            this.setFillStyle('#ffffff');
            //TODO This is hack to fill with white.
            this.pdf.rect(xRect.x, xRect.y, xRect.w, xRect.h, "f");
            this.restore();
        },

        save: function save() {
            this.ctx._fontSize = this.pdf.internal.getFontSize();
            var ctx = new context();
            ctx.copy(this.ctx);
            this.ctxStack.push(this.ctx);
            this.ctx = ctx;
        },

        restore: function restore() {
            this.ctx = this.ctxStack.pop();
            this.setFillStyle(this.ctx.fillStyle);
            this.setStrokeStyle(this.ctx.strokeStyle);
            this.setFont(this.ctx.font);
            this.pdf.setFontSize(this.ctx._fontSize);
            this.setLineCap(this.ctx.lineCap);
            this.setLineWidth(this.ctx.lineWidth);
            this.setLineJoin(this.ctx.lineJoin);
        },

        rect: function rect(x, y, w, h) {
            this.moveTo(x, y);
            this.lineTo(x + w, y);
            this.lineTo(x + w, y + h);
            this.lineTo(x, y + h);
            this.lineTo(x, y); //TODO not needed
            this.closePath();
        },

        beginPath: function beginPath() {
            this.path = [];
        },

        closePath: function closePath() {
            this.path.push({
                type: 'close'
            });
        },

        _getRgba: function _getRgba(style) {
            // get the decimal values of r, g, and b;
            var rgba = {};

            if (this.internal.rxTransparent.test(style)) {
                rgba.r = 0;
                rgba.g = 0;
                rgba.b = 0;
                rgba.a = 0;
            } else {
                var m = this.internal.rxRgb.exec(style);
                if (m != null) {
                    rgba.r = parseInt(m[1]);
                    rgba.g = parseInt(m[2]);
                    rgba.b = parseInt(m[3]);
                    rgba.a = 1;
                } else {
                    m = this.internal.rxRgba.exec(style);
                    if (m != null) {
                        rgba.r = parseInt(m[1]);
                        rgba.g = parseInt(m[2]);
                        rgba.b = parseInt(m[3]);
                        rgba.a = parseFloat(m[4]);
                    } else {
                        rgba.a = 1;
                        if (style.charAt(0) != '#') {
                            style = CssColors.colorNameToHex(style);
                            if (!style) {
                                style = '#000000';
                            }
                        } else {}

                        if (style.length === 4) {
                            rgba.r = style.substring(1, 2);
                            rgba.r += r;
                            rgba.g = style.substring(2, 3);
                            rgba.g += g;
                            rgba.b = style.substring(3, 4);
                            rgba.b += b;
                        } else {
                            rgba.r = style.substring(1, 3);
                            rgba.g = style.substring(3, 5);
                            rgba.b = style.substring(5, 7);
                        }
                        rgba.r = parseInt(rgba.r, 16);
                        rgba.g = parseInt(rgba.g, 16);
                        rgba.b = parseInt(rgba.b, 16);
                    }
                }
            }
            rgba.style = style;
            return rgba;
        },

        setFillStyle: function setFillStyle(style) {
            // get the decimal values of r, g, and b;
            var r, g, b, a;

            if (this.internal.rxTransparent.test(style)) {
                r = 0;
                g = 0;
                b = 0;
                a = 0;
            } else {
                var m = this.internal.rxRgb.exec(style);
                if (m != null) {
                    r = parseInt(m[1]);
                    g = parseInt(m[2]);
                    b = parseInt(m[3]);
                    a = 1;
                } else {
                    m = this.internal.rxRgba.exec(style);
                    if (m != null) {
                        r = parseInt(m[1]);
                        g = parseInt(m[2]);
                        b = parseInt(m[3]);
                        a = parseFloat(m[4]);
                    } else {
                        a = 1;
                        if (style.charAt(0) != '#') {
                            style = CssColors.colorNameToHex(style);
                            if (!style) {
                                style = '#000000';
                            }
                        } else {}

                        if (style.length === 4) {
                            r = style.substring(1, 2);
                            r += r;
                            g = style.substring(2, 3);
                            g += g;
                            b = style.substring(3, 4);
                            b += b;
                        } else {
                            r = style.substring(1, 3);
                            g = style.substring(3, 5);
                            b = style.substring(5, 7);
                        }
                        r = parseInt(r, 16);
                        g = parseInt(g, 16);
                        b = parseInt(b, 16);
                    }
                }
            }

            this.ctx.fillStyle = style;
            this.ctx._isFillTransparent = a == 0;
            this.ctx._fillOpacity = a;

            this.pdf.setFillColor(r, g, b, {
                a: a
            });
            this.pdf.setTextColor(r, g, b, {
                a: a
            });
        },

        setStrokeStyle: function setStrokeStyle(style) {
            var rgba = this._getRgba(style);

            this.ctx.strokeStyle = rgba.style;
            this.ctx._isStrokeTransparent = rgba.a == 0;
            this.ctx._strokeOpacity = rgba.a;

            //TODO jsPDF to handle rgba
            if (rgba.a === 0) {
                this.pdf.setDrawColor(255, 255, 255);
            } else if (rgba.a === 1) {
                this.pdf.setDrawColor(rgba.r, rgba.g, rgba.b);
            } else {
                //this.pdf.setDrawColor(rgba.r, rgba.g, rgba.b, {a: rgba.a});
                this.pdf.setDrawColor(rgba.r, rgba.g, rgba.b);
            }
        },

        fillText: function fillText(text, x, y, maxWidth) {
            if (this._isFillTransparent()) {
                return;
            }
            x = this._wrapX(x);
            y = this._wrapY(y);

            var xpt = this._matrix_map_point(this.ctx._transform, [x, y]);
            x = xpt[0];
            y = xpt[1];
            var rads = this._matrix_rotation(this.ctx._transform);
            var degs = rads * 57.2958;

            //TODO only push the clip if it has not been applied to the current PDF context
            if (this.ctx._clip_path.length > 0) {
                var lines;
                if (window.outIntercept) {
                    lines = window.outIntercept.type === 'group' ? window.outIntercept.stream : window.outIntercept;
                } else {
                    lines = this.internal.getCurrentPage();
                }
                lines.push("q");
                var origPath = this.path;
                this.path = this.ctx._clip_path;
                this.ctx._clip_path = [];
                this._fill(null, true);
                this.ctx._clip_path = this.path;
                this.path = origPath;
            }

            var scale;
            if (this.pdf.hotfix && this.pdf.hotfix.scale_text) {
                scale = this._getTransform()[0];
            } else {
                scale = 1;
            }
            // In some cases the transform was very small (5.715760606202283e-17).  Most likely a canvg rounding error.
            if (scale < .01) {
                this.pdf.text(text, x, this._getBaseline(y), null, degs);
            } else {
                var oldSize = this.pdf.internal.getFontSize();
                this.pdf.setFontSize(oldSize * scale);
                this.pdf.text(text, x, this._getBaseline(y), null, degs);
                this.pdf.setFontSize(oldSize);
            }

            if (this.ctx._clip_path.length > 0) {
                lines.push('Q');
            }
        },

        strokeText: function strokeText(text, x, y, maxWidth) {
            if (this._isStrokeTransparent()) {
                return;
            }
            x = this._wrapX(x);
            y = this._wrapY(y);

            var xpt = this._matrix_map_point(this.ctx._transform, [x, y]);
            x = xpt[0];
            y = xpt[1];
            var rads = this._matrix_rotation(this.ctx._transform);
            var degs = rads * 57.2958;

            //TODO only push the clip if it has not been applied to the current PDF context
            if (this.ctx._clip_path.length > 0) {
                var lines;
                if (window.outIntercept) {
                    lines = window.outIntercept.type === 'group' ? window.outIntercept.stream : window.outIntercept;
                } else {
                    lines = this.internal.getCurrentPage();
                }
                lines.push("q");
                var origPath = this.path;
                this.path = this.ctx._clip_path;
                this.ctx._clip_path = [];
                this._fill(null, true);
                this.ctx._clip_path = this.path;
                this.path = origPath;
            }

            var scale;
            if (this.pdf.hotfix && this.pdf.hotfix.scale_text) {
                scale = this._getTransform()[0];
            } else {
                scale = 1;
            }
            if (scale === 1) {
                this.pdf.text(text, x, this._getBaseline(y), {
                    stroke: true
                }, degs);
            } else {
                var oldSize = this.pdf.internal.getFontSize();
                this.pdf.setFontSize(oldSize * scale);
                this.pdf.text(text, x, this._getBaseline(y), {
                    stroke: true
                }, degs);
                this.pdf.setFontSize(oldSize);
            }

            if (this.ctx._clip_path.length > 0) {
                lines.push('Q');
            }
        },

        setFont: function setFont(font) {
            this.ctx.font = font;

            //var rx = /\s*(\w+)\s+(\w+)\s+(\w+)\s+([\d\.]+)(px|pt|em)\s+["']?(\w+)['"]?/;
            var rx = /\s*(\w+)\s+(\w+)\s+(\w+)\s+([\d\.]+)(px|pt|em)\s+(.*)?/;
            m = rx.exec(font);
            if (m != null) {
                var fontStyle = m[1];
                var fontVariant = m[2];
                var fontWeight = m[3];
                var fontSize = m[4];
                var fontSizeUnit = m[5];
                var fontFamily = m[6];

                if ('px' === fontSizeUnit) {
                    fontSize = Math.floor(parseFloat(fontSize));
                    // fontSize = fontSize * 1.25;
                } else if ('em' === fontSizeUnit) {
                    fontSize = Math.floor(parseFloat(fontSize) * this.pdf.getFontSize());
                } else {
                    fontSize = Math.floor(parseFloat(fontSize));
                }

                this.pdf.setFontSize(fontSize);

                if (fontWeight === 'bold' || fontWeight === '700') {
                    this.pdf.setFontStyle('bold');
                } else {
                    if (fontStyle === 'italic') {
                        this.pdf.setFontStyle('italic');
                    } else {
                        this.pdf.setFontStyle('normal');
                    }
                }

                var name = fontFamily;
                var parts = name.toLowerCase().split(/\s*,\s*/);
                var jsPdfFontName;

                if (parts.indexOf('arial') != -1) {
                    jsPdfFontName = 'Arial';
                } else if (parts.indexOf('verdana') != -1) {
                    jsPdfFontName = 'Verdana';
                } else if (parts.indexOf('helvetica') != -1) {
                    jsPdfFontName = 'Helvetica';
                } else if (parts.indexOf('sans-serif') != -1) {
                    jsPdfFontName = 'sans-serif';
                } else if (parts.indexOf('fixed') != -1) {
                    jsPdfFontName = 'Fixed';
                } else if (parts.indexOf('monospace') != -1) {
                    jsPdfFontName = 'Monospace';
                } else if (parts.indexOf('terminal') != -1) {
                    jsPdfFontName = 'Terminal';
                } else if (parts.indexOf('courier') != -1) {
                    jsPdfFontName = 'Courier';
                } else if (parts.indexOf('times') != -1) {
                    jsPdfFontName = 'Times';
                } else if (parts.indexOf('cursive') != -1) {
                    jsPdfFontName = 'Cursive';
                } else if (parts.indexOf('fantasy') != -1) {
                    jsPdfFontName = 'Fantasy';
                } else if (parts.indexOf('serif') != -1) {
                    jsPdfFontName = 'Serif';
                } else {
                    jsPdfFontName = 'Serif';
                }

                //TODO check more cases
                var style;
                if ('bold' === fontWeight) {
                    style = 'bold';
                } else {
                    style = 'normal';
                }

                this.pdf.setFont(jsPdfFontName, style);
            } else {
                var rx = /(\d+)(pt|px|em)\s+(\w+)\s*(\w+)?/;
                var m = rx.exec(font);
                if (m != null) {
                    var size = m[1];
                    var unit = m[2];
                    var name = m[3];
                    var style = m[4];
                    if (!style) {
                        style = 'normal';
                    }
                    if ('em' === fontSizeUnit) {
                        size = Math.floor(parseFloat(fontSize) * this.pdf.getFontSize());
                    } else {
                        size = Math.floor(parseFloat(size));
                    }
                    this.pdf.setFontSize(size);
                    this.pdf.setFont(name, style);
                }
            }
        },

        setTextBaseline: function setTextBaseline(baseline) {
            this.ctx.textBaseline = baseline;
        },

        getTextBaseline: function getTextBaseline() {
            return this.ctx.textBaseline;
        },

        //TODO implement textAlign
        setTextAlign: function setTextAlign(align) {
            this.ctx.textAlign = align;
        },

        getTextAlign: function getTextAlign() {
            return this.ctx.textAlign;
        },

        setLineWidth: function setLineWidth(width) {
            this.ctx.lineWidth = width;
            this.pdf.setLineWidth(width);
        },

        setLineCap: function setLineCap(style) {
            this.ctx.lineCap = style;
            this.pdf.setLineCap(style);
        },

        setLineJoin: function setLineJoin(style) {
            this.ctx.lineJoin = style;
            this.pdf.setLineJoin(style);
        },

        moveTo: function moveTo(x, y) {
            x = this._wrapX(x);
            y = this._wrapY(y);

            var xpt = this._matrix_map_point(this.ctx._transform, [x, y]);
            x = xpt[0];
            y = xpt[1];

            var obj = {
                type: 'mt',
                x: x,
                y: y
            };
            this.path.push(obj);
        },

        _wrapX: function _wrapX(x) {
            if (this.pageWrapXEnabled) {
                return x % this.pageWrapX;
            } else {
                return x;
            }
        },

        _wrapY: function _wrapY(y) {
            if (this.pageWrapYEnabled) {
                this._gotoPage(this._page(y));
                return (y - this.lastBreak) % this.pageWrapY;
            } else {
                return y;
            }
        },

        transform: function transform(a, b, c, d, e, f) {
            //TODO apply to current transformation instead of replacing
            this.ctx._transform = [a, b, c, d, e, f];
        },

        setTransform: function setTransform(a, b, c, d, e, f) {
            this.ctx._transform = [a, b, c, d, e, f];
        },

        _getTransform: function _getTransform() {
            return this.ctx._transform;
        },

        lastBreak: 0,
        // Y Position of page breaks.
        pageBreaks: [],
        // returns: One-based Page Number
        // Should only be used if pageWrapYEnabled is true
        _page: function _page(y) {
            if (this.pageWrapYEnabled) {
                this.lastBreak = 0;
                var manualBreaks = 0;
                var autoBreaks = 0;
                for (var i = 0; i < this.pageBreaks.length; i++) {
                    if (y >= this.pageBreaks[i]) {
                        manualBreaks++;
                        if (this.lastBreak === 0) {
                            autoBreaks++;
                        }
                        var spaceBetweenLastBreak = this.pageBreaks[i] - this.lastBreak;
                        this.lastBreak = this.pageBreaks[i];
                        var pagesSinceLastBreak = Math.floor(spaceBetweenLastBreak / this.pageWrapY);
                        autoBreaks += pagesSinceLastBreak;
                    }
                }
                if (this.lastBreak === 0) {
                    var pagesSinceLastBreak = Math.floor(y / this.pageWrapY) + 1;
                    autoBreaks += pagesSinceLastBreak;
                }
                return autoBreaks + manualBreaks;
            } else {
                return this.pdf.internal.getCurrentPageInfo().pageNumber;
            }
        },

        _gotoPage: function _gotoPage(pageOneBased) {
            // This is a stub to be overriden if needed
        },

        lineTo: function lineTo(x, y) {
            x = this._wrapX(x);
            y = this._wrapY(y);

            var xpt = this._matrix_map_point(this.ctx._transform, [x, y]);
            x = xpt[0];
            y = xpt[1];

            var obj = {
                type: 'lt',
                x: x,
                y: y
            };
            this.path.push(obj);
        },

        bezierCurveTo: function bezierCurveTo(x1, y1, x2, y2, x, y) {
            x1 = this._wrapX(x1);
            y1 = this._wrapY(y1);
            x2 = this._wrapX(x2);
            y2 = this._wrapY(y2);
            x = this._wrapX(x);
            y = this._wrapY(y);

            var xpt;
            xpt = this._matrix_map_point(this.ctx._transform, [x, y]);
            x = xpt[0];
            y = xpt[1];
            xpt = this._matrix_map_point(this.ctx._transform, [x1, y1]);
            x1 = xpt[0];
            y1 = xpt[1];
            xpt = this._matrix_map_point(this.ctx._transform, [x2, y2]);
            x2 = xpt[0];
            y2 = xpt[1];

            var obj = {
                type: 'bct',
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2,
                x: x,
                y: y
            };
            this.path.push(obj);
        },

        quadraticCurveTo: function quadraticCurveTo(x1, y1, x, y) {
            x1 = this._wrapX(x1);
            y1 = this._wrapY(y1);
            x = this._wrapX(x);
            y = this._wrapY(y);

            var xpt;
            xpt = this._matrix_map_point(this.ctx._transform, [x, y]);
            x = xpt[0];
            y = xpt[1];
            xpt = this._matrix_map_point(this.ctx._transform, [x1, y1]);
            x1 = xpt[0];
            y1 = xpt[1];

            var obj = {
                type: 'qct',
                x1: x1,
                y1: y1,
                x: x,
                y: y
            };
            this.path.push(obj);
        },

        arc: function arc(x, y, radius, startAngle, endAngle, anticlockwise) {
            x = this._wrapX(x);
            y = this._wrapY(y);

            if (!this._matrix_is_identity(this.ctx._transform)) {
                var xpt = this._matrix_map_point(this.ctx._transform, [x, y]);
                x = xpt[0];
                y = xpt[1];

                var x_radPt0 = this._matrix_map_point(this.ctx._transform, [0, 0]);
                var x_radPt = this._matrix_map_point(this.ctx._transform, [0, radius]);
                radius = Math.sqrt(Math.pow(x_radPt[0] - x_radPt0[0], 2) + Math.pow(x_radPt[1] - x_radPt0[1], 2));

                //TODO angles need to be transformed
            }

            var obj = {
                type: 'arc',
                x: x,
                y: y,
                radius: radius,
                startAngle: startAngle,
                endAngle: endAngle,
                anticlockwise: anticlockwise
            };
            this.path.push(obj);
        },

        drawImage: function drawImage(img, x, y, w, h, x2, y2, w2, h2) {
            if (x2 !== undefined) {
                x = x2;
                y = y2;
                w = w2;
                h = h2;
            }
            x = this._wrapX(x);
            y = this._wrapY(y);

            var xRect = this._matrix_map_rect(this.ctx._transform, { x: x, y: y, w: w, h: h });
            var xRect2 = this._matrix_map_rect(this.ctx._transform, { x: x2, y: y2, w: w2, h: h2 });

            // TODO implement source clipping and image scaling
            var format;
            var rx = /data:image\/(\w+).*/i;
            var m = rx.exec(img);
            if (m != null) {
                format = m[1];
            } else {
                // format = "jpeg";
                format = "png";
            }

            this.pdf.addImage(img, format, xRect.x, xRect.y, xRect.w, xRect.h);
        },

        /**
         * Multiply the first matrix by the second
         * @param m1
         * @param m2
         * @returns {*[]}
         * @private
         */
        _matrix_multiply: function _matrix_multiply(m2, m1) {
            var sx = m1[0];
            var shy = m1[1];
            var shx = m1[2];
            var sy = m1[3];
            var tx = m1[4];
            var ty = m1[5];

            var t0 = sx * m2[0] + shy * m2[2];
            var t2 = shx * m2[0] + sy * m2[2];
            var t4 = tx * m2[0] + ty * m2[2] + m2[4];
            shy = sx * m2[1] + shy * m2[3];
            sy = shx * m2[1] + sy * m2[3];
            ty = tx * m2[1] + ty * m2[3] + m2[5];
            sx = t0;
            shx = t2;
            tx = t4;

            return [sx, shy, shx, sy, tx, ty];
        },

        _matrix_rotation: function _matrix_rotation(m) {
            return Math.atan2(m[2], m[0]);
        },

        _matrix_decompose: function _matrix_decompose(matrix) {

            var a = matrix[0];
            var b = matrix[1];
            var c = matrix[2];
            var d = matrix[3];

            var scaleX = Math.sqrt(a * a + b * b);
            a /= scaleX;
            b /= scaleX;

            var shear = a * c + b * d;
            c -= a * shear;
            d -= b * shear;

            var scaleY = Math.sqrt(c * c + d * d);
            c /= scaleY;
            d /= scaleY;
            shear /= scaleY;

            if (a * d < b * c) {
                a = -a;
                b = -b;
                shear = -shear;
                scaleX = -scaleX;
            }

            return {
                scale: [scaleX, 0, 0, scaleY, 0, 0],
                translate: [1, 0, 0, 1, matrix[4], matrix[5]],
                rotate: [a, b, -b, a, 0, 0],
                skew: [1, 0, shear, 1, 0, 0]
            };
        },

        _matrix_map_point: function _matrix_map_point(m1, pt) {
            var sx = m1[0];
            var shy = m1[1];
            var shx = m1[2];
            var sy = m1[3];
            var tx = m1[4];
            var ty = m1[5];

            var px = pt[0];
            var py = pt[1];

            var x = px * sx + py * shx + tx;
            var y = px * shy + py * sy + ty;
            return [x, y];
        },

        _matrix_map_point_obj: function _matrix_map_point_obj(m1, pt) {
            var xpt = this._matrix_map_point(m1, [pt.x, pt.y]);
            return { x: xpt[0], y: xpt[1] };
        },

        _matrix_map_rect: function _matrix_map_rect(m1, rect) {
            var p1 = this._matrix_map_point(m1, [rect.x, rect.y]);
            var p2 = this._matrix_map_point(m1, [rect.x + rect.w, rect.y + rect.h]);
            return { x: p1[0], y: p1[1], w: p2[0] - p1[0], h: p2[1] - p1[1] };
        },

        _matrix_is_identity: function _matrix_is_identity(m1) {
            if (m1[0] != 1) {
                return false;
            }
            if (m1[1] != 0) {
                return false;
            }
            if (m1[2] != 0) {
                return false;
            }
            if (m1[3] != 1) {
                return false;
            }
            if (m1[4] != 0) {
                return false;
            }
            if (m1[5] != 0) {
                return false;
            }
            return true;
        },

        rotate: function rotate(angle) {
            var matrix = [Math.cos(angle), Math.sin(angle), -Math.sin(angle), Math.cos(angle), 0.0, 0.0];
            this.ctx._transform = this._matrix_multiply(this.ctx._transform, matrix);
        },

        scale: function scale(sx, sy) {
            var matrix = [sx, 0.0, 0.0, sy, 0.0, 0.0];
            this.ctx._transform = this._matrix_multiply(this.ctx._transform, matrix);
        },

        translate: function translate(x, y) {
            var matrix = [1.0, 0.0, 0.0, 1.0, x, y];
            this.ctx._transform = this._matrix_multiply(this.ctx._transform, matrix);
        },

        stroke: function stroke() {
            if (this.ctx._clip_path.length > 0) {

                var lines;
                if (window.outIntercept) {
                    lines = window.outIntercept.type === 'group' ? window.outIntercept.stream : window.outIntercept;
                } else {
                    lines = this.internal.getCurrentPage();
                }
                lines.push("q");

                var origPath = this.path;
                this.path = this.ctx._clip_path;
                this.ctx._clip_path = [];
                this._stroke(true);

                this.ctx._clip_path = this.path;
                this.path = origPath;
                this._stroke(false);

                lines.push("Q");
            } else {
                this._stroke(false);
            }
        },

        _stroke: function _stroke(isClip) {
            if (!isClip && this._isStrokeTransparent()) {
                return;
            }

            //TODO opacity

            var moves = [];
            var closed = false;

            var xPath = this.path;

            for (var i = 0; i < xPath.length; i++) {
                var pt = xPath[i];
                switch (pt.type) {
                    case 'mt':
                        moves.push({ start: pt, deltas: [], abs: [] });
                        break;
                    case 'lt':
                        var delta = [pt.x - xPath[i - 1].x, pt.y - xPath[i - 1].y];
                        moves[moves.length - 1].deltas.push(delta);
                        moves[moves.length - 1].abs.push(pt);
                        break;
                    case 'bct':
                        var delta = [pt.x1 - xPath[i - 1].x, pt.y1 - xPath[i - 1].y, pt.x2 - xPath[i - 1].x, pt.y2 - xPath[i - 1].y, pt.x - xPath[i - 1].x, pt.y - xPath[i - 1].y];
                        moves[moves.length - 1].deltas.push(delta);
                        break;
                    case 'qct':
                        // convert to bezier
                        var x1 = xPath[i - 1].x + 2.0 / 3.0 * (pt.x1 - xPath[i - 1].x);
                        var y1 = xPath[i - 1].y + 2.0 / 3.0 * (pt.y1 - xPath[i - 1].y);
                        var x2 = pt.x + 2.0 / 3.0 * (pt.x1 - pt.x);
                        var y2 = pt.y + 2.0 / 3.0 * (pt.y1 - pt.y);
                        var x3 = pt.x;
                        var y3 = pt.y;
                        var delta = [x1 - xPath[i - 1].x, y1 - xPath[i - 1].y, x2 - xPath[i - 1].x, y2 - xPath[i - 1].y, x3 - xPath[i - 1].x, y3 - xPath[i - 1].y];
                        moves[moves.length - 1].deltas.push(delta);
                        break;
                    case 'arc':
                        //TODO this was hack to avoid out-of-bounds issue
                        // No move-to before drawing the arc
                        if (moves.length == 0) {
                            moves.push({ start: { x: 0, y: 0 }, deltas: [], abs: [] });
                        }
                        moves[moves.length - 1].arc = true;
                        moves[moves.length - 1].abs.push(pt);
                        break;
                    case 'close':
                        closed = true;
                        break;
                }
            }

            for (var i = 0; i < moves.length; i++) {
                var style;
                if (i == moves.length - 1) {
                    style = 's';
                } else {
                    style = null;
                }
                if (moves[i].arc) {
                    var arcs = moves[i].abs;
                    for (var ii = 0; ii < arcs.length; ii++) {
                        var arc = arcs[ii];
                        var start = arc.startAngle * 360 / (2 * Math.PI);
                        var end = arc.endAngle * 360 / (2 * Math.PI);
                        var x = arc.x;
                        var y = arc.y;
                        this.internal.arc2(this, x, y, arc.radius, start, end, arc.anticlockwise, style, isClip);
                    }
                } else {
                    var x = moves[i].start.x;
                    var y = moves[i].start.y;
                    if (!isClip) {
                        this.pdf.lines(moves[i].deltas, x, y, null, style);
                    } else {
                        this.pdf.lines(moves[i].deltas, x, y, null, null);
                        this.pdf.clip_fixed();
                    }
                }
            }
        },

        _isFillTransparent: function _isFillTransparent() {
            return this.ctx._isFillTransparent || this.globalAlpha == 0;
        },

        _isStrokeTransparent: function _isStrokeTransparent() {
            return this.ctx._isStrokeTransparent || this.globalAlpha == 0;
        },

        fill: function fill(fillRule) {
            //evenodd or nonzero (default)
            if (this.ctx._clip_path.length > 0) {

                var lines;
                if (window.outIntercept) {
                    lines = window.outIntercept.type === 'group' ? window.outIntercept.stream : window.outIntercept;
                } else {
                    lines = this.internal.getCurrentPage();
                }
                lines.push("q");

                var origPath = this.path;
                this.path = this.ctx._clip_path;
                this.ctx._clip_path = [];
                this._fill(fillRule, true);

                this.ctx._clip_path = this.path;
                this.path = origPath;
                this._fill(fillRule, false);

                lines.push('Q');
            } else {
                this._fill(fillRule, false);
            }
        },

        _fill: function _fill(fillRule, isClip) {
            if (this._isFillTransparent()) {
                return;
            }
            var v2Support = typeof this.pdf.internal.newObject2 === 'function';

            var lines;
            if (window.outIntercept) {
                lines = window.outIntercept.type === 'group' ? window.outIntercept.stream : window.outIntercept;
            } else {
                lines = this.internal.getCurrentPage();
            }

            // if (this.ctx._clip_path.length > 0) {
            //     lines.push('q');
            //     var oldPath = this.path;
            //     this.path = this.ctx._clip_path;
            //     this.ctx._clip_path = [];
            //     this._fill(fillRule, true);
            //     this.ctx._clip_path = this.path;
            //     this.path = oldPath;
            // }

            var moves = [];
            var outInterceptOld = window.outIntercept;

            if (v2Support) {
                // Blend and Mask
                switch (this.ctx.globalCompositeOperation) {
                    case 'normal':
                    case 'source-over':
                        break;
                    case 'destination-in':
                    case 'destination-out':
                        //TODO this need to be added to the current group or page
                        // define a mask stream
                        var obj = this.pdf.internal.newStreamObject();

                        // define a mask state
                        var obj2 = this.pdf.internal.newObject2();
                        obj2.push('<</Type /ExtGState');
                        obj2.push('/SMask <</S /Alpha /G ' + obj.objId + ' 0 R>>'); // /S /Luminosity will need to define color space
                        obj2.push('>>');

                        // add mask to page resources
                        var gsName = 'MASK' + obj2.objId;
                        this.pdf.internal.addGraphicsState(gsName, obj2.objId);

                        var instruction = '/' + gsName + ' gs';
                        // add mask to page, group, or stream
                        lines.splice(0, 0, 'q');
                        lines.splice(1, 0, instruction);
                        lines.push('Q');

                        window.outIntercept = obj;
                        break;
                    default:
                        var dictionaryEntry = '/' + this.pdf.internal.blendModeMap[this.ctx.globalCompositeOperation.toUpperCase()];
                        if (dictionaryEntry) {
                            this.pdf.internal.out(dictionaryEntry + ' gs');
                        }
                        break;
                }
            }

            var alpha = this.ctx.globalAlpha;
            if (this.ctx._fillOpacity < 1) {
                // TODO combine this with global opacity
                alpha = this.ctx._fillOpacity;
            }

            //TODO check for an opacity graphics state that was already created
            //TODO do not set opacity if current value is already active
            if (v2Support) {
                var objOpac = this.pdf.internal.newObject2();
                objOpac.push('<</Type /ExtGState');
                //objOpac.push(this.ctx.globalAlpha + " CA"); // Stroke
                //objOpac.push(this.ctx.globalAlpha + " ca"); // Not Stroke
                objOpac.push('/CA ' + alpha); // Stroke
                objOpac.push('/ca ' + alpha); // Not Stroke
                objOpac.push('>>');
                var gsName = 'GS_O_' + objOpac.objId;
                this.pdf.internal.addGraphicsState(gsName, objOpac.objId);
                this.pdf.internal.out('/' + gsName + ' gs');
            }

            var xPath = this.path;

            for (var i = 0; i < xPath.length; i++) {
                var pt = xPath[i];
                switch (pt.type) {
                    case 'mt':
                        moves.push({ start: pt, deltas: [], abs: [] });
                        break;
                    case 'lt':
                        var delta = [pt.x - xPath[i - 1].x, pt.y - xPath[i - 1].y];
                        moves[moves.length - 1].deltas.push(delta);
                        moves[moves.length - 1].abs.push(pt);
                        break;
                    case 'bct':
                        var delta = [pt.x1 - xPath[i - 1].x, pt.y1 - xPath[i - 1].y, pt.x2 - xPath[i - 1].x, pt.y2 - xPath[i - 1].y, pt.x - xPath[i - 1].x, pt.y - xPath[i - 1].y];
                        moves[moves.length - 1].deltas.push(delta);
                        break;
                    case 'qct':
                        // convert to bezier
                        var x1 = xPath[i - 1].x + 2.0 / 3.0 * (pt.x1 - xPath[i - 1].x);
                        var y1 = xPath[i - 1].y + 2.0 / 3.0 * (pt.y1 - xPath[i - 1].y);
                        var x2 = pt.x + 2.0 / 3.0 * (pt.x1 - pt.x);
                        var y2 = pt.y + 2.0 / 3.0 * (pt.y1 - pt.y);
                        var x3 = pt.x;
                        var y3 = pt.y;
                        var delta = [x1 - xPath[i - 1].x, y1 - xPath[i - 1].y, x2 - xPath[i - 1].x, y2 - xPath[i - 1].y, x3 - xPath[i - 1].x, y3 - xPath[i - 1].y];
                        moves[moves.length - 1].deltas.push(delta);
                        break;
                    case 'arc':
                        //TODO this was hack to avoid out-of-bounds issue when drawing circle
                        // No move-to before drawing the arc
                        if (moves.length === 0) {
                            moves.push({ deltas: [], abs: [] });
                        }
                        moves[moves.length - 1].arc = true;
                        moves[moves.length - 1].abs.push(pt);
                        break;
                    case 'close':
                        moves.push({ close: true });
                        break;
                }
            }

            for (var i = 0; i < moves.length; i++) {
                var style;
                if (i == moves.length - 1) {
                    style = 'f';
                    if (fillRule === 'evenodd') {
                        style += '*';
                    }
                } else {
                    style = null;
                }

                if (moves[i].close) {
                    this.pdf.internal.out('h');
                    this.pdf.internal.out('f');
                } else if (moves[i].arc) {
                    if (moves[i].start) {
                        this.internal.move2(this, moves[i].start.x, moves[i].start.y);
                    }
                    var arcs = moves[i].abs;
                    for (var ii = 0; ii < arcs.length; ii++) {
                        var arc = arcs[ii];
                        //TODO lines deltas were getting in here
                        if (typeof arc.startAngle !== 'undefined') {
                            var start = arc.startAngle * 360 / (2 * Math.PI);
                            var end = arc.endAngle * 360 / (2 * Math.PI);
                            var x = arc.x;
                            var y = arc.y;
                            if (ii === 0) {
                                this.internal.move2(this, x, y);
                            }
                            this.internal.arc2(this, x, y, arc.radius, start, end, arc.anticlockwise, null, isClip);
                            if (ii === arcs.length - 1) {
                                // The original arc move did not occur because of the algorithm
                                if (moves[i].start) {
                                    var x = moves[i].start.x;
                                    var y = moves[i].start.y;
                                    this.internal.line2(c2d, x, y);
                                }
                            }
                        } else {
                            this.internal.line2(c2d, arc.x, arc.y);
                        }
                    }
                } else {
                    var x = moves[i].start.x;
                    var y = moves[i].start.y;
                    if (!isClip) {
                        this.pdf.lines(moves[i].deltas, x, y, null, style);
                    } else {
                        this.pdf.lines(moves[i].deltas, x, y, null, null);
                        this.pdf.clip_fixed();
                    }
                }
            }

            window.outIntercept = outInterceptOld;

            // if (this.ctx._clip_path.length > 0) {
            //     lines.push('Q');
            // }
        },

        pushMask: function pushMask() {
            var v2Support = typeof this.pdf.internal.newObject2 === 'function';

            if (!v2Support) {
                console.log('jsPDF v2 not enabled');
                return;
            }

            // define a mask stream
            var obj = this.pdf.internal.newStreamObject();

            // define a mask state
            var obj2 = this.pdf.internal.newObject2();
            obj2.push('<</Type /ExtGState');
            obj2.push('/SMask <</S /Alpha /G ' + obj.objId + ' 0 R>>'); // /S /Luminosity will need to define color space
            obj2.push('>>');

            // add mask to page resources
            var gsName = 'MASK' + obj2.objId;
            this.pdf.internal.addGraphicsState(gsName, obj2.objId);

            var instruction = '/' + gsName + ' gs';
            this.pdf.internal.out(instruction);
        },

        clip: function clip() {
            //TODO do we reset the path, or just copy it?
            if (this.ctx._clip_path.length > 0) {
                for (var i = 0; i < this.path.length; i++) {
                    this.ctx._clip_path.push(this.path[i]);
                }
            } else {
                this.ctx._clip_path = this.path;
            }
            this.path = [];
        },

        measureText: function measureText(text) {
            var pdf = this.pdf;
            return {
                getWidth: function getWidth() {
                    var fontSize = pdf.internal.getFontSize();
                    var txtWidth = pdf.getStringUnitWidth(text) * fontSize / pdf.internal.scaleFactor;
                    // Convert points to pixels
                    txtWidth *= 1.3333;
                    return txtWidth;
                },

                get width() {
                    return this.getWidth(text);
                }
            };
        },
        _getBaseline: function _getBaseline(y) {
            var height = parseInt(this.pdf.internal.getFontSize());
            // TODO Get descent from font descriptor
            var descent = height * .25;
            switch (this.ctx.textBaseline) {
                case 'bottom':
                    return y - descent;
                case 'top':
                    return y + height;
                case 'hanging':
                    return y + height - descent;
                case 'middle':
                    return y + height / 2 - descent;
                case 'ideographic':
                    // TODO not implemented
                    return y;
                case 'alphabetic':
                default:
                    return y;
            }
        }
    };

    var c2d = jsPDFAPI.context2d;

    // accessor methods
    Object.defineProperty(c2d, 'fillStyle', {
        set: function set(value) {
            this.setFillStyle(value);
        },
        get: function get() {
            return this.ctx.fillStyle;
        }
    });
    Object.defineProperty(c2d, 'strokeStyle', {
        set: function set(value) {
            this.setStrokeStyle(value);
        },
        get: function get() {
            return this.ctx.strokeStyle;
        }
    });
    Object.defineProperty(c2d, 'lineWidth', {
        set: function set(value) {
            this.setLineWidth(value);
        },
        get: function get() {
            return this.ctx.lineWidth;
        }
    });
    Object.defineProperty(c2d, 'lineCap', {
        set: function set(val) {
            this.setLineCap(val);
        },
        get: function get() {
            return this.ctx.lineCap;
        }
    });
    Object.defineProperty(c2d, 'lineJoin', {
        set: function set(val) {
            this.setLineJoin(val);
        },
        get: function get() {
            return this.ctx.lineJoin;
        }
    });
    Object.defineProperty(c2d, 'miterLimit', {
        set: function set(val) {
            this.ctx.miterLimit = val;
        },
        get: function get() {
            return this.ctx.miterLimit;
        }
    });
    Object.defineProperty(c2d, 'textBaseline', {
        set: function set(value) {
            this.setTextBaseline(value);
        },
        get: function get() {
            return this.getTextBaseline();
        }
    });
    Object.defineProperty(c2d, 'textAlign', {
        set: function set(value) {
            this.setTextAlign(value);
        },
        get: function get() {
            return this.getTextAlign();
        }
    });
    Object.defineProperty(c2d, 'font', {
        set: function set(value) {
            this.setFont(value);
        },
        get: function get() {
            return this.ctx.font;
        }
    });
    Object.defineProperty(c2d, 'globalCompositeOperation', {
        set: function set(value) {
            this.ctx.globalCompositeOperation = value;
        },
        get: function get() {
            return this.ctx.globalCompositeOperation;
        }
    });
    Object.defineProperty(c2d, 'globalAlpha', {
        set: function set(value) {
            this.ctx.globalAlpha = value;
        },
        get: function get() {
            return this.ctx.globalAlpha;
        }
    });
    // Not HTML API
    Object.defineProperty(c2d, 'ignoreClearRect', {
        set: function set(value) {
            this.ctx.ignoreClearRect = value;
        },
        get: function get() {
            return this.ctx.ignoreClearRect;
        }
    });
    // End Not HTML API

    c2d.internal = {};

    c2d.internal.rxRgb = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/;
    c2d.internal.rxRgba = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/;
    c2d.internal.rxTransparent = /transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/;

    // http://hansmuller-flex.blogspot.com/2011/10/more-about-approximating-circular-arcs.html
    c2d.internal.arc = function (c2d, xc, yc, r, a1, a2, anticlockwise, style) {
        var includeMove = true;

        var k = this.pdf.internal.scaleFactor;
        var pageHeight = this.pdf.internal.pageSize.height;
        var f2 = this.pdf.internal.f2;

        var a1r = a1 * (Math.PI / 180);
        var a2r = a2 * (Math.PI / 180);
        var curves = this.createArc(r, a1r, a2r, anticlockwise);
        var pathData = null;

        for (var i = 0; i < curves.length; i++) {
            var curve = curves[i];
            if (includeMove && i === 0) {
                this.pdf.internal.out([f2((curve.x1 + xc) * k), f2((pageHeight - (curve.y1 + yc)) * k), 'm', f2((curve.x2 + xc) * k), f2((pageHeight - (curve.y2 + yc)) * k), f2((curve.x3 + xc) * k), f2((pageHeight - (curve.y3 + yc)) * k), f2((curve.x4 + xc) * k), f2((pageHeight - (curve.y4 + yc)) * k), 'c'].join(' '));
            } else {
                this.pdf.internal.out([f2((curve.x2 + xc) * k), f2((pageHeight - (curve.y2 + yc)) * k), f2((curve.x3 + xc) * k), f2((pageHeight - (curve.y3 + yc)) * k), f2((curve.x4 + xc) * k), f2((pageHeight - (curve.y4 + yc)) * k), 'c'].join(' '));
            }

            //c2d._lastPoint = {x: curve.x1 + xc, y: curve.y1 + yc};
            c2d._lastPoint = { x: xc, y: yc };
            // f2((curve.x1 + xc) * k), f2((pageHeight - (curve.y1 + yc)) * k), 'm', f2((curve.x2 + xc) * k), f2((pageHeight - (curve.y2 + yc)) * k), f2((curve.x3 + xc) * k), f2((pageHeight - (curve.y3 + yc)) * k), f2((curve.x4 + xc) * k), f2((pageHeight - (curve.y4 + yc)) * k), 'c'
        }

        if (style !== null) {
            this.pdf.internal.out(this.pdf.internal.getStyle(style));
        }
    };

    /**
     *
     * @param x Edge point X
     * @param y Edge point Y
     * @param r Radius
     * @param a1 start angle
     * @param a2 end angle
     * @param anticlockwise
     * @param style
     * @param isClip
     */
    c2d.internal.arc2 = function (c2d, x, y, r, a1, a2, anticlockwise, style, isClip) {
        // we need to convert from cartesian to polar here methinks.
        var centerX = x; // + r;
        var centerY = y;

        if (!isClip) {
            this.arc(c2d, centerX, centerY, r, a1, a2, anticlockwise, style);
        } else {
            this.arc(c2d, centerX, centerY, r, a1, a2, anticlockwise, null);
            this.pdf.clip_fixed();
        }
    };

    c2d.internal.move2 = function (c2d, x, y) {
        var k = this.pdf.internal.scaleFactor;
        var pageHeight = this.pdf.internal.pageSize.height;
        var f2 = this.pdf.internal.f2;

        this.pdf.internal.out([f2(x * k), f2((pageHeight - y) * k), 'm'].join(' '));
        c2d._lastPoint = { x: x, y: y };
    };

    c2d.internal.line2 = function (c2d, dx, dy) {
        var k = this.pdf.internal.scaleFactor;
        var pageHeight = this.pdf.internal.pageSize.height;
        var f2 = this.pdf.internal.f2;

        //var pt = {x: c2d._lastPoint.x + dx, y: c2d._lastPoint.y + dy};
        var pt = { x: dx, y: dy };

        this.pdf.internal.out([f2(pt.x * k), f2((pageHeight - pt.y) * k), 'l'].join(' '));
        //this.pdf.internal.out('f');
        c2d._lastPoint = pt;
    };

    /**
     * Return a array of objects that represent bezier curves which approximate the circular arc centered at the origin, from startAngle to endAngle (radians) with the specified radius.
     *
     * Each bezier curve is an object with four points, where x1,y1 and x4,y4 are the arc's end points and x2,y2 and x3,y3 are the cubic bezier's control points.
     */

    c2d.internal.createArc = function (radius, startAngle, endAngle, anticlockwise) {
        var EPSILON = 0.00001; // Roughly 1/1000th of a degree, see below
        var twoPI = Math.PI * 2;
        var piOverTwo = Math.PI / 2.0;

        // normalize startAngle, endAngle to [0, 2PI]
        var startAngleN = startAngle;
        if (startAngleN < twoPI || startAngleN > twoPI) {
            startAngleN = startAngleN % twoPI;
        }
        if (startAngleN < 0) {
            startAngleN = twoPI + startAngleN;
        }

        while (startAngle > endAngle) {
            startAngle = startAngle - twoPI;
        }
        var totalAngle = Math.abs(endAngle - startAngle);
        if (totalAngle < twoPI) {
            if (anticlockwise) {
                totalAngle = twoPI - totalAngle;
            }
        }

        // Compute the sequence of arc curves, up to PI/2 at a time.
        var curves = [];
        var sgn = anticlockwise ? -1 : +1;

        var a1 = startAngleN;
        for (; totalAngle > EPSILON;) {
            var remain = sgn * Math.min(totalAngle, piOverTwo);
            var a2 = a1 + remain;
            curves.push(this.createSmallArc(radius, a1, a2));
            totalAngle -= Math.abs(a2 - a1);
            a1 = a2;
        }

        return curves;
    };

    c2d.internal.getCurrentPage = function () {
        return this.pdf.internal.pages[this.pdf.internal.getCurrentPageInfo().pageNumber];
    };

    /**
     * Cubic bezier approximation of a circular arc centered at the origin, from (radians) a1 to a2, where a2-a1 < pi/2. The arc's radius is r.
     *
     * Returns an object with four points, where x1,y1 and x4,y4 are the arc's end points and x2,y2 and x3,y3 are the cubic bezier's control points.
     *
     * This algorithm is based on the approach described in: A. Riškus, "Approximation of a Cubic Bezier Curve by Circular Arcs and Vice Versa," Information Technology and Control, 35(4), 2006 pp. 371-378.
     */

    c2d.internal.createSmallArc = function (r, a1, a2) {
        // Compute all four points for an arc that subtends the same total angle
        // but is centered on the X-axis

        var a = (a2 - a1) / 2.0;

        var x4 = r * Math.cos(a);
        var y4 = r * Math.sin(a);
        var x1 = x4;
        var y1 = -y4;

        var q1 = x1 * x1 + y1 * y1;
        var q2 = q1 + x1 * x4 + y1 * y4;
        var k2 = 4 / 3 * (Math.sqrt(2 * q1 * q2) - q2) / (x1 * y4 - y1 * x4);

        var x2 = x1 - k2 * y1;
        var y2 = y1 + k2 * x1;
        var x3 = x2;
        var y3 = -y2;

        // Find the arc points' actual locations by computing x1,y1 and x4,y4
        // and rotating the control points by a + a1

        var ar = a + a1;
        var cos_ar = Math.cos(ar);
        var sin_ar = Math.sin(ar);

        return {
            x1: r * Math.cos(a1),
            y1: r * Math.sin(a1),
            x2: x2 * cos_ar - y2 * sin_ar,
            y2: x2 * sin_ar + y2 * cos_ar,
            x3: x3 * cos_ar - y3 * sin_ar,
            y3: x3 * sin_ar + y3 * cos_ar,
            x4: r * Math.cos(a2),
            y4: r * Math.sin(a2)
        };
    };

    function context() {
        this._isStrokeTransparent = false;
        this._strokeOpacity = 1;
        this.strokeStyle = '#000000';
        this.fillStyle = '#000000';
        this._isFillTransparent = false;
        this._fillOpacity = 1;
        this.font = "12pt times";
        this.textBaseline = 'alphabetic'; // top,bottom,middle,ideographic,alphabetic,hanging
        this.textAlign = 'start';
        this.lineWidth = 1;
        this.lineJoin = 'miter'; // round, bevel, miter
        this.lineCap = 'butt'; // butt, round, square
        this._transform = [1, 0, 0, 1, 0, 0]; // sx, shy, shx, sy, tx, ty
        this.globalCompositeOperation = 'normal';
        this.globalAlpha = 1.0;
        this._clip_path = [];
        // TODO miter limit //default 10

        // Not HTML API
        this.ignoreClearRect = false;

        this.copy = function (ctx) {
            this._isStrokeTransparent = ctx._isStrokeTransparent;
            this._strokeOpacity = ctx._strokeOpacity;
            this.strokeStyle = ctx.strokeStyle;
            this._isFillTransparent = ctx._isFillTransparent;
            this._fillOpacity = ctx._fillOpacity;
            this.fillStyle = ctx.fillStyle;
            this.font = ctx.font;
            this.lineWidth = ctx.lineWidth;
            this.lineJoin = ctx.lineJoin;
            this.lineCap = ctx.lineCap;
            this.textBaseline = ctx.textBaseline;
            this.textAlign = ctx.textAlign;
            this._fontSize = ctx._fontSize;
            this._transform = ctx._transform.slice(0);
            this.globalCompositeOperation = ctx.globalCompositeOperation;
            this.globalAlpha = ctx.globalAlpha;
            this._clip_path = ctx._clip_path.slice(0); //TODO deep copy?

            // Not HTML API
            this.ignoreClearRect = ctx.ignoreClearRect;
        };
    }

    return this;
})(jsPDF.API);

/** @preserve
 * jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser
 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Daniel Husar, https://github.com/danielhusar
 *               2014 Wolfgang Gassler, https://github.com/woolfg
 *               2014 Steven Spungin, https://github.com/flamenco
 *
 * 
 * ====================================================================
 */

(function (jsPDFAPI) {
	var clone, _DrillForContent, FontNameDB, FontStyleMap, TextAlignMap, FontWeightMap, FloatMap, ClearMap, GetCSS, PurgeWhiteSpace, Renderer, ResolveFont, ResolveUnitedNumber, UnitedNumberMap, elementHandledElsewhere, images, loadImgs, checkForFooter, process, tableToJson;
	clone = function () {
		return function (obj) {
			Clone.prototype = obj;
			return new Clone();
		};
		function Clone() {}
	}();
	PurgeWhiteSpace = function PurgeWhiteSpace(array) {
		var fragment, i, l, lTrimmed, r, rTrimmed, trailingSpace;
		i = 0;
		l = array.length;
		fragment = void 0;
		lTrimmed = false;
		rTrimmed = false;
		while (!lTrimmed && i !== l) {
			fragment = array[i] = array[i].trimLeft();
			if (fragment) {
				lTrimmed = true;
			}
			i++;
		}
		i = l - 1;
		while (l && !rTrimmed && i !== -1) {
			fragment = array[i] = array[i].trimRight();
			if (fragment) {
				rTrimmed = true;
			}
			i--;
		}
		r = /\s+$/g;
		trailingSpace = true;
		i = 0;
		while (i !== l) {
			// Leave the line breaks intact
			if (array[i] != "\u2028") {
				fragment = array[i].replace(/\s+/g, " ");
				if (trailingSpace) {
					fragment = fragment.trimLeft();
				}
				if (fragment) {
					trailingSpace = r.test(fragment);
				}
				array[i] = fragment;
			}
			i++;
		}
		return array;
	};
	Renderer = function Renderer(pdf, x, y, settings) {
		this.pdf = pdf;
		this.x = x;
		this.y = y;
		this.settings = settings;
		//list of functions which are called after each element-rendering process
		this.watchFunctions = [];
		this.init();
		return this;
	};
	ResolveFont = function ResolveFont(css_font_family_string) {
		var name, part, parts;
		name = void 0;
		parts = css_font_family_string.split(",");
		part = parts.shift();
		while (!name && part) {
			name = FontNameDB[part.trim().toLowerCase()];
			part = parts.shift();
		}
		return name;
	};
	ResolveUnitedNumber = function ResolveUnitedNumber(css_line_height_string) {

		//IE8 issues
		css_line_height_string = css_line_height_string === "auto" ? "0px" : css_line_height_string;
		if (css_line_height_string.indexOf("em") > -1 && !isNaN(Number(css_line_height_string.replace("em", "")))) {
			css_line_height_string = Number(css_line_height_string.replace("em", "")) * 18.719 + "px";
		}
		if (css_line_height_string.indexOf("pt") > -1 && !isNaN(Number(css_line_height_string.replace("pt", "")))) {
			css_line_height_string = Number(css_line_height_string.replace("pt", "")) * 1.333 + "px";
		}

		var normal, undef, value;
		undef = void 0;
		normal = 16.00;
		value = UnitedNumberMap[css_line_height_string];
		if (value) {
			return value;
		}
		value = {
			"xx-small": 9,
			"x-small": 11,
			small: 13,
			medium: 16,
			large: 19,
			"x-large": 23,
			"xx-large": 28,
			auto: 0
		}[{ css_line_height_string: css_line_height_string }];

		if (value !== undef) {
			return UnitedNumberMap[css_line_height_string] = value / normal;
		}
		if (value = parseFloat(css_line_height_string)) {
			return UnitedNumberMap[css_line_height_string] = value / normal;
		}
		value = css_line_height_string.match(/([\d\.]+)(px)/);
		if (value.length === 3) {
			return UnitedNumberMap[css_line_height_string] = parseFloat(value[1]) / normal;
		}
		return UnitedNumberMap[css_line_height_string] = 1;
	};
	GetCSS = function GetCSS(element) {
		var css, tmp, computedCSSElement;
		computedCSSElement = function (el) {
			var compCSS;
			compCSS = function (el) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					return document.defaultView.getComputedStyle(el, null);
				} else if (el.currentStyle) {
					return el.currentStyle;
				} else {
					return el.style;
				}
			}(el);
			return function (prop) {
				prop = prop.replace(/-\D/g, function (match) {
					return match.charAt(1).toUpperCase();
				});
				return compCSS[prop];
			};
		}(element);
		css = {};
		tmp = void 0;
		css["font-family"] = ResolveFont(computedCSSElement("font-family")) || "times";
		css["font-style"] = FontStyleMap[computedCSSElement("font-style")] || "normal";
		css["text-align"] = TextAlignMap[computedCSSElement("text-align")] || "left";
		tmp = FontWeightMap[computedCSSElement("font-weight")] || "normal";
		if (tmp === "bold") {
			if (css["font-style"] === "normal") {
				css["font-style"] = tmp;
			} else {
				css["font-style"] = tmp + css["font-style"];
			}
		}
		css["font-size"] = ResolveUnitedNumber(computedCSSElement("font-size")) || 1;
		css["line-height"] = ResolveUnitedNumber(computedCSSElement("line-height")) || 1;
		css["display"] = computedCSSElement("display") === "inline" ? "inline" : "block";

		tmp = css["display"] === "block";
		css["margin-top"] = tmp && ResolveUnitedNumber(computedCSSElement("margin-top")) || 0;
		css["margin-bottom"] = tmp && ResolveUnitedNumber(computedCSSElement("margin-bottom")) || 0;
		css["padding-top"] = tmp && ResolveUnitedNumber(computedCSSElement("padding-top")) || 0;
		css["padding-bottom"] = tmp && ResolveUnitedNumber(computedCSSElement("padding-bottom")) || 0;
		css["margin-left"] = tmp && ResolveUnitedNumber(computedCSSElement("margin-left")) || 0;
		css["margin-right"] = tmp && ResolveUnitedNumber(computedCSSElement("margin-right")) || 0;
		css["padding-left"] = tmp && ResolveUnitedNumber(computedCSSElement("padding-left")) || 0;
		css["padding-right"] = tmp && ResolveUnitedNumber(computedCSSElement("padding-right")) || 0;

		css["page-break-before"] = computedCSSElement("page-break-before") || "auto";

		//float and clearing of floats
		css["float"] = FloatMap[computedCSSElement("cssFloat")] || "none";
		css["clear"] = ClearMap[computedCSSElement("clear")] || "none";

		css["color"] = computedCSSElement("color");

		return css;
	};
	elementHandledElsewhere = function elementHandledElsewhere(element, renderer, elementHandlers) {
		var handlers, i, isHandledElsewhere, l, t;
		isHandledElsewhere = false;
		i = void 0;
		l = void 0;
		t = void 0;
		handlers = elementHandlers["#" + element.id];
		if (handlers) {
			if (typeof handlers === "function") {
				isHandledElsewhere = handlers(element, renderer);
			} else {
				i = 0;
				l = handlers.length;
				while (!isHandledElsewhere && i !== l) {
					isHandledElsewhere = handlers[i](element, renderer);
					i++;
				}
			}
		}
		handlers = elementHandlers[element.nodeName];
		if (!isHandledElsewhere && handlers) {
			if (typeof handlers === "function") {
				isHandledElsewhere = handlers(element, renderer);
			} else {
				i = 0;
				l = handlers.length;
				while (!isHandledElsewhere && i !== l) {
					isHandledElsewhere = handlers[i](element, renderer);
					i++;
				}
			}
		}
		return isHandledElsewhere;
	};
	tableToJson = function tableToJson(table, renderer) {
		var data, headers, i, j, rowData, tableRow, table_obj, table_with, cell, l;
		data = [];
		headers = [];
		i = 0;
		l = table.rows[0].cells.length;
		table_with = table.clientWidth;
		while (i < l) {
			cell = table.rows[0].cells[i];
			headers[i] = {
				name: cell.textContent.toLowerCase().replace(/\s+/g, ''),
				prompt: cell.textContent.replace(/\r?\n/g, ''),
				width: cell.clientWidth / table_with * renderer.pdf.internal.pageSize.width
			};
			i++;
		}
		i = 1;
		while (i < table.rows.length) {
			tableRow = table.rows[i];
			rowData = {};
			j = 0;
			while (j < tableRow.cells.length) {
				rowData[headers[j].name] = tableRow.cells[j].textContent.replace(/\r?\n/g, '');
				j++;
			}
			data.push(rowData);
			i++;
		}
		return table_obj = {
			rows: data,
			headers: headers
		};
	};
	var SkipNode = {
		SCRIPT: 1,
		STYLE: 1,
		NOSCRIPT: 1,
		OBJECT: 1,
		EMBED: 1,
		SELECT: 1
	};
	var listCount = 1;
	_DrillForContent = function DrillForContent(element, renderer, elementHandlers) {
		var cn, cns, fragmentCSS, i, isBlock, l, px2pt, table2json, cb;
		cns = element.childNodes;
		cn = void 0;
		fragmentCSS = GetCSS(element);
		isBlock = fragmentCSS.display === "block";
		if (isBlock) {
			renderer.setBlockBoundary();
			renderer.setBlockStyle(fragmentCSS);
		}
		px2pt = 0.264583 * 72 / 25.4;
		i = 0;
		l = cns.length;
		while (i < l) {
			cn = cns[i];
			if ((typeof cn === "undefined" ? "undefined" : _typeof(cn)) === "object") {

				//execute all watcher functions to e.g. reset floating
				renderer.executeWatchFunctions(cn);

				/*** HEADER rendering **/
				if (cn.nodeType === 1 && cn.nodeName === 'HEADER') {
					var header = cn;
					//store old top margin
					var oldMarginTop = renderer.pdf.margins_doc.top;
					//subscribe for new page event and render header first on every page
					renderer.pdf.internal.events.subscribe('addPage', function (pageInfo) {
						//set current y position to old margin
						renderer.y = oldMarginTop;
						//render all child nodes of the header element
						_DrillForContent(header, renderer, elementHandlers);
						//set margin to old margin + rendered header + 10 space to prevent overlapping
						//important for other plugins (e.g. table) to start rendering at correct position after header
						renderer.pdf.margins_doc.top = renderer.y + 10;
						renderer.y += 10;
					}, false);
				}

				if (cn.nodeType === 8 && cn.nodeName === "#comment") {
					if (~cn.textContent.indexOf("ADD_PAGE")) {
						renderer.pdf.addPage();
						renderer.y = renderer.pdf.margins_doc.top;
					}
				} else if (cn.nodeType === 1 && !SkipNode[cn.nodeName]) {
					/*** IMAGE RENDERING ***/
					var cached_image;
					if (cn.nodeName === "IMG") {
						var url = cn.getAttribute("src");
						cached_image = images[renderer.pdf.sHashCode(url) || url];
					}
					if (cached_image) {
						if (renderer.pdf.internal.pageSize.height - renderer.pdf.margins_doc.bottom < renderer.y + cn.height && renderer.y > renderer.pdf.margins_doc.top) {
							renderer.pdf.addPage();
							renderer.y = renderer.pdf.margins_doc.top;
							//check if we have to set back some values due to e.g. header rendering for new page
							renderer.executeWatchFunctions(cn);
						}

						var imagesCSS = GetCSS(cn);
						var imageX = renderer.x;
						var fontToUnitRatio = 12 / renderer.pdf.internal.scaleFactor;

						//define additional paddings, margins which have to be taken into account for margin calculations
						var additionalSpaceLeft = (imagesCSS["margin-left"] + imagesCSS["padding-left"]) * fontToUnitRatio;
						var additionalSpaceRight = (imagesCSS["margin-right"] + imagesCSS["padding-right"]) * fontToUnitRatio;
						var additionalSpaceTop = (imagesCSS["margin-top"] + imagesCSS["padding-top"]) * fontToUnitRatio;
						var additionalSpaceBottom = (imagesCSS["margin-bottom"] + imagesCSS["padding-bottom"]) * fontToUnitRatio;

						//if float is set to right, move the image to the right border
						//add space if margin is set
						if (imagesCSS['float'] !== undefined && imagesCSS['float'] === 'right') {
							imageX += renderer.settings.width - cn.width - additionalSpaceRight;
						} else {
							imageX += additionalSpaceLeft;
						}

						renderer.pdf.addImage(cached_image, imageX, renderer.y + additionalSpaceTop, cn.width, cn.height);
						cached_image = undefined;
						//if the float prop is specified we have to float the text around the image
						if (imagesCSS['float'] === 'right' || imagesCSS['float'] === 'left') {
							//add functiont to set back coordinates after image rendering
							renderer.watchFunctions.push(function (diffX, thresholdY, diffWidth, el) {
								//undo drawing box adaptions which were set by floating
								if (renderer.y >= thresholdY) {
									renderer.x += diffX;
									renderer.settings.width += diffWidth;
									return true;
								} else if (el && el.nodeType === 1 && !SkipNode[el.nodeName] && renderer.x + el.width > renderer.pdf.margins_doc.left + renderer.pdf.margins_doc.width) {
									renderer.x += diffX;
									renderer.y = thresholdY;
									renderer.settings.width += diffWidth;
									return true;
								} else {
									return false;
								}
							}.bind(this, imagesCSS['float'] === 'left' ? -cn.width - additionalSpaceLeft - additionalSpaceRight : 0, renderer.y + cn.height + additionalSpaceTop + additionalSpaceBottom, cn.width));
							//reset floating by clear:both divs
							//just set cursorY after the floating element
							renderer.watchFunctions.push(function (yPositionAfterFloating, pages, el) {
								if (renderer.y < yPositionAfterFloating && pages === renderer.pdf.internal.getNumberOfPages()) {
									if (el.nodeType === 1 && GetCSS(el).clear === 'both') {
										renderer.y = yPositionAfterFloating;
										return true;
									} else {
										return false;
									}
								} else {
									return true;
								}
							}.bind(this, renderer.y + cn.height, renderer.pdf.internal.getNumberOfPages()));

							//if floating is set we decrease the available width by the image width
							renderer.settings.width -= cn.width + additionalSpaceLeft + additionalSpaceRight;
							//if left just add the image width to the X coordinate
							if (imagesCSS['float'] === 'left') {
								renderer.x += cn.width + additionalSpaceLeft + additionalSpaceRight;
							}
						} else {
							//if no floating is set, move the rendering cursor after the image height
							renderer.y += cn.height + additionalSpaceTop + additionalSpaceBottom;
						}

						/*** TABLE RENDERING ***/
					} else if (cn.nodeName === "TABLE") {
						table2json = tableToJson(cn, renderer);
						renderer.y += 10;
						renderer.pdf.table(renderer.x, renderer.y, table2json.rows, table2json.headers, {
							autoSize: false,
							printHeaders: elementHandlers.printHeaders,
							margins: renderer.pdf.margins_doc,
							css: GetCSS(cn)
						});
						renderer.y = renderer.pdf.lastCellPos.y + renderer.pdf.lastCellPos.h + 20;
					} else if (cn.nodeName === "OL" || cn.nodeName === "UL") {
						listCount = 1;
						if (!elementHandledElsewhere(cn, renderer, elementHandlers)) {
							_DrillForContent(cn, renderer, elementHandlers);
						}
						renderer.y += 10;
					} else if (cn.nodeName === "LI") {
						var temp = renderer.x;
						renderer.x += 20 / renderer.pdf.internal.scaleFactor;
						renderer.y += 3;
						if (!elementHandledElsewhere(cn, renderer, elementHandlers)) {
							_DrillForContent(cn, renderer, elementHandlers);
						}
						renderer.x = temp;
					} else if (cn.nodeName === "BR") {
						renderer.y += fragmentCSS["font-size"] * renderer.pdf.internal.scaleFactor;
						renderer.addText("\u2028", clone(fragmentCSS));
					} else {
						if (!elementHandledElsewhere(cn, renderer, elementHandlers)) {
							_DrillForContent(cn, renderer, elementHandlers);
						}
					}
				} else if (cn.nodeType === 3) {
					var value = cn.nodeValue;
					if (cn.nodeValue && cn.parentNode.nodeName === "LI") {
						if (cn.parentNode.parentNode.nodeName === "OL") {
							value = listCount++ + '. ' + value;
						} else {
							var fontSize = fragmentCSS["font-size"];
							var offsetX = (3 - fontSize * 0.75) * renderer.pdf.internal.scaleFactor;
							var offsetY = fontSize * 0.75 * renderer.pdf.internal.scaleFactor;
							var radius = fontSize * 1.74 / renderer.pdf.internal.scaleFactor;
							cb = function cb(x, y) {
								this.pdf.circle(x + offsetX, y + offsetY, radius, 'FD');
							};
						}
					}
					// Only add the text if the text node is in the body element
					// Add compatibility with IE11
					if (!!(cn.ownerDocument.body.compareDocumentPosition(cn) & 16)) {
						renderer.addText(value, fragmentCSS);
					}
				} else if (typeof cn === "string") {
					renderer.addText(cn, fragmentCSS);
				}
			}
			i++;
		}
		elementHandlers.outY = renderer.y;

		if (isBlock) {
			return renderer.setBlockBoundary(cb);
		}
	};
	images = {};
	loadImgs = function loadImgs(element, renderer, elementHandlers, cb) {
		var imgs = element.getElementsByTagName('img'),
		    l = imgs.length,
		    found_images,
		    x = 0;
		function done() {
			renderer.pdf.internal.events.publish('imagesLoaded');
			cb(found_images);
		}
		function loadImage(url, width, height) {
			if (!url) return;
			var img = new Image();
			found_images = ++x;
			img.crossOrigin = '';
			img.onerror = img.onload = function () {
				if (img.complete) {
					//to support data urls in images, set width and height
					//as those values are not recognized automatically
					if (img.src.indexOf('data:image/') === 0) {
						img.width = width || img.width || 0;
						img.height = height || img.height || 0;
					}
					//if valid image add to known images array
					if (img.width + img.height) {
						var hash = renderer.pdf.sHashCode(url) || url;
						images[hash] = images[hash] || img;
					}
				}
				if (! --x) {
					done();
				}
			};
			img.src = url;
		}
		while (l--) {
			loadImage(imgs[l].getAttribute("src"), imgs[l].width, imgs[l].height);
		}return x || done();
	};
	checkForFooter = function checkForFooter(elem, renderer, elementHandlers) {
		//check if we can found a <footer> element
		var footer = elem.getElementsByTagName("footer");
		if (footer.length > 0) {

			footer = footer[0];

			//bad hack to get height of footer
			//creat dummy out and check new y after fake rendering
			var oldOut = renderer.pdf.internal.write;
			var oldY = renderer.y;
			renderer.pdf.internal.write = function () {};
			_DrillForContent(footer, renderer, elementHandlers);
			var footerHeight = Math.ceil(renderer.y - oldY) + 5;
			renderer.y = oldY;
			renderer.pdf.internal.write = oldOut;

			//add 20% to prevent overlapping
			renderer.pdf.margins_doc.bottom += footerHeight;

			//Create function render header on every page
			var renderFooter = function renderFooter(pageInfo) {
				var pageNumber = pageInfo !== undefined ? pageInfo.pageNumber : 1;
				//set current y position to old margin
				var oldPosition = renderer.y;
				//render all child nodes of the header element
				renderer.y = renderer.pdf.internal.pageSize.height - renderer.pdf.margins_doc.bottom;
				renderer.pdf.margins_doc.bottom -= footerHeight;

				//check if we have to add page numbers
				var spans = footer.getElementsByTagName('span');
				for (var i = 0; i < spans.length; ++i) {
					//if we find some span element with class pageCounter, set the page
					if ((" " + spans[i].className + " ").replace(/[\n\t]/g, " ").indexOf(" pageCounter ") > -1) {
						spans[i].innerHTML = pageNumber;
					}
					//if we find some span element with class totalPages, set a variable which is replaced after rendering of all pages
					if ((" " + spans[i].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") > -1) {
						spans[i].innerHTML = '###jsPDFVarTotalPages###';
					}
				}

				//render footer content
				_DrillForContent(footer, renderer, elementHandlers);
				//set bottom margin to previous height including the footer height
				renderer.pdf.margins_doc.bottom += footerHeight;
				//important for other plugins (e.g. table) to start rendering at correct position after header
				renderer.y = oldPosition;
			};

			//check if footer contains totalPages which should be replace at the disoposal of the document
			var spans = footer.getElementsByTagName('span');
			for (var i = 0; i < spans.length; ++i) {
				if ((" " + spans[i].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") > -1) {
					renderer.pdf.internal.events.subscribe('htmlRenderingFinished', renderer.pdf.putTotalPages.bind(renderer.pdf, '###jsPDFVarTotalPages###'), true);
				}
			}

			//register event to render footer on every new page
			renderer.pdf.internal.events.subscribe('addPage', renderFooter, false);
			//render footer on first page
			renderFooter();

			//prevent footer rendering
			SkipNode['FOOTER'] = 1;
		}
	};
	process = function process(pdf, element, x, y, settings, callback) {
		if (!element) return false;
		if (typeof element !== "string" && !element.parentNode) element = '' + element.innerHTML;
		if (typeof element === "string") {
			element = function (element) {
				var $frame, $hiddendiv, framename, visuallyhidden;
				framename = "jsPDFhtmlText" + Date.now().toString() + (Math.random() * 1000).toFixed(0);
				visuallyhidden = "position: absolute !important;" + "clip: rect(1px 1px 1px 1px); /* IE6, IE7 */" + "clip: rect(1px, 1px, 1px, 1px);" + "padding:0 !important;" + "border:0 !important;" + "height: 1px !important;" + "width: 1px !important; " + "top:auto;" + "left:-100px;" + "overflow: hidden;";
				$hiddendiv = document.createElement('div');
				$hiddendiv.style.cssText = visuallyhidden;
				$hiddendiv.innerHTML = "<iframe style=\"height:1px;width:1px\" name=\"" + framename + "\" />";
				document.body.appendChild($hiddendiv);
				$frame = window.frames[framename];
				$frame.document.open();
				$frame.document.writeln(element);
				$frame.document.close();
				return $frame.document.body;
			}(element.replace(/<\/?script[^>]*?>/gi, ''));
		}
		var r = new Renderer(pdf, x, y, settings),
		    out;

		// 1. load images
		// 2. prepare optional footer elements
		// 3. render content
		loadImgs.call(this, element, r, settings.elementHandlers, function (found_images) {
			checkForFooter(element, r, settings.elementHandlers);
			_DrillForContent(element, r, settings.elementHandlers);
			//send event dispose for final taks (e.g. footer totalpage replacement)
			r.pdf.internal.events.publish('htmlRenderingFinished');
			out = r.dispose();
			if (typeof callback === 'function') callback(out);else if (found_images) console.error('jsPDF Warning: rendering issues? provide a callback to fromHTML!');
		});
		return out || { x: r.x, y: r.y };
	};
	Renderer.prototype.init = function () {
		this.paragraph = {
			text: [],
			style: []
		};
		return this.pdf.internal.write("q");
	};
	Renderer.prototype.dispose = function () {
		this.pdf.internal.write("Q");
		return {
			x: this.x,
			y: this.y,
			ready: true
		};
	};

	//Checks if we have to execute some watcher functions
	//e.g. to end text floating around an image
	Renderer.prototype.executeWatchFunctions = function (el) {
		var ret = false;
		var narray = [];
		if (this.watchFunctions.length > 0) {
			for (var i = 0; i < this.watchFunctions.length; ++i) {
				if (this.watchFunctions[i](el) === true) {
					ret = true;
				} else {
					narray.push(this.watchFunctions[i]);
				}
			}
			this.watchFunctions = narray;
		}
		return ret;
	};

	Renderer.prototype.splitFragmentsIntoLines = function (fragments, styles) {
		var currentLineLength, defaultFontSize, ff, fontMetrics, fontMetricsCache, fragment, fragmentChopped, fragmentLength, fragmentSpecificMetrics, fs, k, line, lines, maxLineLength, style;
		defaultFontSize = 12;
		k = this.pdf.internal.scaleFactor;
		fontMetricsCache = {};
		ff = void 0;
		fs = void 0;
		fontMetrics = void 0;
		fragment = void 0;
		style = void 0;
		fragmentSpecificMetrics = void 0;
		fragmentLength = void 0;
		fragmentChopped = void 0;
		line = [];
		lines = [line];
		currentLineLength = 0;
		maxLineLength = this.settings.width;
		while (fragments.length) {
			fragment = fragments.shift();
			style = styles.shift();
			if (fragment) {
				ff = style["font-family"];
				fs = style["font-style"];
				fontMetrics = fontMetricsCache[ff + fs];
				if (!fontMetrics) {
					fontMetrics = this.pdf.internal.getFont(ff, fs).metadata.Unicode;
					fontMetricsCache[ff + fs] = fontMetrics;
				}
				fragmentSpecificMetrics = {
					widths: fontMetrics.widths,
					kerning: fontMetrics.kerning,
					fontSize: style["font-size"] * defaultFontSize,
					textIndent: currentLineLength
				};
				fragmentLength = this.pdf.getStringUnitWidth(fragment, fragmentSpecificMetrics) * fragmentSpecificMetrics.fontSize / k;
				if (fragment == "\u2028") {
					line = [];
					lines.push(line);
				} else if (currentLineLength + fragmentLength > maxLineLength) {
					fragmentChopped = this.pdf.splitTextToSize(fragment, maxLineLength, fragmentSpecificMetrics);
					line.push([fragmentChopped.shift(), style]);
					while (fragmentChopped.length) {
						line = [[fragmentChopped.shift(), style]];
						lines.push(line);
					}
					currentLineLength = this.pdf.getStringUnitWidth(line[0][0], fragmentSpecificMetrics) * fragmentSpecificMetrics.fontSize / k;
				} else {
					line.push([fragment, style]);
					currentLineLength += fragmentLength;
				}
			}
		}

		//if text alignment was set, set margin/indent of each line
		if (style['text-align'] !== undefined && (style['text-align'] === 'center' || style['text-align'] === 'right' || style['text-align'] === 'justify')) {
			for (var i = 0; i < lines.length; ++i) {
				var length = this.pdf.getStringUnitWidth(lines[i][0][0], fragmentSpecificMetrics) * fragmentSpecificMetrics.fontSize / k;
				//if there is more than on line we have to clone the style object as all lines hold a reference on this object
				if (i > 0) {
					lines[i][0][1] = clone(lines[i][0][1]);
				}
				var space = maxLineLength - length;

				if (style['text-align'] === 'right') {
					lines[i][0][1]['margin-left'] = space;
					//if alignment is not right, it has to be center so split the space to the left and the right
				} else if (style['text-align'] === 'center') {
					lines[i][0][1]['margin-left'] = space / 2;
					//if justify was set, calculate the word spacing and define in by using the css property
				} else if (style['text-align'] === 'justify') {
					var countSpaces = lines[i][0][0].split(' ').length - 1;
					lines[i][0][1]['word-spacing'] = space / countSpaces;
					//ignore the last line in justify mode
					if (i === lines.length - 1) {
						lines[i][0][1]['word-spacing'] = 0;
					}
				}
			}
		}

		return lines;
	};
	Renderer.prototype.RenderTextFragment = function (text, style) {
		var defaultFontSize, font, maxLineHeight;

		maxLineHeight = 0;
		defaultFontSize = 12;

		if (this.pdf.internal.pageSize.height - this.pdf.margins_doc.bottom < this.y + this.pdf.internal.getFontSize()) {
			this.pdf.internal.write("ET", "Q");
			this.pdf.addPage();
			this.y = this.pdf.margins_doc.top;
			this.pdf.internal.write("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), style.color, "Td");
			//move cursor by one line on new page
			maxLineHeight = Math.max(maxLineHeight, style["line-height"], style["font-size"]);
			this.pdf.internal.write(0, (-1 * defaultFontSize * maxLineHeight).toFixed(2), "Td");
		}

		font = this.pdf.internal.getFont(style["font-family"], style["font-style"]);

		// text color
		var pdfTextColor = this.getPdfColor(style["color"]);
		if (pdfTextColor !== this.lastTextColor) {
			this.pdf.internal.write(pdfTextColor);
			this.lastTextColor = pdfTextColor;
		}

		//set the word spacing for e.g. justify style
		if (style['word-spacing'] !== undefined && style['word-spacing'] > 0) {
			this.pdf.internal.write(style['word-spacing'].toFixed(2), "Tw");
		}

		this.pdf.internal.write("/" + font.id, (defaultFontSize * style["font-size"]).toFixed(2), "Tf", "(" + this.pdf.internal.pdfEscape(text) + ") Tj");

		//set the word spacing back to neutral => 0
		if (style['word-spacing'] !== undefined) {
			this.pdf.internal.write(0, "Tw");
		}
	};

	// Accepts #FFFFFF, rgb(int,int,int), or CSS Color Name
	Renderer.prototype.getPdfColor = function (style) {
		var textColor;
		var r, g, b;

		var rx = /rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/;
		var m = rx.exec(style);
		if (m != null) {
			r = parseInt(m[1]);
			g = parseInt(m[2]);
			b = parseInt(m[3]);
		} else {
			if (style.charAt(0) != '#') {
				style = CssColors.colorNameToHex(style);
				if (!style) {
					style = '#000000';
				}
			}
			r = style.substring(1, 3);
			r = parseInt(r, 16);
			g = style.substring(3, 5);
			g = parseInt(g, 16);
			b = style.substring(5, 7);
			b = parseInt(b, 16);
		}

		if (typeof r === 'string' && /^#[0-9A-Fa-f]{6}$/.test(r)) {
			var hex = parseInt(r.substr(1), 16);
			r = hex >> 16 & 255;
			g = hex >> 8 & 255;
			b = hex & 255;
		}

		var f3 = this.f3;
		if (r === 0 && g === 0 && b === 0 || typeof g === 'undefined') {
			textColor = f3(r / 255) + ' g';
		} else {
			textColor = [f3(r / 255), f3(g / 255), f3(b / 255), 'rg'].join(' ');
		}
		return textColor;
	};

	Renderer.prototype.f3 = function (number) {
		return number.toFixed(3); // Ie, %.3f
	}, Renderer.prototype.renderParagraph = function (cb) {
		var blockstyle, defaultFontSize, fontToUnitRatio, fragments, i, l, line, lines, maxLineHeight, out, paragraphspacing_after, paragraphspacing_before, priorblockstyle, styles, fontSize;
		fragments = PurgeWhiteSpace(this.paragraph.text);
		styles = this.paragraph.style;
		blockstyle = this.paragraph.blockstyle;
		priorblockstyle = this.paragraph.priorblockstyle || {};
		this.paragraph = {
			text: [],
			style: [],
			blockstyle: {},
			priorblockstyle: blockstyle
		};
		if (!fragments.join("").trim()) {
			return;
		}
		lines = this.splitFragmentsIntoLines(fragments, styles);
		line = void 0;
		maxLineHeight = void 0;
		defaultFontSize = 12;
		fontToUnitRatio = defaultFontSize / this.pdf.internal.scaleFactor;
		this.priorMarginBottom = this.priorMarginBottom || 0;
		paragraphspacing_before = (Math.max((blockstyle["margin-top"] || 0) - this.priorMarginBottom, 0) + (blockstyle["padding-top"] || 0)) * fontToUnitRatio;
		paragraphspacing_after = ((blockstyle["margin-bottom"] || 0) + (blockstyle["padding-bottom"] || 0)) * fontToUnitRatio;
		this.priorMarginBottom = blockstyle["margin-bottom"] || 0;

		if (blockstyle['page-break-before'] === 'always') {
			this.pdf.addPage();
			this.y = 0;
			paragraphspacing_before = ((blockstyle["margin-top"] || 0) + (blockstyle["padding-top"] || 0)) * fontToUnitRatio;
		}

		out = this.pdf.internal.write;
		i = void 0;
		l = void 0;
		this.y += paragraphspacing_before;
		out("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");

		//stores the current indent of cursor position
		var currentIndent = 0;

		while (lines.length) {
			line = lines.shift();
			maxLineHeight = 0;
			i = 0;
			l = line.length;
			while (i !== l) {
				if (line[i][0].trim()) {
					maxLineHeight = Math.max(maxLineHeight, line[i][1]["line-height"], line[i][1]["font-size"]);
					fontSize = line[i][1]["font-size"] * 7;
				}
				i++;
			}
			//if we have to move the cursor to adapt the indent
			var indentMove = 0;
			var wantedIndent = 0;
			//if a margin was added (by e.g. a text-alignment), move the cursor
			if (line[0][1]["margin-left"] !== undefined && line[0][1]["margin-left"] > 0) {
				wantedIndent = this.pdf.internal.getCoordinateString(line[0][1]["margin-left"]);
				indentMove = wantedIndent - currentIndent;
				currentIndent = wantedIndent;
			}
			var indentMore = Math.max(blockstyle["margin-left"] || 0, 0) * fontToUnitRatio;
			//move the cursor
			out(indentMove + indentMore, (-1 * defaultFontSize * maxLineHeight).toFixed(2), "Td");
			i = 0;
			l = line.length;
			while (i !== l) {
				if (line[i][0]) {
					this.RenderTextFragment(line[i][0], line[i][1]);
				}
				i++;
			}
			this.y += maxLineHeight * fontToUnitRatio;

			//if some watcher function was executed successful, so e.g. margin and widths were changed,
			//reset line drawing and calculate position and lines again
			//e.g. to stop text floating around an image
			if (this.executeWatchFunctions(line[0][1]) && lines.length > 0) {
				var localFragments = [];
				var localStyles = [];
				//create fragment array of
				lines.forEach(function (localLine) {
					var i = 0;
					var l = localLine.length;
					while (i !== l) {
						if (localLine[i][0]) {
							localFragments.push(localLine[i][0] + ' ');
							localStyles.push(localLine[i][1]);
						}
						++i;
					}
				});
				//split lines again due to possible coordinate changes
				lines = this.splitFragmentsIntoLines(PurgeWhiteSpace(localFragments), localStyles);
				//reposition the current cursor
				out("ET", "Q");
				out("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
			}
		}
		if (cb && typeof cb === "function") {
			cb.call(this, this.x - 9, this.y - fontSize / 2);
		}
		out("ET", "Q");
		return this.y += paragraphspacing_after;
	};
	Renderer.prototype.setBlockBoundary = function (cb) {
		return this.renderParagraph(cb);
	};
	Renderer.prototype.setBlockStyle = function (css) {
		return this.paragraph.blockstyle = css;
	};
	Renderer.prototype.addText = function (text, css) {
		this.paragraph.text.push(text);
		return this.paragraph.style.push(css);
	};
	FontNameDB = {
		helvetica: "helvetica",
		"sans-serif": "helvetica",
		"times new roman": "times",
		serif: "times",
		times: "times",
		monospace: "courier",
		courier: "courier"
	};
	FontWeightMap = {
		100: "normal",
		200: "normal",
		300: "normal",
		400: "normal",
		500: "bold",
		600: "bold",
		700: "bold",
		800: "bold",
		900: "bold",
		normal: "normal",
		bold: "bold",
		bolder: "bold",
		lighter: "normal"
	};
	FontStyleMap = {
		normal: "normal",
		italic: "italic",
		oblique: "italic"
	};
	TextAlignMap = {
		left: "left",
		right: "right",
		center: "center",
		justify: "justify"
	};
	FloatMap = {
		none: 'none',
		right: 'right',
		left: 'left'
	};
	ClearMap = {
		none: 'none',
		both: 'both'
	};
	UnitedNumberMap = {
		normal: 1
	};
	/**
  * Converts HTML-formatted text into formatted PDF text.
  *
  * Notes:
  * 2012-07-18
  * Plugin relies on having browser, DOM around. The HTML is pushed into dom and traversed.
  * Plugin relies on jQuery for CSS extraction.
  * Targeting HTML output from Markdown templating, which is a very simple
  * markup - div, span, em, strong, p. No br-based paragraph separation supported explicitly (but still may work.)
  * Images, tables are NOT supported.
  *
  * @public
  * @function
  * @param HTML {String or DOM Element} HTML-formatted text, or pointer to DOM element that is to be rendered into PDF.
  * @param x {Number} starting X coordinate in jsPDF instance's declared units.
  * @param y {Number} starting Y coordinate in jsPDF instance's declared units.
  * @param settings {Object} Additional / optional variables controlling parsing, rendering.
  * @returns {Object} jsPDF instance
  */
	jsPDFAPI.fromHTML = function (HTML, x, y, settings, callback, margins) {
		"use strict";

		this.margins_doc = margins || {
			top: 0,
			bottom: 0
		};
		if (!settings) settings = {};
		if (!settings.elementHandlers) settings.elementHandlers = {};

		return process(this, HTML, isNaN(x) ? 4 : x, isNaN(y) ? 4 : y, settings, callback);
	};
})(jsPDF.API);

/** ==================================================================== 
 * jsPDF JavaScript plugin
 * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
 * 
 * 
 * ====================================================================
 */

/*global jsPDF */

(function (jsPDFAPI) {
    'use strict';

    var jsNamesObj, jsJsObj, text;
    jsPDFAPI.addJS = function (txt) {
        text = txt;
        this.internal.events.subscribe('postPutResources', function (txt) {
            jsNamesObj = this.internal.newObject();
            this.internal.write('<< /Names [(EmbeddedJS) ' + (jsNamesObj + 1) + ' 0 R] >>', 'endobj');
            jsJsObj = this.internal.newObject();
            this.internal.write('<< /S /JavaScript /JS (', text, ') >>', 'endobj');
        });
        this.internal.events.subscribe('putCatalog', function () {
            if (jsNamesObj !== undefined && jsJsObj !== undefined) {
                this.internal.write('/Names <</JavaScript ' + jsNamesObj + ' 0 R>>');
            }
        });
        return this;
    };
})(jsPDF.API);

/**
 * jsPDF Outline PlugIn
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

/**
 * Generates a PDF Outline
 */

(function (jsPDFAPI) {
	'use strict';

	jsPDFAPI.events.push(['postPutResources', function () {
		var pdf = this;
		var rx = /^(\d+) 0 obj$/;

		// Write action goto objects for each page
		// this.outline.destsGoto = [];
		// for (var i = 0; i < totalPages; i++) {
		// var id = pdf.internal.newObject();
		// this.outline.destsGoto.push(id);
		// pdf.internal.write("<</D[" + (i * 2 + 3) + " 0 R /XYZ null
		// null null]/S/GoTo>> endobj");
		// }
		//
		// for (var i = 0; i < dests.length; i++) {
		// pdf.internal.write("(page_" + (i + 1) + ")" + dests[i] + " 0
		// R");
		// }
		//				
		if (this.outline.root.children.length > 0) {
			var lines = pdf.outline.render().split(/\r\n/);
			for (var i = 0; i < lines.length; i++) {
				var line = lines[i];
				var m = rx.exec(line);
				if (m != null) {
					var oid = m[1];
					pdf.internal.newObjectDeferredBegin(oid);
				}
				pdf.internal.write(line);
			}
		}

		// This code will write named destination for each page reference
		// (page_1, etc)
		if (this.outline.createNamedDestinations) {
			var totalPages = this.internal.pages.length;
			// WARNING: this assumes jsPDF starts on page 3 and pageIDs
			// follow 5, 7, 9, etc
			// Write destination objects for each page
			var dests = [];
			for (var i = 0; i < totalPages; i++) {
				var id = pdf.internal.newObject();
				dests.push(id);
				var info = pdf.internal.getPageInfo(i + 1);
				pdf.internal.write("<< /D[" + info.objId + " 0 R /XYZ null null null]>> endobj");
			}

			// assign a name for each destination
			var names2Oid = pdf.internal.newObject();
			pdf.internal.write('<< /Names [ ');
			for (var i = 0; i < dests.length; i++) {
				pdf.internal.write("(page_" + (i + 1) + ")" + dests[i] + " 0 R");
			}
			pdf.internal.write(' ] >>', 'endobj');

			// var kids = pdf.internal.newObject();
			// pdf.internal.write('<< /Kids [ ' + names2Oid + ' 0 R');
			// pdf.internal.write(' ] >>', 'endobj');

			var namesOid = pdf.internal.newObject();
			pdf.internal.write('<< /Dests ' + names2Oid + " 0 R");
			pdf.internal.write('>>', 'endobj');
		}
	}]);

	jsPDFAPI.events.push(['putCatalog', function () {
		var pdf = this;
		if (pdf.outline.root.children.length > 0) {
			pdf.internal.write("/Outlines", this.outline.makeRef(this.outline.root));
			if (this.outline.createNamedDestinations) {
				pdf.internal.write("/Names " + namesOid + " 0 R");
			}
			// Open with Bookmarks showing
			// pdf.internal.write("/PageMode /UseOutlines");
		}
	}]);

	jsPDFAPI.events.push(['initialized', function () {
		var pdf = this;

		pdf.outline = {
			createNamedDestinations: false,
			root: {
				children: []
			}
		};

		var namesOid;
		var destsGoto = [];

		/**
   * Options: pageNumber
   */
		pdf.outline.add = function (parent, title, options) {
			var item = {
				title: title,
				options: options,
				children: []
			};
			if (parent == null) {
				parent = this.root;
			}
			parent.children.push(item);
			return item;
		};

		pdf.outline.render = function () {
			this.ctx = {};
			this.ctx.val = '';
			this.ctx.pdf = pdf;

			this.genIds_r(this.root);
			this.renderRoot(this.root);
			this.renderItems(this.root);

			return this.ctx.val;
		};

		pdf.outline.genIds_r = function (node) {
			node.id = pdf.internal.newObjectDeferred();
			for (var i = 0; i < node.children.length; i++) {
				this.genIds_r(node.children[i]);
			}
		};

		pdf.outline.renderRoot = function (node) {
			this.objStart(node);
			this.line('/Type /Outlines');
			if (node.children.length > 0) {
				this.line('/First ' + this.makeRef(node.children[0]));
				this.line('/Last ' + this.makeRef(node.children[node.children.length - 1]));
			}
			this.line('/Count ' + this.count_r({
				count: 0
			}, node));
			this.objEnd();
		};

		pdf.outline.renderItems = function (node) {
			for (var i = 0; i < node.children.length; i++) {
				var item = node.children[i];
				this.objStart(item);

				this.line('/Title ' + this.makeString(item.title));

				this.line('/Parent ' + this.makeRef(node));
				if (i > 0) {
					this.line('/Prev ' + this.makeRef(node.children[i - 1]));
				}
				if (i < node.children.length - 1) {
					this.line('/Next ' + this.makeRef(node.children[i + 1]));
				}
				if (item.children.length > 0) {
					this.line('/First ' + this.makeRef(item.children[0]));
					this.line('/Last ' + this.makeRef(item.children[item.children.length - 1]));
				}

				var count = this.count = this.count_r({
					count: 0
				}, item);
				if (count > 0) {
					this.line('/Count ' + count);
				}

				if (item.options) {
					if (item.options.pageNumber) {
						// Explicit Destination
						//WARNING this assumes page ids are 3,5,7, etc.
						var info = pdf.internal.getPageInfo(item.options.pageNumber);
						this.line('/Dest ' + '[' + info.objId + ' 0 R /XYZ 0 ' + this.ctx.pdf.internal.pageSize.height + ' 0]');
						// this line does not work on all clients (pageNumber instead of page ref)
						//this.line('/Dest ' + '[' + (item.options.pageNumber - 1) + ' /XYZ 0 ' + this.ctx.pdf.internal.pageSize.height + ' 0]');

						// Named Destination
						// this.line('/Dest (page_' + (item.options.pageNumber) + ')');

						// Action Destination
						// var id = pdf.internal.newObject();
						// pdf.internal.write('<</D[' + (item.options.pageNumber - 1) + ' /XYZ null null null]/S/GoTo>> endobj');
						// this.line('/A ' + id + ' 0 R' );
					}
				}
				this.objEnd();
			}
			for (var i = 0; i < node.children.length; i++) {
				var item = node.children[i];
				this.renderItems(item);
			}
		};

		pdf.outline.line = function (text) {
			this.ctx.val += text + '\r\n';
		};

		pdf.outline.makeRef = function (node) {
			return node.id + ' 0 R';
		};

		pdf.outline.makeString = function (val) {
			return '(' + pdf.internal.pdfEscape(val) + ')';
		};

		pdf.outline.objStart = function (node) {
			this.ctx.val += '\r\n' + node.id + ' 0 obj' + '\r\n<<\r\n';
		};

		pdf.outline.objEnd = function (node) {
			this.ctx.val += '>> \r\n' + 'endobj' + '\r\n';
		};

		pdf.outline.count_r = function (ctx, node) {
			for (var i = 0; i < node.children.length; i++) {
				ctx.count++;
				this.count_r(ctx, node.children[i]);
			}
			return ctx.count;
		};
	}]);

	return this;
})(jsPDF.API);

/**@preserve
 *  ====================================================================
 * jsPDF PNG PlugIn
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * 
 * ====================================================================
 */

(function (jsPDFAPI) {
	'use strict';

	/*
  * @see http://www.w3.org/TR/PNG-Chunks.html
  *
  Color    Allowed      Interpretation
  Type     Bit Depths
 	   0       1,2,4,8,16  Each pixel is a grayscale sample.
 	   2       8,16        Each pixel is an R,G,B triple.
 	   3       1,2,4,8     Each pixel is a palette index;
                        a PLTE chunk must appear.
 	   4       8,16        Each pixel is a grayscale sample,
                        followed by an alpha sample.
 	   6       8,16        Each pixel is an R,G,B triple,
                        followed by an alpha sample.
 */

	/*
  * PNG filter method types
  *
  * @see http://www.w3.org/TR/PNG-Filters.html
  * @see http://www.libpng.org/pub/png/book/chapter09.html
  *
  * This is what the value 'Predictor' in decode params relates to
  *
  * 15 is "optimal prediction", which means the prediction algorithm can change from line to line.
  * In that case, you actually have to read the first byte off each line for the prediction algorthim (which should be 0-4, corresponding to PDF 10-14) and select the appropriate unprediction algorithm based on that byte.
  *
    0       None
    1       Sub
    2       Up
    3       Average
    4       Paeth
  */

	var doesNotHavePngJS = function doesNotHavePngJS() {
		return typeof PNG !== 'function' || typeof FlateStream !== 'function';
	},
	    canCompress = function canCompress(value) {
		return value !== jsPDFAPI.image_compression.NONE && hasCompressionJS();
	},
	    hasCompressionJS = function hasCompressionJS() {
		var inst = typeof Deflater === 'function';
		if (!inst) throw new Error("requires deflate.js for compression");
		return inst;
	},
	    compressBytes = function compressBytes(bytes, lineLength, colorsPerPixel, compression) {

		var level = 5,
		    filter_method = filterUp;

		switch (compression) {

			case jsPDFAPI.image_compression.FAST:

				level = 3;
				filter_method = filterSub;
				break;

			case jsPDFAPI.image_compression.MEDIUM:

				level = 6;
				filter_method = filterAverage;
				break;

			case jsPDFAPI.image_compression.SLOW:

				level = 9;
				filter_method = filterPaeth; //uses to sum to choose best filter for each line
				break;
		}

		bytes = applyPngFilterMethod(bytes, lineLength, colorsPerPixel, filter_method);

		var header = new Uint8Array(createZlibHeader(level));
		var checksum = adler32(bytes);

		var deflate = new Deflater(level);
		var a = deflate.append(bytes);
		var cBytes = deflate.flush();

		var len = header.length + a.length + cBytes.length;

		var cmpd = new Uint8Array(len + 4);
		cmpd.set(header);
		cmpd.set(a, header.length);
		cmpd.set(cBytes, header.length + a.length);

		cmpd[len++] = checksum >>> 24 & 0xff;
		cmpd[len++] = checksum >>> 16 & 0xff;
		cmpd[len++] = checksum >>> 8 & 0xff;
		cmpd[len++] = checksum & 0xff;

		return jsPDFAPI.arrayBufferToBinaryString(cmpd);
	},
	    createZlibHeader = function createZlibHeader(bytes, level) {
		/*
   * @see http://www.ietf.org/rfc/rfc1950.txt for zlib header
   */
		var cm = 8;
		var cinfo = Math.LOG2E * Math.log(0x8000) - 8;
		var cmf = cinfo << 4 | cm;

		var hdr = cmf << 8;
		var flevel = Math.min(3, (level - 1 & 0xff) >> 1);

		hdr |= flevel << 6;
		hdr |= 0; //FDICT
		hdr += 31 - hdr % 31;

		return [cmf, hdr & 0xff & 0xff];
	},
	    adler32 = function adler32(array, param) {
		var adler = 1;
		var s1 = adler & 0xffff,
		    s2 = adler >>> 16 & 0xffff;
		var len = array.length;
		var tlen;
		var i = 0;

		while (len > 0) {
			tlen = len > param ? param : len;
			len -= tlen;
			do {
				s1 += array[i++];
				s2 += s1;
			} while (--tlen);

			s1 %= 65521;
			s2 %= 65521;
		}

		return (s2 << 16 | s1) >>> 0;
	},
	    applyPngFilterMethod = function applyPngFilterMethod(bytes, lineLength, colorsPerPixel, filter_method) {
		var lines = bytes.length / lineLength,
		    result = new Uint8Array(bytes.length + lines),
		    filter_methods = getFilterMethods(),
		    i = 0,
		    line,
		    prevLine,
		    offset;

		for (; i < lines; i++) {
			offset = i * lineLength;
			line = bytes.subarray(offset, offset + lineLength);

			if (filter_method) {
				result.set(filter_method(line, colorsPerPixel, prevLine), offset + i);
			} else {

				var j = 0,
				    len = filter_methods.length,
				    results = [];

				for (; j < len; j++) {
					results[j] = filter_methods[j](line, colorsPerPixel, prevLine);
				}var ind = getIndexOfSmallestSum(results.concat());

				result.set(results[ind], offset + i);
			}

			prevLine = line;
		}

		return result;
	},
	    filterNone = function filterNone(line, colorsPerPixel, prevLine) {
		/*var result = new Uint8Array(line.length + 1);
  result[0] = 0;
  result.set(line, 1);*/

		var result = Array.apply([], line);
		result.unshift(0);

		return result;
	},
	    filterSub = function filterSub(line, colorsPerPixel, prevLine) {
		var result = [],
		    i = 0,
		    len = line.length,
		    left;

		result[0] = 1;

		for (; i < len; i++) {
			left = line[i - colorsPerPixel] || 0;
			result[i + 1] = line[i] - left + 0x0100 & 0xff;
		}

		return result;
	},
	    filterUp = function filterUp(line, colorsPerPixel, prevLine) {
		var result = [],
		    i = 0,
		    len = line.length,
		    up;

		result[0] = 2;

		for (; i < len; i++) {
			up = prevLine && prevLine[i] || 0;
			result[i + 1] = line[i] - up + 0x0100 & 0xff;
		}

		return result;
	},
	    filterAverage = function filterAverage(line, colorsPerPixel, prevLine) {
		var result = [],
		    i = 0,
		    len = line.length,
		    left,
		    up;

		result[0] = 3;

		for (; i < len; i++) {
			left = line[i - colorsPerPixel] || 0;
			up = prevLine && prevLine[i] || 0;
			result[i + 1] = line[i] + 0x0100 - (left + up >>> 1) & 0xff;
		}

		return result;
	},
	    filterPaeth = function filterPaeth(line, colorsPerPixel, prevLine) {
		var result = [],
		    i = 0,
		    len = line.length,
		    left,
		    up,
		    upLeft,
		    paeth;

		result[0] = 4;

		for (; i < len; i++) {
			left = line[i - colorsPerPixel] || 0;
			up = prevLine && prevLine[i] || 0;
			upLeft = prevLine && prevLine[i - colorsPerPixel] || 0;
			paeth = paethPredictor(left, up, upLeft);
			result[i + 1] = line[i] - paeth + 0x0100 & 0xff;
		}

		return result;
	},
	    paethPredictor = function paethPredictor(left, up, upLeft) {

		var p = left + up - upLeft,
		    pLeft = Math.abs(p - left),
		    pUp = Math.abs(p - up),
		    pUpLeft = Math.abs(p - upLeft);

		return pLeft <= pUp && pLeft <= pUpLeft ? left : pUp <= pUpLeft ? up : upLeft;
	},
	    getFilterMethods = function getFilterMethods() {
		return [filterNone, filterSub, filterUp, filterAverage, filterPaeth];
	},
	    getIndexOfSmallestSum = function getIndexOfSmallestSum(arrays) {
		var i = 0,
		    len = arrays.length,
		    sum,
		    min,
		    ind;

		while (i < len) {
			sum = absSum(arrays[i].slice(1));

			if (sum < min || !min) {
				min = sum;
				ind = i;
			}

			i++;
		}

		return ind;
	},
	    absSum = function absSum(array) {
		var i = 0,
		    len = array.length,
		    sum = 0;

		while (i < len) {
			sum += Math.abs(array[i++]);
		}return sum;
	},
	    getPredictorFromCompression = function getPredictorFromCompression(compression) {
		var predictor;
		switch (compression) {
			case jsPDFAPI.image_compression.FAST:
				predictor = 11;
				break;

			case jsPDFAPI.image_compression.MEDIUM:
				predictor = 13;
				break;

			case jsPDFAPI.image_compression.SLOW:
				predictor = 14;
				break;

			default:
				predictor = 12;
				break;
		}
		return predictor;
	},
	    logImg = function logImg(img) {
		console.log("width: " + img.width);
		console.log("height: " + img.height);
		console.log("bits: " + img.bits);
		console.log("colorType: " + img.colorType);
		console.log("transparency:");
		console.log(img.transparency);
		console.log("text:");
		console.log(img.text);
		console.log("compressionMethod: " + img.compressionMethod);
		console.log("filterMethod: " + img.filterMethod);
		console.log("interlaceMethod: " + img.interlaceMethod);
		console.log("imgData:");
		console.log(img.imgData);
		console.log("palette:");
		console.log(img.palette);
		console.log("colors: " + img.colors);
		console.log("colorSpace: " + img.colorSpace);
		console.log("pixelBitlength: " + img.pixelBitlength);
		console.log("hasAlphaChannel: " + img.hasAlphaChannel);
	};

	jsPDFAPI.processPNG = function (imageData, imageIndex, alias, compression, dataAsBinaryString) {
		'use strict';

		var colorSpace = this.color_spaces.DEVICE_RGB,
		    decode = this.decode.FLATE_DECODE,
		    bpc = 8,
		    img,
		    dp,
		    trns,
		    colors,
		    pal,
		    smask;

		/*	if(this.isString(imageData)) {
  		}*/

		if (this.isArrayBuffer(imageData)) imageData = new Uint8Array(imageData);

		if (this.isArrayBufferView(imageData)) {

			if (doesNotHavePngJS()) throw new Error("PNG support requires png.js and zlib.js");

			img = new PNG(imageData);
			imageData = img.imgData;
			bpc = img.bits;
			colorSpace = img.colorSpace;
			colors = img.colors;

			//logImg(img);

			/*
    * colorType 6 - Each pixel is an R,G,B triple, followed by an alpha sample.
    *
    * colorType 4 - Each pixel is a grayscale sample, followed by an alpha sample.
    *
    * Extract alpha to create two separate images, using the alpha as a sMask
    */
			if ([4, 6].indexOf(img.colorType) !== -1) {

				/*
     * processes 8 bit RGBA and grayscale + alpha images
     */
				if (img.bits === 8) {

					var pixels = img.pixelBitlength == 32 ? new Uint32Array(img.decodePixels().buffer) : img.pixelBitlength == 16 ? new Uint16Array(img.decodePixels().buffer) : new Uint8Array(img.decodePixels().buffer),
					    len = pixels.length,
					    imgData = new Uint8Array(len * img.colors),
					    alphaData = new Uint8Array(len),
					    pDiff = img.pixelBitlength - img.bits,
					    i = 0,
					    n = 0,
					    pixel,
					    pbl;

					for (; i < len; i++) {
						pixel = pixels[i];
						pbl = 0;

						while (pbl < pDiff) {

							imgData[n++] = pixel >>> pbl & 0xff;
							pbl = pbl + img.bits;
						}

						alphaData[i] = pixel >>> pbl & 0xff;
					}
				}

				/*
     * processes 16 bit RGBA and grayscale + alpha images
     */
				if (img.bits === 16) {

					var pixels = new Uint32Array(img.decodePixels().buffer),
					    len = pixels.length,
					    imgData = new Uint8Array(len * (32 / img.pixelBitlength) * img.colors),
					    alphaData = new Uint8Array(len * (32 / img.pixelBitlength)),
					    hasColors = img.colors > 1,
					    i = 0,
					    n = 0,
					    a = 0,
					    pixel;

					while (i < len) {
						pixel = pixels[i++];

						imgData[n++] = pixel >>> 0 & 0xFF;

						if (hasColors) {
							imgData[n++] = pixel >>> 16 & 0xFF;

							pixel = pixels[i++];
							imgData[n++] = pixel >>> 0 & 0xFF;
						}

						alphaData[a++] = pixel >>> 16 & 0xFF;
					}

					bpc = 8;
				}

				if (canCompress(compression)) {

					imageData = compressBytes(imgData, img.width * img.colors, img.colors, compression);
					smask = compressBytes(alphaData, img.width, 1, compression);
				} else {

					imageData = imgData;
					smask = alphaData;
					decode = null;
				}
			}

			/*
    * Indexed png. Each pixel is a palette index.
    */
			if (img.colorType === 3) {

				colorSpace = this.color_spaces.INDEXED;
				pal = img.palette;

				if (img.transparency.indexed) {

					var trans = img.transparency.indexed;

					var total = 0,
					    i = 0,
					    len = trans.length;

					for (; i < len; ++i) {
						total += trans[i];
					}total = total / 255;

					/*
      * a single color is specified as 100% transparent (0),
      * so we set trns to use a /Mask with that index
      */
					if (total === len - 1 && trans.indexOf(0) !== -1) {
						trns = [trans.indexOf(0)];

						/*
       * there's more than one colour within the palette that specifies
       * a transparency value less than 255, so we unroll the pixels to create an image sMask
       */
					} else if (total !== len) {

						var pixels = img.decodePixels(),
						    alphaData = new Uint8Array(pixels.length),
						    i = 0,
						    len = pixels.length;

						for (; i < len; i++) {
							alphaData[i] = trans[pixels[i]];
						}smask = compressBytes(alphaData, img.width, 1);
					}
				}
			}

			var predictor = getPredictorFromCompression(compression);

			if (decode === this.decode.FLATE_DECODE) dp = '/Predictor ' + predictor + ' /Colors ' + colors + ' /BitsPerComponent ' + bpc + ' /Columns ' + img.width;else
				//remove 'Predictor' as it applies to the type of png filter applied to its IDAT - we only apply with compression
				dp = '/Colors ' + colors + ' /BitsPerComponent ' + bpc + ' /Columns ' + img.width;

			if (this.isArrayBuffer(imageData) || this.isArrayBufferView(imageData)) imageData = this.arrayBufferToBinaryString(imageData);

			if (smask && this.isArrayBuffer(smask) || this.isArrayBufferView(smask)) smask = this.arrayBufferToBinaryString(smask);

			return this.createImageInfo(imageData, img.width, img.height, colorSpace, bpc, decode, imageIndex, alias, dp, trns, pal, smask, predictor);
		}

		throw new Error("Unsupported PNG image data, try using JPEG instead.");
	};
})(jsPDF.API);

/**
 * jsPDF Autoprint Plugin
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

(function (jsPDFAPI) {
  'use strict';

  jsPDFAPI.autoPrint = function () {
    'use strict';

    var refAutoPrintTag;

    this.internal.events.subscribe('postPutResources', function () {
      refAutoPrintTag = this.internal.newObject();
      this.internal.write("<< /S/Named /Type/Action /N/Print >>", "endobj");
    });

    this.internal.events.subscribe("putCatalog", function () {
      this.internal.write("/OpenAction " + refAutoPrintTag + " 0" + " R");
    });
    return this;
  };
})(jsPDF.API);

/** @preserve
 * jsPDF split_text_to_size plugin - MIT license.
 * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
 *               2014 Diego Casorran, https://github.com/diegocr
 */
/**
 * 
 * ====================================================================
 */

(function (API) {
	'use strict';

	/**
 Returns an array of length matching length of the 'word' string, with each
 cell ocupied by the width of the char in that position.
 
 @function
 @param word {String}
 @param widths {Object}
 @param kerning {Object}
 @returns {Array}
 */

	var getCharWidthsArray = API.getCharWidthsArray = function (text, options) {

		if (!options) {
			options = {};
		}

		var widths = options.widths ? options.widths : this.internal.getFont().metadata.Unicode.widths,
		    widthsFractionOf = widths.fof ? widths.fof : 1,
		    kerning = options.kerning ? options.kerning : this.internal.getFont().metadata.Unicode.kerning,
		    kerningFractionOf = kerning.fof ? kerning.fof : 1;

		// console.log("widths, kergnings", widths, kerning)

		var i,
		    l,
		    char_code,
		    prior_char_code = 0 // for kerning
		,
		    default_char_width = widths[0] || widthsFractionOf,
		    output = [];

		for (i = 0, l = text.length; i < l; i++) {
			char_code = text.charCodeAt(i);
			output.push((widths[char_code] || default_char_width) / widthsFractionOf + (kerning[char_code] && kerning[char_code][prior_char_code] || 0) / kerningFractionOf);
			prior_char_code = char_code;
		}

		return output;
	};
	var getArraySum = function getArraySum(array) {
		var i = array.length,
		    output = 0;
		while (i) {
			i--;
			output += array[i];
		}
		return output;
	};
	/**
 Returns a widths of string in a given font, if the font size is set as 1 point.
 
 In other words, this is "proportional" value. For 1 unit of font size, the length
 of the string will be that much.
 
 Multiply by font size to get actual width in *points*
 Then divide by 72 to get inches or divide by (72/25.6) to get 'mm' etc.
 
 @public
 @function
 @param
 @returns {Type}
 */
	var getStringUnitWidth = API.getStringUnitWidth = function (text, options) {
		return getArraySum(getCharWidthsArray.call(this, text, options));
	};

	/**
 returns array of lines
 */
	var splitLongWord = function splitLongWord(word, widths_array, firstLineMaxLen, maxLen) {
		var answer = [];

		// 1st, chop off the piece that can fit on the hanging line.
		var i = 0,
		    l = word.length,
		    workingLen = 0;
		while (i !== l && workingLen + widths_array[i] < firstLineMaxLen) {
			workingLen += widths_array[i];i++;
		}
		// this is first line.
		answer.push(word.slice(0, i));

		// 2nd. Split the rest into maxLen pieces.
		var startOfLine = i;
		workingLen = 0;
		while (i !== l) {
			if (workingLen + widths_array[i] > maxLen) {
				answer.push(word.slice(startOfLine, i));
				workingLen = 0;
				startOfLine = i;
			}
			workingLen += widths_array[i];i++;
		}
		if (startOfLine !== i) {
			answer.push(word.slice(startOfLine, i));
		}

		return answer;
	};

	// Note, all sizing inputs for this function must be in "font measurement units"
	// By default, for PDF, it's "point".
	var splitParagraphIntoLines = function splitParagraphIntoLines(text, maxlen, options) {
		// at this time works only on Western scripts, ones with space char
		// separating the words. Feel free to expand.

		if (!options) {
			options = {};
		}

		var line = [],
		    lines = [line],
		    line_length = options.textIndent || 0,
		    separator_length = 0,
		    current_word_length = 0,
		    word,
		    widths_array,
		    words = text.split(' '),
		    spaceCharWidth = getCharWidthsArray(' ', options)[0],
		    i,
		    l,
		    tmp,
		    lineIndent;

		if (options.lineIndent === -1) {
			lineIndent = words[0].length + 2;
		} else {
			lineIndent = options.lineIndent || 0;
		}
		if (lineIndent) {
			var pad = Array(lineIndent).join(" "),
			    wrds = [];
			words.map(function (wrd) {
				wrd = wrd.split(/\s*\n/);
				if (wrd.length > 1) {
					wrds = wrds.concat(wrd.map(function (wrd, idx) {
						return (idx && wrd.length ? "\n" : "") + wrd;
					}));
				} else {
					wrds.push(wrd[0]);
				}
			});
			words = wrds;
			lineIndent = getStringUnitWidth(pad, options);
		}

		for (i = 0, l = words.length; i < l; i++) {
			var force = 0;

			word = words[i];
			if (lineIndent && word[0] == "\n") {
				word = word.substr(1);
				force = 1;
			}
			widths_array = getCharWidthsArray(word, options);
			current_word_length = getArraySum(widths_array);

			if (line_length + separator_length + current_word_length > maxlen || force) {
				if (current_word_length > maxlen) {
					// this happens when you have space-less long URLs for example.
					// we just chop these to size. We do NOT insert hiphens
					tmp = splitLongWord(word, widths_array, maxlen - (line_length + separator_length), maxlen);
					// first line we add to existing line object
					line.push(tmp.shift()); // it's ok to have extra space indicator there
					// last line we make into new line object
					line = [tmp.pop()];
					// lines in the middle we apped to lines object as whole lines
					while (tmp.length) {
						lines.push([tmp.shift()]); // single fragment occupies whole line
					}
					current_word_length = getArraySum(widths_array.slice(word.length - line[0].length));
				} else {
					// just put it on a new line
					line = [word];
				}

				// now we attach new line to lines
				lines.push(line);
				line_length = current_word_length + lineIndent;
				separator_length = spaceCharWidth;
			} else {
				line.push(word);

				line_length += separator_length + current_word_length;
				separator_length = spaceCharWidth;
			}
		}

		if (lineIndent) {
			var postProcess = function postProcess(ln, idx) {
				return (idx ? pad : '') + ln.join(" ");
			};
		} else {
			var postProcess = function postProcess(ln) {
				return ln.join(" ");
			};
		}

		return lines.map(postProcess);
	};

	/**
 Splits a given string into an array of strings. Uses 'size' value
 (in measurement units declared as default for the jsPDF instance)
 and the font's "widths" and "Kerning" tables, where available, to
 determine display length of a given string for a given font.
 
 We use character's 100% of unit size (height) as width when Width
 table or other default width is not available.
 
 @public
 @function
 @param text {String} Unencoded, regular JavaScript (Unicode, UTF-16 / UCS-2) string.
 @param size {Number} Nominal number, measured in units default to this instance of jsPDF.
 @param options {Object} Optional flags needed for chopper to do the right thing.
 @returns {Array} with strings chopped to size.
 */
	API.splitTextToSize = function (text, maxlen, options) {
		'use strict';

		if (!options) {
			options = {};
		}

		var fsize = options.fontSize || this.internal.getFontSize(),
		    newOptions = function (options) {
			var widths = { 0: 1 },
			    kerning = {};

			if (!options.widths || !options.kerning) {
				var f = this.internal.getFont(options.fontName, options.fontStyle),
				    encoding = 'Unicode';
				// NOT UTF8, NOT UTF16BE/LE, NOT UCS2BE/LE
				// Actual JavaScript-native String's 16bit char codes used.
				// no multi-byte logic here

				if (f.metadata[encoding]) {
					return {
						widths: f.metadata[encoding].widths || widths,
						kerning: f.metadata[encoding].kerning || kerning
					};
				}
			} else {
				return {
					widths: options.widths,
					kerning: options.kerning
				};
			}

			// then use default values
			return {
				widths: widths,
				kerning: kerning
			};
		}.call(this, options);

		// first we split on end-of-line chars
		var paragraphs;
		if (Array.isArray(text)) {
			paragraphs = text;
		} else {
			paragraphs = text.split(/\r?\n/);
		}

		// now we convert size (max length of line) into "font size units"
		// at present time, the "font size unit" is always 'point'
		// 'proportional' means, "in proportion to font size"
		var fontUnit_maxLen = 1.0 * this.internal.scaleFactor * maxlen / fsize;
		// at this time, fsize is always in "points" regardless of the default measurement unit of the doc.
		// this may change in the future?
		// until then, proportional_maxlen is likely to be in 'points'

		// If first line is to be indented (shorter or longer) than maxLen
		// we indicate that by using CSS-style "text-indent" option.
		// here it's in font units too (which is likely 'points')
		// it can be negative (which makes the first line longer than maxLen)
		newOptions.textIndent = options.textIndent ? options.textIndent * 1.0 * this.internal.scaleFactor / fsize : 0;
		newOptions.lineIndent = options.lineIndent;

		var i,
		    l,
		    output = [];
		for (i = 0, l = paragraphs.length; i < l; i++) {
			output = output.concat(splitParagraphIntoLines(paragraphs[i], fontUnit_maxLen, newOptions));
		}

		return output;
	};
})(jsPDF.API);

/** @preserve 
jsPDF standard_fonts_metrics plugin
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
MIT license.
*/
/**
 * 
 * ====================================================================
 */

(function (API) {
	'use strict';

	/*
 # reference (Python) versions of 'compress' and 'uncompress'
 # only 'uncompress' function is featured lower as JavaScript
 # if you want to unit test "roundtrip", just transcribe the reference
 # 'compress' function from Python into JavaScript
 
 def compress(data):
 
 	keys =   '0123456789abcdef'
 	values = 'klmnopqrstuvwxyz'
 	mapping = dict(zip(keys, values))
 	vals = []
 	for key in data.keys():
 		value = data[key]
 		try:
 			keystring = hex(key)[2:]
 			keystring = keystring[:-1] + mapping[keystring[-1:]]
 		except:
 			keystring = key.join(["'","'"])
 			#print('Keystring is %s' % keystring)
 
 		try:
 			if value < 0:
 				valuestring = hex(value)[3:]
 				numberprefix = '-'
 			else:
 				valuestring = hex(value)[2:]
 				numberprefix = ''
 			valuestring = numberprefix + valuestring[:-1] + mapping[valuestring[-1:]]
 		except:
 			if type(value) == dict:
 				valuestring = compress(value)
 			else:
 				raise Exception("Don't know what to do with value type %s" % type(value))
 
 		vals.append(keystring+valuestring)
 	
 	return '{' + ''.join(vals) + '}'
 
 def uncompress(data):
 
 	decoded = '0123456789abcdef'
 	encoded = 'klmnopqrstuvwxyz'
 	mapping = dict(zip(encoded, decoded))
 
 	sign = +1
 	stringmode = False
 	stringparts = []
 
 	output = {}
 
 	activeobject = output
 	parentchain = []
 
 	keyparts = ''
 	valueparts = ''
 
 	key = None
 
 	ending = set(encoded)
 
 	i = 1
 	l = len(data) - 1 # stripping starting, ending {}
 	while i != l: # stripping {}
 		# -, {, }, ' are special.
 
 		ch = data[i]
 		i += 1
 
 		if ch == "'":
 			if stringmode:
 				# end of string mode
 				stringmode = False
 				key = ''.join(stringparts)
 			else:
 				# start of string mode
 				stringmode = True
 				stringparts = []
 		elif stringmode == True:
 			#print("Adding %s to stringpart" % ch)
 			stringparts.append(ch)
 
 		elif ch == '{':
 			# start of object
 			parentchain.append( [activeobject, key] )
 			activeobject = {}
 			key = None
 			#DEBUG = True
 		elif ch == '}':
 			# end of object
 			parent, key = parentchain.pop()
 			parent[key] = activeobject
 			key = None
 			activeobject = parent
 			#DEBUG = False
 
 		elif ch == '-':
 			sign = -1
 		else:
 			# must be number
 			if key == None:
 				#debug("In Key. It is '%s', ch is '%s'" % (keyparts, ch))
 				if ch in ending:
 					#debug("End of key")
 					keyparts += mapping[ch]
 					key = int(keyparts, 16) * sign
 					sign = +1
 					keyparts = ''
 				else:
 					keyparts += ch
 			else:
 				#debug("In value. It is '%s', ch is '%s'" % (valueparts, ch))
 				if ch in ending:
 					#debug("End of value")
 					valueparts += mapping[ch]
 					activeobject[key] = int(valueparts, 16) * sign
 					sign = +1
 					key = None
 					valueparts = ''
 				else:
 					valueparts += ch
 
 			#debug(activeobject)
 
 	return output
 
 */

	/**
 Uncompresses data compressed into custom, base16-like format. 
 @public
 @function
 @param
 @returns {Type}
 */

	var uncompress = function uncompress(data) {

		var decoded = '0123456789abcdef',
		    encoded = 'klmnopqrstuvwxyz',
		    mapping = {};

		for (var i = 0; i < encoded.length; i++) {
			mapping[encoded[i]] = decoded[i];
		}

		var undef,
		    output = {},
		    sign = 1,
		    stringparts // undef. will be [] in string mode

		,
		    activeobject = output,
		    parentchain = [],
		    parent_key_pair,
		    keyparts = '',
		    valueparts = '',
		    key // undef. will be Truthy when Key is resolved.
		,
		    datalen = data.length - 1 // stripping ending }
		,
		    ch;

		i = 1; // stripping starting {

		while (i != datalen) {
			// - { } ' are special.

			ch = data[i];
			i += 1;

			if (ch == "'") {
				if (stringparts) {
					// end of string mode
					key = stringparts.join('');
					stringparts = undef;
				} else {
					// start of string mode
					stringparts = [];
				}
			} else if (stringparts) {
				stringparts.push(ch);
			} else if (ch == '{') {
				// start of object
				parentchain.push([activeobject, key]);
				activeobject = {};
				key = undef;
			} else if (ch == '}') {
				// end of object
				parent_key_pair = parentchain.pop();
				parent_key_pair[0][parent_key_pair[1]] = activeobject;
				key = undef;
				activeobject = parent_key_pair[0];
			} else if (ch == '-') {
				sign = -1;
			} else {
				// must be number
				if (key === undef) {
					if (mapping.hasOwnProperty(ch)) {
						keyparts += mapping[ch];
						key = parseInt(keyparts, 16) * sign;
						sign = +1;
						keyparts = '';
					} else {
						keyparts += ch;
					}
				} else {
					if (mapping.hasOwnProperty(ch)) {
						valueparts += mapping[ch];
						activeobject[key] = parseInt(valueparts, 16) * sign;
						sign = +1;
						key = undef;
						valueparts = '';
					} else {
						valueparts += ch;
					}
				}
			}
		} // end while

		return output;
	};

	// encoding = 'Unicode' 
	// NOT UTF8, NOT UTF16BE/LE, NOT UCS2BE/LE. NO clever BOM behavior
	// Actual 16bit char codes used.
	// no multi-byte logic here

	// Unicode characters to WinAnsiEncoding:
	// {402: 131, 8211: 150, 8212: 151, 8216: 145, 8217: 146, 8218: 130, 8220: 147, 8221: 148, 8222: 132, 8224: 134, 8225: 135, 8226: 149, 8230: 133, 8364: 128, 8240:137, 8249: 139, 8250: 155, 710: 136, 8482: 153, 338: 140, 339: 156, 732: 152, 352: 138, 353: 154, 376: 159, 381: 142, 382: 158}
	// as you can see, all Unicode chars are outside of 0-255 range. No char code conflicts.
	// this means that you can give Win cp1252 encoded strings to jsPDF for rendering directly
	// as well as give strings with some (supported by these fonts) Unicode characters and 
	// these will be mapped to win cp1252 
	// for example, you can send char code (cp1252) 0x80 or (unicode) 0x20AC, getting "Euro" glyph displayed in both cases.

	var encodingBlock = {
		'codePages': ['WinAnsiEncoding'],
		'WinAnsiEncoding': uncompress("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
	},
	    encodings = { 'Unicode': {
			'Courier': encodingBlock,
			'Courier-Bold': encodingBlock,
			'Courier-BoldOblique': encodingBlock,
			'Courier-Oblique': encodingBlock,
			'Helvetica': encodingBlock,
			'Helvetica-Bold': encodingBlock,
			'Helvetica-BoldOblique': encodingBlock,
			'Helvetica-Oblique': encodingBlock,
			'Times-Roman': encodingBlock,
			'Times-Bold': encodingBlock,
			'Times-BoldItalic': encodingBlock,
			'Times-Italic': encodingBlock
			//	, 'Symbol'
			//	, 'ZapfDingbats'
		} }
	/** 
 Resources:
 Font metrics data is reprocessed derivative of contents of
 "Font Metrics for PDF Core 14 Fonts" package, which exhibits the following copyright and license:
 
 Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated. All Rights Reserved.
 
 This file and the 14 PostScript(R) AFM files it accompanies may be used,
 copied, and distributed for any purpose and without charge, with or without
 modification, provided that all copyright notices are retained; that the AFM
 files are not distributed without this file; that all modifications to this
 file or any of the AFM files are prominently noted in the modified file(s);
 and that this paragraph is not modified. Adobe Systems has no responsibility
 or obligation to support the use of the AFM files.
 
 */
	,
	    fontMetrics = { 'Unicode': {
			// all sizing numbers are n/fontMetricsFractionOf = one font size unit
			// this means that if fontMetricsFractionOf = 1000, and letter A's width is 476, it's
			// width is 476/1000 or 47.6% of its height (regardless of font size)
			// At this time this value applies to "widths" and "kerning" numbers.

			// char code 0 represents "default" (average) width - use it for chars missing in this table.
			// key 'fof' represents the "fontMetricsFractionOf" value

			'Courier-Oblique': uncompress("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
			'Times-BoldItalic': uncompress("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
			'Helvetica-Bold': uncompress("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
			'Courier': uncompress("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
			'Courier-BoldOblique': uncompress("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
			'Times-Bold': uncompress("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}")
			//, 'Symbol': uncompress("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}")
			, 'Helvetica': uncompress("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
			'Helvetica-BoldOblique': uncompress("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}")
			//, 'ZapfDingbats': uncompress("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}")
			, 'Courier-Bold': uncompress("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
			'Times-Italic': uncompress("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
			'Times-Roman': uncompress("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
			'Helvetica-Oblique': uncompress("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
		} };

	/*
 This event handler is fired when a new jsPDF object is initialized
 This event handler appends metrics data to standard fonts within
 that jsPDF instance. The metrics are mapped over Unicode character
 codes, NOT CIDs or other codes matching the StandardEncoding table of the
 standard PDF fonts.
 Future:
 Also included is the encoding maping table, converting Unicode (UCS-2, UTF-16)
 char codes to StandardEncoding character codes. The encoding table is to be used
 somewhere around "pdfEscape" call.
 */

	API.events.push(['addFont', function (font) {
		var metrics,
		    unicode_section,
		    encoding = 'Unicode',
		    encodingBlock;

		metrics = fontMetrics[encoding][font.PostScriptName];
		if (metrics) {
			if (font.metadata[encoding]) {
				unicode_section = font.metadata[encoding];
			} else {
				unicode_section = font.metadata[encoding] = {};
			}

			unicode_section.widths = metrics.widths;
			unicode_section.kerning = metrics.kerning;
		}

		encodingBlock = encodings[encoding][font.PostScriptName];
		if (encodingBlock) {
			if (font.metadata[encoding]) {
				unicode_section = font.metadata[encoding];
			} else {
				unicode_section = font.metadata[encoding] = {};
			}

			unicode_section.encoding = encodingBlock;
			if (encodingBlock.codePages && encodingBlock.codePages.length) {
				font.encoding = encodingBlock.codePages[0];
			}
		}
	}]); // end of adding event handler
})(jsPDF.API);

/** @preserve
jsPDF SVG plugin
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
*/
/**
 * 
 * ====================================================================
 */

(function (jsPDFAPI) {
	'use strict';

	/**
 Parses SVG XML and converts only some of the SVG elements into
 PDF elements.
 
 Supports:
  paths
 
 @public
 @function
 @param
 @returns {Type}
 */

	jsPDFAPI.addSVG = function (svgtext, x, y, w, h) {
		// 'this' is _jsPDF object returned when jsPDF is inited (new jsPDF())

		var undef;

		if (x === undef || y === undef) {
			throw new Error("addSVG needs values for 'x' and 'y'");
		}

		function InjectCSS(cssbody, document) {
			var styletag = document.createElement('style');
			styletag.type = 'text/css';
			if (styletag.styleSheet) {
				// ie
				styletag.styleSheet.cssText = cssbody;
			} else {
				// others
				styletag.appendChild(document.createTextNode(cssbody));
			}
			document.getElementsByTagName("head")[0].appendChild(styletag);
		}

		function createWorkerNode(document) {

			var frameID = 'childframe' // Date.now().toString() + '_' + (Math.random() * 100).toString()
			,
			    frame = document.createElement('iframe');

			InjectCSS('.jsPDF_sillysvg_iframe {display:none;position:absolute;}', document);

			frame.name = frameID;
			frame.setAttribute("width", 0);
			frame.setAttribute("height", 0);
			frame.setAttribute("frameborder", "0");
			frame.setAttribute("scrolling", "no");
			frame.setAttribute("seamless", "seamless");
			frame.setAttribute("class", "jsPDF_sillysvg_iframe");

			document.body.appendChild(frame);

			return frame;
		}

		function attachSVGToWorkerNode(svgtext, frame) {
			var framedoc = (frame.contentWindow || frame.contentDocument).document;
			framedoc.write(svgtext);
			framedoc.close();
			return framedoc.getElementsByTagName('svg')[0];
		}

		function convertPathToPDFLinesArgs(path) {
			'use strict';
			// we will use 'lines' method call. it needs:
			// - starting coordinate pair
			// - array of arrays of vector shifts (2-len for line, 6 len for bezier)
			// - scale array [horizontal, vertical] ratios
			// - style (stroke, fill, both)

			var x = parseFloat(path[1]),
			    y = parseFloat(path[2]),
			    vectors = [],
			    position = 3,
			    len = path.length;

			while (position < len) {
				if (path[position] === 'c') {
					vectors.push([parseFloat(path[position + 1]), parseFloat(path[position + 2]), parseFloat(path[position + 3]), parseFloat(path[position + 4]), parseFloat(path[position + 5]), parseFloat(path[position + 6])]);
					position += 7;
				} else if (path[position] === 'l') {
					vectors.push([parseFloat(path[position + 1]), parseFloat(path[position + 2])]);
					position += 3;
				} else {
					position += 1;
				}
			}
			return [x, y, vectors];
		}

		var workernode = createWorkerNode(document),
		    svgnode = attachSVGToWorkerNode(svgtext, workernode),
		    scale = [1, 1],
		    svgw = parseFloat(svgnode.getAttribute('width')),
		    svgh = parseFloat(svgnode.getAttribute('height'));

		if (svgw && svgh) {
			// setting both w and h makes image stretch to size.
			// this may distort the image, but fits your demanded size
			if (w && h) {
				scale = [w / svgw, h / svgh];
			}
			// if only one is set, that value is set as max and SVG
			// is scaled proportionately.
			else if (w) {
					scale = [w / svgw, w / svgw];
				} else if (h) {
					scale = [h / svgh, h / svgh];
				}
		}

		var i,
		    l,
		    tmp,
		    linesargs,
		    items = svgnode.childNodes;
		for (i = 0, l = items.length; i < l; i++) {
			tmp = items[i];
			if (tmp.tagName && tmp.tagName.toUpperCase() === 'PATH') {
				linesargs = convertPathToPDFLinesArgs(tmp.getAttribute("d").split(' '));
				// path start x coordinate
				linesargs[0] = linesargs[0] * scale[0] + x; // where x is upper left X of image
				// path start y coordinate
				linesargs[1] = linesargs[1] * scale[1] + y; // where y is upper left Y of image
				// the rest of lines are vectors. these will adjust with scale value auto.
				this.lines.call(this, linesargs[2] // lines
				, linesargs[0] // starting x
				, linesargs[1] // starting y
				, scale);
			}
		}

		// clean up
		// workernode.parentNode.removeChild(workernode)

		return this;
	};
})(jsPDF.API);

/** ==================================================================== 
 * jsPDF total_pages plugin
 * Copyright (c) 2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
 * 
 * 
 * ====================================================================
 */

(function (jsPDFAPI) {
  'use strict';

  jsPDFAPI.putTotalPages = function (pageExpression) {
    'use strict';

    var replaceExpression = new RegExp(pageExpression, 'g');
    for (var n = 1; n <= this.internal.getNumberOfPages(); n++) {
      for (var i = 0; i < this.internal.pages[n].length; i++) {
        this.internal.pages[n][i] = this.internal.pages[n][i].replace(replaceExpression, this.internal.getNumberOfPages());
      }
    }
    return this;
  };
})(jsPDF.API);

/** ==================================================================== 
 * jsPDF XMP metadata plugin
 * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
 * 
 * 
 * ====================================================================
 */

/*global jsPDF */

/**
* Adds XMP formatted metadata to PDF
*
* @param {String} metadata The actual metadata to be added. The metadata shall be stored as XMP simple value. Note that if the metadata string contains XML markup characters "<", ">" or "&", those characters should be written using XML entities.
* @param {String} namespaceuri Sets the namespace URI for the metadata. Last character should be slash or hash.
* @function
* @returns {jsPDF}
* @methodOf jsPDF#
* @name addMetadata
*/

(function (jsPDFAPI) {
    'use strict';

    var xmpmetadata = "";
    var xmpnamespaceuri = "";
    var metadata_object_number = "";

    jsPDFAPI.addMetadata = function (metadata, namespaceuri) {
        xmpnamespaceuri = namespaceuri || "http://jspdf.default.namespaceuri/"; //The namespace URI for an XMP name shall not be empty
        xmpmetadata = metadata;
        this.internal.events.subscribe('postPutResources', function () {
            if (!xmpmetadata) {
                metadata_object_number = "";
            } else {
                var xmpmeta_beginning = '<x:xmpmeta xmlns:x="adobe:ns:meta/">';
                var rdf_beginning = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + xmpnamespaceuri + '"><jspdf:metadata>';
                var rdf_ending = '</jspdf:metadata></rdf:Description></rdf:RDF>';
                var xmpmeta_ending = '</x:xmpmeta>';
                var utf8_xmpmeta_beginning = unescape(encodeURIComponent(xmpmeta_beginning));
                var utf8_rdf_beginning = unescape(encodeURIComponent(rdf_beginning));
                var utf8_metadata = unescape(encodeURIComponent(xmpmetadata));
                var utf8_rdf_ending = unescape(encodeURIComponent(rdf_ending));
                var utf8_xmpmeta_ending = unescape(encodeURIComponent(xmpmeta_ending));

                var total_len = utf8_rdf_beginning.length + utf8_metadata.length + utf8_rdf_ending.length + utf8_xmpmeta_beginning.length + utf8_xmpmeta_ending.length;

                metadata_object_number = this.internal.newObject();
                this.internal.write('<< /Type /Metadata /Subtype /XML /Length ' + total_len + ' >>');
                this.internal.write('stream');
                this.internal.write(utf8_xmpmeta_beginning + utf8_rdf_beginning + utf8_metadata + utf8_rdf_ending + utf8_xmpmeta_ending);
                this.internal.write('endstream');
                this.internal.write('endobj');
            }
        });
        this.internal.events.subscribe('putCatalog', function () {
            if (metadata_object_number) {
                this.internal.write('/Metadata ' + metadata_object_number + ' 0 R');
            }
        });
        return this;
    };
})(jsPDF.API);

/* Blob.js
 * A Blob implementation.
 * 2014-07-24
 *
 * By Eli Grey, http://eligrey.com
 * By Devin Samarin, https://github.com/dsamarin
 * License: X11/MIT
 *   See https://github.com/eligrey/Blob.js/blob/master/LICENSE.md
 */

/*global self, unescape */
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
  plusplus: true */

/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */

(function (view) {
	"use strict";

	view.URL = view.URL || view.webkitURL;

	if (view.Blob && view.URL) {
		try {
			new Blob;
			return;
		} catch (e) {}
	}

	// Internally we use a BlobBuilder implementation to base Blob off of
	// in order to support older browsers that only have BlobBuilder
	var BlobBuilder = view.BlobBuilder || view.WebKitBlobBuilder || view.MozBlobBuilder || (function(view) {
		var
			  get_class = function(object) {
				return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
			}
			, FakeBlobBuilder = function BlobBuilder() {
				this.data = [];
			}
			, FakeBlob = function Blob(data, type, encoding) {
				this.data = data;
				this.size = data.length;
				this.type = type;
				this.encoding = encoding;
			}
			, FBB_proto = FakeBlobBuilder.prototype
			, FB_proto = FakeBlob.prototype
			, FileReaderSync = view.FileReaderSync
			, FileException = function(type) {
				this.code = this[this.name = type];
			}
			, file_ex_codes = (
				  "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR "
				+ "NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR"
			).split(" ")
			, file_ex_code = file_ex_codes.length
			, real_URL = view.URL || view.webkitURL || view
			, real_create_object_URL = real_URL.createObjectURL
			, real_revoke_object_URL = real_URL.revokeObjectURL
			, URL = real_URL
			, btoa = view.btoa
			, atob = view.atob

			, ArrayBuffer = view.ArrayBuffer
			, Uint8Array = view.Uint8Array

			, origin = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
		FakeBlob.fake = FB_proto.fake = true;
		while (file_ex_code--) {
			FileException.prototype[file_ex_codes[file_ex_code]] = file_ex_code + 1;
		}
		// Polyfill URL
		if (!real_URL.createObjectURL) {
			URL = view.URL = function(uri) {
				var
					  uri_info = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
					, uri_origin;
				uri_info.href = uri;
				if (!("origin" in uri_info)) {
					if (uri_info.protocol.toLowerCase() === "data:") {
						uri_info.origin = null;
					} else {
						uri_origin = uri.match(origin);
						uri_info.origin = uri_origin && uri_origin[1];
					}
				}
				return uri_info;
			};
		}
		URL.createObjectURL = function(blob) {
			var
				  type = blob.type
				, data_URI_header;
			if (type === null) {
				type = "application/octet-stream";
			}
			if (blob instanceof FakeBlob) {
				data_URI_header = "data:" + type;
				if (blob.encoding === "base64") {
					return data_URI_header + ";base64," + blob.data;
				} else if (blob.encoding === "URI") {
					return data_URI_header + "," + decodeURIComponent(blob.data);
				} if (btoa) {
					return data_URI_header + ";base64," + btoa(blob.data);
				} else {
					return data_URI_header + "," + encodeURIComponent(blob.data);
				}
			} else if (real_create_object_URL) {
				return real_create_object_URL.call(real_URL, blob);
			}
		};
		URL.revokeObjectURL = function(object_URL) {
			if (object_URL.substring(0, 5) !== "data:" && real_revoke_object_URL) {
				real_revoke_object_URL.call(real_URL, object_URL);
			}
		};
		FBB_proto.append = function(data/*, endings*/) {
			var bb = this.data;
			// decode data to a binary string
			if (Uint8Array && (data instanceof ArrayBuffer || data instanceof Uint8Array)) {
				var
					  str = ""
					, buf = new Uint8Array(data)
					, i = 0
					, buf_len = buf.length;
				for (; i < buf_len; i++) {
					str += String.fromCharCode(buf[i]);
				}
				bb.push(str);
			} else if (get_class(data) === "Blob" || get_class(data) === "File") {
				if (FileReaderSync) {
					var fr = new FileReaderSync;
					bb.push(fr.readAsBinaryString(data));
				} else {
					// async FileReader won't work as BlobBuilder is sync
					throw new FileException("NOT_READABLE_ERR");
				}
			} else if (data instanceof FakeBlob) {
				if (data.encoding === "base64" && atob) {
					bb.push(atob(data.data));
				} else if (data.encoding === "URI") {
					bb.push(decodeURIComponent(data.data));
				} else if (data.encoding === "raw") {
					bb.push(data.data);
				}
			} else {
				if (typeof data !== "string") {
					data += ""; // convert unsupported types to strings
				}
				// decode UTF-16 to binary string
				bb.push(unescape(encodeURIComponent(data)));
			}
		};
		FBB_proto.getBlob = function(type) {
			if (!arguments.length) {
				type = null;
			}
			return new FakeBlob(this.data.join(""), type, "raw");
		};
		FBB_proto.toString = function() {
			return "[object BlobBuilder]";
		};
		FB_proto.slice = function(start, end, type) {
			var args = arguments.length;
			if (args < 3) {
				type = null;
			}
			return new FakeBlob(
				  this.data.slice(start, args > 1 ? end : this.data.length)
				, type
				, this.encoding
			);
		};
		FB_proto.toString = function() {
			return "[object Blob]";
		};
		FB_proto.close = function() {
			this.size = 0;
			delete this.data;
		};
		return FakeBlobBuilder;
	}(view));

	view.Blob = function(blobParts, options) {
		var type = options ? (options.type || "") : "";
		var builder = new BlobBuilder();
		if (blobParts) {
			for (var i = 0, len = blobParts.length; i < len; i++) {
				if (Uint8Array && blobParts[i] instanceof Uint8Array) {
					builder.append(blobParts[i].buffer);
				}
				else {
					builder.append(blobParts[i]);
				}
			}
		}
		var blob = builder.getBlob(type);
		if (!blob.slice && blob.webkitSlice) {
			blob.slice = blob.webkitSlice;
		}
		return blob;
	};

	var getPrototypeOf = Object.getPrototypeOf || function(object) {
		return object.__proto__;
	};
	view.Blob.prototype = getPrototypeOf(new view.Blob());
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || undefined.content || undefined));

/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.1.20151003
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent)
		, webkit_req_fs = view.webkitRequestFileSystem
		, req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		, fs_min_size = 0
		// See https://code.google.com/p/chromium/issues/detail?id=375297#c7 and
		// https://github.com/eligrey/FileSaver.js/commit/485930a#commitcomment-8768047
		// for the reasoning behind the timeout and revocation flow
		, arbitrary_revoke_timeout = 500 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			if (view.chrome) {
				revoker();
			} else {
				setTimeout(revoker, arbitrary_revoke_timeout);
			}
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob(["\ufeff", blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, blob_changed = false
				, object_url
				, target_view
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if (target_view && is_safari && typeof FileReader !== "undefined") {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var base64Data = reader.result;
							target_view.location.href = "data:attachment/file" + base64Data.slice(base64Data.search(/[,;]/));
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (blob_changed || !object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (target_view) {
						target_view.location.href = object_url;
					} else {
						var new_tab = view.open(object_url, "_blank");
						if (new_tab == undefined && is_safari) {
							//Apple do not allow window.open, see http://bit.ly/1kZffRI
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
				, abortable = function(func) {
					return function() {
						if (filesaver.readyState !== filesaver.DONE) {
							return func.apply(this, arguments);
						}
					};
				}
				, create_if_not_found = {create: true, exclusive: false}
				, slice;
			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}
			// Object and web filesystem URLs have a problem saving in Google Chrome when
			// viewed in a tab, so I force save with application/octet-stream
			// http://code.google.com/p/chromium/issues/detail?id=91158
			// Update: Google errantly closed 91158, I submitted it again:
			// https://code.google.com/p/chromium/issues/detail?id=389642
			if (view.chrome && type && type !== force_saveable_type) {
				slice = blob.slice || blob.webkitSlice;
				blob = slice.call(blob, 0, blob.size, force_saveable_type);
				blob_changed = true;
			}
			// Since I can't be sure that the guessed media type will trigger a download
			// in WebKit, I append .download to the filename.
			// https://bugs.webkit.org/show_bug.cgi?id=65440
			if (webkit_req_fs && name !== "download") {
				name += ".download";
			}
			if (type === force_saveable_type || webkit_req_fs) {
				target_view = view;
			}
			if (!req_fs) {
				fs_error();
				return;
			}
			fs_min_size += blob.size;
			req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
				fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
					var save = function() {
						dir.getFile(name, create_if_not_found, abortable(function(file) {
							file.createWriter(abortable(function(writer) {
								writer.onwriteend = function(event) {
									target_view.location.href = file.toURL();
									filesaver.readyState = filesaver.DONE;
									dispatch(filesaver, "writeend", event);
									revoke(file);
								};
								writer.onerror = function() {
									var error = writer.error;
									if (error.code !== error.ABORT_ERR) {
										fs_error();
									}
								};
								"writestart progress write abort".split(" ").forEach(function(event) {
									writer["on" + event] = filesaver["on" + event];
								});
								writer.write(blob);
								filesaver.abort = function() {
									writer.abort();
									filesaver.readyState = filesaver.DONE;
								};
								filesaver.readyState = filesaver.WRITING;
							}), fs_error);
						}), fs_error);
					};
					dir.getFile(name, {create: false}, abortable(function(file) {
						// delete file if it already exists
						file.remove();
						save();
					}), abortable(function(ex) {
						if (ex.code === ex.NOT_FOUND_ERR) {
							save();
						} else {
							fs_error();
						}
					}));
				}), fs_error);
			}), fs_error);
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name, no_auto_bom);
		};
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name || "download");
		};
	}

	FS_proto.abort = function() {
		var filesaver = this;
		filesaver.readyState = filesaver.DONE;
		dispatch(filesaver, "abort");
	};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| undefined.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__(5) !== null) && (__webpack_require__(6) != null)) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
    return saveAs;
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/*
 * Copyright (c) 2012 chick307 <chick307@gmail.com>
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

void function(global, callback) {
	if (true) {
		module.exports = callback();
	} else if (typeof define === 'function') {
		define(callback);
	} else {
		global.adler32cs = callback();
	}
}(jsPDF, function() {
	var _hasArrayBuffer = typeof ArrayBuffer === 'function' &&
		typeof Uint8Array === 'function';

	var _Buffer = null, _isBuffer = (function() {
		if (!_hasArrayBuffer)
			return function _isBuffer() { return false };

		try {
			var buffer = {};
			if (typeof buffer.Buffer === 'function')
				_Buffer = buffer.Buffer;
		} catch (error) {}

		return function _isBuffer(value) {
			return value instanceof ArrayBuffer ||
				_Buffer !== null && value instanceof _Buffer;
		};
	}());

	var _utf8ToBinary = (function() {
		if (_Buffer !== null) {
			return function _utf8ToBinary(utf8String) {
				return new _Buffer(utf8String, 'utf8').toString('binary');
			};
		} else {
			return function _utf8ToBinary(utf8String) {
				return unescape(encodeURIComponent(utf8String));
			};
		}
	}());

	var MOD = 65521;

	var _update = function _update(checksum, binaryString) {
		var a = checksum & 0xFFFF, b = checksum >>> 16;
		for (var i = 0, length = binaryString.length; i < length; i++) {
			a = (a + (binaryString.charCodeAt(i) & 0xFF)) % MOD;
			b = (b + a) % MOD;
		}
		return (b << 16 | a) >>> 0;
	};

	var _updateUint8Array = function _updateUint8Array(checksum, uint8Array) {
		var a = checksum & 0xFFFF, b = checksum >>> 16;
		for (var i = 0, length = uint8Array.length, x; i < length; i++) {
			a = (a + uint8Array[i]) % MOD;
			b = (b + a) % MOD;
		}
		return (b << 16 | a) >>> 0
	};

	var exports = {};

	var Adler32 = exports.Adler32 = (function() {
		var ctor = function Adler32(checksum) {
			if (!(this instanceof ctor)) {
				throw new TypeError(
					'Constructor cannot called be as a function.');
			}
			if (!isFinite(checksum = checksum == null ? 1 : +checksum)) {
				throw new Error(
					'First arguments needs to be a finite number.');
			}
			this.checksum = checksum >>> 0;
		};

		var proto = ctor.prototype = {};
		proto.constructor = ctor;

		ctor.from = function(from) {
			from.prototype = proto;
			return from;
		}(function from(binaryString) {
			if (!(this instanceof ctor)) {
				throw new TypeError(
					'Constructor cannot called be as a function.');
			}
			if (binaryString == null)
				throw new Error('First argument needs to be a string.');
			this.checksum = _update(1, binaryString.toString());
		});

		ctor.fromUtf8 = function(fromUtf8) {
			fromUtf8.prototype = proto;
			return fromUtf8;
		}(function fromUtf8(utf8String) {
			if (!(this instanceof ctor)) {
				throw new TypeError(
					'Constructor cannot called be as a function.');
			}
			if (utf8String == null)
				throw new Error('First argument needs to be a string.');
			var binaryString = _utf8ToBinary(utf8String.toString());
			this.checksum = _update(1, binaryString);
		});

		if (_hasArrayBuffer) {
			ctor.fromBuffer = function(fromBuffer) {
				fromBuffer.prototype = proto;
				return fromBuffer;
			}(function fromBuffer(buffer) {
				if (!(this instanceof ctor)) {
					throw new TypeError(
						'Constructor cannot called be as a function.');
				}
				if (!_isBuffer(buffer))
					throw new Error('First argument needs to be ArrayBuffer.');
				var array = new Uint8Array(buffer);
				return this.checksum = _updateUint8Array(1, array);
			});
		}

		proto.update = function update(binaryString) {
			if (binaryString == null)
				throw new Error('First argument needs to be a string.');
			binaryString = binaryString.toString();
			return this.checksum = _update(this.checksum, binaryString);
		};

		proto.updateUtf8 = function updateUtf8(utf8String) {
			if (utf8String == null)
				throw new Error('First argument needs to be a string.');
			var binaryString = _utf8ToBinary(utf8String.toString());
			return this.checksum = _update(this.checksum, binaryString);
		};

		if (_hasArrayBuffer) {
			proto.updateBuffer = function updateBuffer(buffer) {
				if (!_isBuffer(buffer))
					throw new Error('First argument needs to be ArrayBuffer.');
				var array = new Uint8Array(buffer);
				return this.checksum = _updateUint8Array(this.checksum, array);
			};
		}

		proto.clone = function clone() {
			return new Adler32(this.checksum);
		};

		return ctor;
	}());

	exports.from = function from(binaryString) {
		if (binaryString == null)
			throw new Error('First argument needs to be a string.');
		return _update(1, binaryString.toString());
	};

	exports.fromUtf8 = function fromUtf8(utf8String) {
		if (utf8String == null)
			throw new Error('First argument needs to be a string.');
		var binaryString = _utf8ToBinary(utf8String.toString());
		return _update(1, binaryString);
	};

	if (_hasArrayBuffer) {
		exports.fromBuffer = function fromBuffer(buffer) {
			if (!_isBuffer(buffer))
				throw new Error('First argument need to be ArrayBuffer.');
			var array = new Uint8Array(buffer);
			return _updateUint8Array(1, array);
		};
	}

	return exports;
});

/**
 * CssColors
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

/**
 * Usage CssColors('red');
 * Returns RGB hex color with '#' prefix
 */

var CssColors = {};
CssColors._colorsTable = {
	"aliceblue" : "#f0f8ff",
	"antiquewhite" : "#faebd7",
	"aqua" : "#00ffff",
	"aquamarine" : "#7fffd4",
	"azure" : "#f0ffff",
	"beige" : "#f5f5dc",
	"bisque" : "#ffe4c4",
	"black" : "#000000",
	"blanchedalmond" : "#ffebcd",
	"blue" : "#0000ff",
	"blueviolet" : "#8a2be2",
	"brown" : "#a52a2a",
	"burlywood" : "#deb887",
	"cadetblue" : "#5f9ea0",
	"chartreuse" : "#7fff00",
	"chocolate" : "#d2691e",
	"coral" : "#ff7f50",
	"cornflowerblue" : "#6495ed",
	"cornsilk" : "#fff8dc",
	"crimson" : "#dc143c",
	"cyan" : "#00ffff",
	"darkblue" : "#00008b",
	"darkcyan" : "#008b8b",
	"darkgoldenrod" : "#b8860b",
	"darkgray" : "#a9a9a9",
	"darkgreen" : "#006400",
	"darkkhaki" : "#bdb76b",
	"darkmagenta" : "#8b008b",
	"darkolivegreen" : "#556b2f",
	"darkorange" : "#ff8c00",
	"darkorchid" : "#9932cc",
	"darkred" : "#8b0000",
	"darksalmon" : "#e9967a",
	"darkseagreen" : "#8fbc8f",
	"darkslateblue" : "#483d8b",
	"darkslategray" : "#2f4f4f",
	"darkturquoise" : "#00ced1",
	"darkviolet" : "#9400d3",
	"deeppink" : "#ff1493",
	"deepskyblue" : "#00bfff",
	"dimgray" : "#696969",
	"dodgerblue" : "#1e90ff",
	"firebrick" : "#b22222",
	"floralwhite" : "#fffaf0",
	"forestgreen" : "#228b22",
	"fuchsia" : "#ff00ff",
	"gainsboro" : "#dcdcdc",
	"ghostwhite" : "#f8f8ff",
	"gold" : "#ffd700",
	"goldenrod" : "#daa520",
	"gray" : "#808080",
	"green" : "#008000",
	"greenyellow" : "#adff2f",
	"honeydew" : "#f0fff0",
	"hotpink" : "#ff69b4",
	"indianred " : "#cd5c5c",
	"indigo" : "#4b0082",
	"ivory" : "#fffff0",
	"khaki" : "#f0e68c",
	"lavender" : "#e6e6fa",
	"lavenderblush" : "#fff0f5",
	"lawngreen" : "#7cfc00",
	"lemonchiffon" : "#fffacd",
	"lightblue" : "#add8e6",
	"lightcoral" : "#f08080",
	"lightcyan" : "#e0ffff",
	"lightgoldenrodyellow" : "#fafad2",
	"lightgrey" : "#d3d3d3",
	"lightgreen" : "#90ee90",
	"lightpink" : "#ffb6c1",
	"lightsalmon" : "#ffa07a",
	"lightseagreen" : "#20b2aa",
	"lightskyblue" : "#87cefa",
	"lightslategray" : "#778899",
	"lightsteelblue" : "#b0c4de",
	"lightyellow" : "#ffffe0",
	"lime" : "#00ff00",
	"limegreen" : "#32cd32",
	"linen" : "#faf0e6",
	"magenta" : "#ff00ff",
	"maroon" : "#800000",
	"mediumaquamarine" : "#66cdaa",
	"mediumblue" : "#0000cd",
	"mediumorchid" : "#ba55d3",
	"mediumpurple" : "#9370d8",
	"mediumseagreen" : "#3cb371",
	"mediumslateblue" : "#7b68ee",
	"mediumspringgreen" : "#00fa9a",
	"mediumturquoise" : "#48d1cc",
	"mediumvioletred" : "#c71585",
	"midnightblue" : "#191970",
	"mintcream" : "#f5fffa",
	"mistyrose" : "#ffe4e1",
	"moccasin" : "#ffe4b5",
	"navajowhite" : "#ffdead",
	"navy" : "#000080",
	"oldlace" : "#fdf5e6",
	"olive" : "#808000",
	"olivedrab" : "#6b8e23",
	"orange" : "#ffa500",
	"orangered" : "#ff4500",
	"orchid" : "#da70d6",
	"palegoldenrod" : "#eee8aa",
	"palegreen" : "#98fb98",
	"paleturquoise" : "#afeeee",
	"palevioletred" : "#d87093",
	"papayawhip" : "#ffefd5",
	"peachpuff" : "#ffdab9",
	"peru" : "#cd853f",
	"pink" : "#ffc0cb",
	"plum" : "#dda0dd",
	"powderblue" : "#b0e0e6",
	"purple" : "#800080",
	"red" : "#ff0000",
	"rosybrown" : "#bc8f8f",
	"royalblue" : "#4169e1",
	"saddlebrown" : "#8b4513",
	"salmon" : "#fa8072",
	"sandybrown" : "#f4a460",
	"seagreen" : "#2e8b57",
	"seashell" : "#fff5ee",
	"sienna" : "#a0522d",
	"silver" : "#c0c0c0",
	"skyblue" : "#87ceeb",
	"slateblue" : "#6a5acd",
	"slategray" : "#708090",
	"snow" : "#fffafa",
	"springgreen" : "#00ff7f",
	"steelblue" : "#4682b4",
	"tan" : "#d2b48c",
	"teal" : "#008080",
	"thistle" : "#d8bfd8",
	"tomato" : "#ff6347",
	"turquoise" : "#40e0d0",
	"violet" : "#ee82ee",
	"wheat" : "#f5deb3",
	"white" : "#ffffff",
	"whitesmoke" : "#f5f5f5",
	"yellow" : "#ffff00",
	"yellowgreen" : "#9acd32"
};

CssColors.colorNameToHex = function(color) {
	color = color.toLowerCase();
	if (typeof this._colorsTable[color] != 'undefined')
		return this._colorsTable[color];

	return false;
};

/*
 Deflate.js - https://github.com/gildas-lormeau/zip.js
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/*
 * This program is based on JZlib 1.0.2 ymnk, JCraft,Inc.
 * JZlib is based on zlib-1.1.3, so all credit should go authors
 * Jean-loup Gailly(jloup@gzip.org) and Mark Adler(madler@alumni.caltech.edu)
 * and contributors of zlib.
 */

var Deflater = (function(obj) {

	// Global

	var MAX_BITS = 15;
	var D_CODES = 30;
	var BL_CODES = 19;

	var LENGTH_CODES = 29;
	var LITERALS = 256;
	var L_CODES = (LITERALS + 1 + LENGTH_CODES);
	var HEAP_SIZE = (2 * L_CODES + 1);

	var END_BLOCK = 256;

	// Bit length codes must not exceed MAX_BL_BITS bits
	var MAX_BL_BITS = 7;

	// repeat previous bit length 3-6 times (2 bits of repeat count)
	var REP_3_6 = 16;

	// repeat a zero length 3-10 times (3 bits of repeat count)
	var REPZ_3_10 = 17;

	// repeat a zero length 11-138 times (7 bits of repeat count)
	var REPZ_11_138 = 18;

	// The lengths of the bit length codes are sent in order of decreasing
	// probability, to avoid transmitting the lengths for unused bit
	// length codes.

	var Buf_size = 8 * 2;

	// JZlib version : "1.0.2"
	var Z_DEFAULT_COMPRESSION = -1;

	// compression strategy
	var Z_FILTERED = 1;
	var Z_HUFFMAN_ONLY = 2;
	var Z_DEFAULT_STRATEGY = 0;

	var Z_NO_FLUSH = 0;
	var Z_PARTIAL_FLUSH = 1;
	var Z_FULL_FLUSH = 3;
	var Z_FINISH = 4;

	var Z_OK = 0;
	var Z_STREAM_END = 1;
	var Z_NEED_DICT = 2;
	var Z_STREAM_ERROR = -2;
	var Z_DATA_ERROR = -3;
	var Z_BUF_ERROR = -5;

	// Tree

	// see definition of array dist_code below
	var _dist_code = [ 0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
			10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
			12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,
			13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
			14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
			14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
			15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19,
			20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
			24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
			26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
			27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
			28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29,
			29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
			29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29 ];

	function Tree() {
		var that = this;

		// dyn_tree; // the dynamic tree
		// max_code; // largest code with non zero frequency
		// stat_desc; // the corresponding static tree

		// Compute the optimal bit lengths for a tree and update the total bit
		// length
		// for the current block.
		// IN assertion: the fields freq and dad are set, heap[heap_max] and
		// above are the tree nodes sorted by increasing frequency.
		// OUT assertions: the field len is set to the optimal bit length, the
		// array bl_count contains the frequencies for each bit length.
		// The length opt_len is updated; static_len is also updated if stree is
		// not null.
		function gen_bitlen(s) {
			var tree = that.dyn_tree;
			var stree = that.stat_desc.static_tree;
			var extra = that.stat_desc.extra_bits;
			var base = that.stat_desc.extra_base;
			var max_length = that.stat_desc.max_length;
			var h; // heap index
			var n, m; // iterate over the tree elements
			var bits; // bit length
			var xbits; // extra bits
			var f; // frequency
			var overflow = 0; // number of elements with bit length too large

			for (bits = 0; bits <= MAX_BITS; bits++)
				s.bl_count[bits] = 0;

			// In a first pass, compute the optimal bit lengths (which may
			// overflow in the case of the bit length tree).
			tree[s.heap[s.heap_max] * 2 + 1] = 0; // root of the heap

			for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
				n = s.heap[h];
				bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
				if (bits > max_length) {
					bits = max_length;
					overflow++;
				}
				tree[n * 2 + 1] = bits;
				// We overwrite tree[n*2+1] which is no longer needed

				if (n > that.max_code)
					continue; // not a leaf node

				s.bl_count[bits]++;
				xbits = 0;
				if (n >= base)
					xbits = extra[n - base];
				f = tree[n * 2];
				s.opt_len += f * (bits + xbits);
				if (stree)
					s.static_len += f * (stree[n * 2 + 1] + xbits);
			}
			if (overflow === 0)
				return;

			// This happens for example on obj2 and pic of the Calgary corpus
			// Find the first bit length which could increase:
			do {
				bits = max_length - 1;
				while (s.bl_count[bits] === 0)
					bits--;
				s.bl_count[bits]--; // move one leaf down the tree
				s.bl_count[bits + 1] += 2; // move one overflow item as its brother
				s.bl_count[max_length]--;
				// The brother of the overflow item also moves one step up,
				// but this does not affect bl_count[max_length]
				overflow -= 2;
			} while (overflow > 0);

			for (bits = max_length; bits !== 0; bits--) {
				n = s.bl_count[bits];
				while (n !== 0) {
					m = s.heap[--h];
					if (m > that.max_code)
						continue;
					if (tree[m * 2 + 1] != bits) {
						s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
						tree[m * 2 + 1] = bits;
					}
					n--;
				}
			}
		}

		// Reverse the first len bits of a code, using straightforward code (a
		// faster
		// method would use a table)
		// IN assertion: 1 <= len <= 15
		function bi_reverse(code, // the value to invert
		len // its bit length
		) {
			var res = 0;
			do {
				res |= code & 1;
				code >>>= 1;
				res <<= 1;
			} while (--len > 0);
			return res >>> 1;
		}

		// Generate the codes for a given tree and bit counts (which need not be
		// optimal).
		// IN assertion: the array bl_count contains the bit length statistics for
		// the given tree and the field len is set for all tree elements.
		// OUT assertion: the field code is set for all tree elements of non
		// zero code length.
		function gen_codes(tree, // the tree to decorate
		max_code, // largest code with non zero frequency
		bl_count // number of codes at each bit length
		) {
			var next_code = []; // next code value for each
			// bit length
			var code = 0; // running code value
			var bits; // bit index
			var n; // code index
			var len;

			// The distribution counts are first used to generate the code values
			// without bit reversal.
			for (bits = 1; bits <= MAX_BITS; bits++) {
				next_code[bits] = code = ((code + bl_count[bits - 1]) << 1);
			}

			// Check that the bit counts in bl_count are consistent. The last code
			// must be all ones.
			// Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
			// "inconsistent bit counts");
			// Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

			for (n = 0; n <= max_code; n++) {
				len = tree[n * 2 + 1];
				if (len === 0)
					continue;
				// Now reverse the bits
				tree[n * 2] = bi_reverse(next_code[len]++, len);
			}
		}

		// Construct one Huffman tree and assigns the code bit strings and lengths.
		// Update the total bit length for the current block.
		// IN assertion: the field freq is set for all tree elements.
		// OUT assertions: the fields len and code are set to the optimal bit length
		// and corresponding code. The length opt_len is updated; static_len is
		// also updated if stree is not null. The field max_code is set.
		that.build_tree = function(s) {
			var tree = that.dyn_tree;
			var stree = that.stat_desc.static_tree;
			var elems = that.stat_desc.elems;
			var n, m; // iterate over heap elements
			var max_code = -1; // largest code with non zero frequency
			var node; // new node being created

			// Construct the initial heap, with least frequent element in
			// heap[1]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
			// heap[0] is not used.
			s.heap_len = 0;
			s.heap_max = HEAP_SIZE;

			for (n = 0; n < elems; n++) {
				if (tree[n * 2] !== 0) {
					s.heap[++s.heap_len] = max_code = n;
					s.depth[n] = 0;
				} else {
					tree[n * 2 + 1] = 0;
				}
			}

			// The pkzip format requires that at least one distance code exists,
			// and that at least one bit should be sent even if there is only one
			// possible code. So to avoid special checks later on we force at least
			// two codes of non zero frequency.
			while (s.heap_len < 2) {
				node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
				tree[node * 2] = 1;
				s.depth[node] = 0;
				s.opt_len--;
				if (stree)
					s.static_len -= stree[node * 2 + 1];
				// node is 0 or 1 so it does not have extra bits
			}
			that.max_code = max_code;

			// The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
			// establish sub-heaps of increasing lengths:

			for (n = Math.floor(s.heap_len / 2); n >= 1; n--)
				s.pqdownheap(tree, n);

			// Construct the Huffman tree by repeatedly combining the least two
			// frequent nodes.

			node = elems; // next internal node of the tree
			do {
				// n = node of least frequency
				n = s.heap[1];
				s.heap[1] = s.heap[s.heap_len--];
				s.pqdownheap(tree, 1);
				m = s.heap[1]; // m = node of next least frequency

				s.heap[--s.heap_max] = n; // keep the nodes sorted by frequency
				s.heap[--s.heap_max] = m;

				// Create a new node father of n and m
				tree[node * 2] = (tree[n * 2] + tree[m * 2]);
				s.depth[node] = Math.max(s.depth[n], s.depth[m]) + 1;
				tree[n * 2 + 1] = tree[m * 2 + 1] = node;

				// and insert the new node in the heap
				s.heap[1] = node++;
				s.pqdownheap(tree, 1);
			} while (s.heap_len >= 2);

			s.heap[--s.heap_max] = s.heap[1];

			// At this point, the fields freq and dad are set. We can now
			// generate the bit lengths.

			gen_bitlen(s);

			// The field len is now set, we can generate the bit codes
			gen_codes(tree, that.max_code, s.bl_count);
		};

	}

	Tree._length_code = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16,
			16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20,
			20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
			22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
			24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
			25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
			26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28 ];

	Tree.base_length = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0 ];

	Tree.base_dist = [ 0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384,
			24576 ];

	// Mapping from a distance to a distance code. dist is the distance - 1 and
	// must not have side effects. _dist_code[256] and _dist_code[257] are never
	// used.
	Tree.d_code = function(dist) {
		return ((dist) < 256 ? _dist_code[dist] : _dist_code[256 + ((dist) >>> 7)]);
	};

	// extra bits for each length code
	Tree.extra_lbits = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0 ];

	// extra bits for each distance code
	Tree.extra_dbits = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ];

	// extra bits for each bit length code
	Tree.extra_blbits = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7 ];

	Tree.bl_order = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];

	// StaticTree

	function StaticTree(static_tree, extra_bits, extra_base, elems, max_length) {
		var that = this;
		that.static_tree = static_tree;
		that.extra_bits = extra_bits;
		that.extra_base = extra_base;
		that.elems = elems;
		that.max_length = max_length;
	}

	StaticTree.static_ltree = [ 12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8,
			130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42,
			8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8,
			22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8,
			222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113,
			8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8,
			69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8,
			173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9,
			51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9,
			427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379,
			9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23,
			9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9,
			399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9,
			223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7,
			40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8,
			99, 8, 227, 8 ];

	StaticTree.static_dtree = [ 0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5,
			25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5 ];

	StaticTree.static_l_desc = new StaticTree(StaticTree.static_ltree, Tree.extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);

	StaticTree.static_d_desc = new StaticTree(StaticTree.static_dtree, Tree.extra_dbits, 0, D_CODES, MAX_BITS);

	StaticTree.static_bl_desc = new StaticTree(null, Tree.extra_blbits, 0, BL_CODES, MAX_BL_BITS);

	// Deflate

	var MAX_MEM_LEVEL = 9;
	var DEF_MEM_LEVEL = 8;

	function Config(good_length, max_lazy, nice_length, max_chain, func) {
		var that = this;
		that.good_length = good_length;
		that.max_lazy = max_lazy;
		that.nice_length = nice_length;
		that.max_chain = max_chain;
		that.func = func;
	}

	var STORED = 0;
	var FAST = 1;
	var SLOW = 2;
	var config_table = [ new Config(0, 0, 0, 0, STORED), new Config(4, 4, 8, 4, FAST), new Config(4, 5, 16, 8, FAST), new Config(4, 6, 32, 32, FAST),
			new Config(4, 4, 16, 16, SLOW), new Config(8, 16, 32, 32, SLOW), new Config(8, 16, 128, 128, SLOW), new Config(8, 32, 128, 256, SLOW),
			new Config(32, 128, 258, 1024, SLOW), new Config(32, 258, 258, 4096, SLOW) ];

	var z_errmsg = [ "need dictionary", // Z_NEED_DICT
	// 2
	"stream end", // Z_STREAM_END 1
	"", // Z_OK 0
	"", // Z_ERRNO (-1)
	"stream error", // Z_STREAM_ERROR (-2)
	"data error", // Z_DATA_ERROR (-3)
	"", // Z_MEM_ERROR (-4)
	"buffer error", // Z_BUF_ERROR (-5)
	"",// Z_VERSION_ERROR (-6)
	"" ];

	// block not completed, need more input or more output
	var NeedMore = 0;

	// block flush performed
	var BlockDone = 1;

	// finish started, need only more output at next deflate
	var FinishStarted = 2;

	// finish done, accept no more input or output
	var FinishDone = 3;

	// preset dictionary flag in zlib header
	var PRESET_DICT = 0x20;

	var INIT_STATE = 42;
	var BUSY_STATE = 113;
	var FINISH_STATE = 666;

	// The deflate compression method
	var Z_DEFLATED = 8;

	var STORED_BLOCK = 0;
	var STATIC_TREES = 1;
	var DYN_TREES = 2;

	var MIN_MATCH = 3;
	var MAX_MATCH = 258;
	var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

	function smaller(tree, n, m, depth) {
		var tn2 = tree[n * 2];
		var tm2 = tree[m * 2];
		return (tn2 < tm2 || (tn2 == tm2 && depth[n] <= depth[m]));
	}

	function Deflate() {

		var that = this;
		var strm; // pointer back to this zlib stream
		var status; // as the name implies
		// pending_buf; // output still pending
		var pending_buf_size; // size of pending_buf
		// pending_out; // next pending byte to output to the stream
		// pending; // nb of bytes in the pending buffer
		var method; // STORED (for zip only) or DEFLATED
		var last_flush; // value of flush param for previous deflate call

		var w_size; // LZ77 window size (32K by default)
		var w_bits; // log2(w_size) (8..16)
		var w_mask; // w_size - 1

		var window;
		// Sliding window. Input bytes are read into the second half of the window,
		// and move to the first half later to keep a dictionary of at least wSize
		// bytes. With this organization, matches are limited to a distance of
		// wSize-MAX_MATCH bytes, but this ensures that IO is always
		// performed with a length multiple of the block size. Also, it limits
		// the window size to 64K, which is quite useful on MSDOS.
		// To do: use the user input buffer as sliding window.

		var window_size;
		// Actual size of window: 2*wSize, except when the user input buffer
		// is directly used as sliding window.

		var prev;
		// Link to older string with same hash index. To limit the size of this
		// array to 64K, this link is maintained only for the last 32K strings.
		// An index in this array is thus a window index modulo 32K.

		var head; // Heads of the hash chains or NIL.

		var ins_h; // hash index of string to be inserted
		var hash_size; // number of elements in hash table
		var hash_bits; // log2(hash_size)
		var hash_mask; // hash_size-1

		// Number of bits by which ins_h must be shifted at each input
		// step. It must be such that after MIN_MATCH steps, the oldest
		// byte no longer takes part in the hash key, that is:
		// hash_shift * MIN_MATCH >= hash_bits
		var hash_shift;

		// Window position at the beginning of the current output block. Gets
		// negative when the window is moved backwards.

		var block_start;

		var match_length; // length of best match
		var prev_match; // previous match
		var match_available; // set if previous match exists
		var strstart; // start of string to insert
		var match_start; // start of matching string
		var lookahead; // number of valid bytes ahead in window

		// Length of the best match at previous step. Matches not greater than this
		// are discarded. This is used in the lazy match evaluation.
		var prev_length;

		// To speed up deflation, hash chains are never searched beyond this
		// length. A higher limit improves compression ratio but degrades the speed.
		var max_chain_length;

		// Attempt to find a better match only when the current match is strictly
		// smaller than this value. This mechanism is used only for compression
		// levels >= 4.
		var max_lazy_match;

		// Insert new strings in the hash table only if the match length is not
		// greater than this length. This saves time but degrades compression.
		// max_insert_length is used only for compression levels <= 3.

		var level; // compression level (1..9)
		var strategy; // favor or force Huffman coding

		// Use a faster search when the previous match is longer than this
		var good_match;

		// Stop searching when current match exceeds this
		var nice_match;

		var dyn_ltree; // literal and length tree
		var dyn_dtree; // distance tree
		var bl_tree; // Huffman tree for bit lengths

		var l_desc = new Tree(); // desc for literal tree
		var d_desc = new Tree(); // desc for distance tree
		var bl_desc = new Tree(); // desc for bit length tree

		// that.heap_len; // number of elements in the heap
		// that.heap_max; // element of largest frequency
		// The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
		// The same heap array is used to build all trees.

		// Depth of each subtree used as tie breaker for trees of equal frequency
		that.depth = [];

		var l_buf; // index for literals or lengths */

		// Size of match buffer for literals/lengths. There are 4 reasons for
		// limiting lit_bufsize to 64K:
		// - frequencies can be kept in 16 bit counters
		// - if compression is not successful for the first block, all input
		// data is still in the window so we can still emit a stored block even
		// when input comes from standard input. (This can also be done for
		// all blocks if lit_bufsize is not greater than 32K.)
		// - if compression is not successful for a file smaller than 64K, we can
		// even emit a stored file instead of a stored block (saving 5 bytes).
		// This is applicable only for zip (not gzip or zlib).
		// - creating new Huffman trees less frequently may not provide fast
		// adaptation to changes in the input data statistics. (Take for
		// example a binary file with poorly compressible code followed by
		// a highly compressible string table.) Smaller buffer sizes give
		// fast adaptation but have of course the overhead of transmitting
		// trees more frequently.
		// - I can't count above 4
		var lit_bufsize;

		var last_lit; // running index in l_buf

		// Buffer for distances. To simplify the code, d_buf and l_buf have
		// the same number of elements. To use different lengths, an extra flag
		// array would be necessary.

		var d_buf; // index of pendig_buf

		// that.opt_len; // bit length of current block with optimal trees
		// that.static_len; // bit length of current block with static trees
		var matches; // number of string matches in current block
		var last_eob_len; // bit length of EOB code for last block

		// Output buffer. bits are inserted starting at the bottom (least
		// significant bits).
		var bi_buf;

		// Number of valid bits in bi_buf. All bits above the last valid bit
		// are always zero.
		var bi_valid;

		// number of codes at each bit length for an optimal tree
		that.bl_count = [];

		// heap used to build the Huffman trees
		that.heap = [];

		dyn_ltree = [];
		dyn_dtree = [];
		bl_tree = [];

		function lm_init() {
			var i;
			window_size = 2 * w_size;

			head[hash_size - 1] = 0;
			for (i = 0; i < hash_size - 1; i++) {
				head[i] = 0;
			}

			// Set the default configuration parameters:
			max_lazy_match = config_table[level].max_lazy;
			good_match = config_table[level].good_length;
			nice_match = config_table[level].nice_length;
			max_chain_length = config_table[level].max_chain;

			strstart = 0;
			block_start = 0;
			lookahead = 0;
			match_length = prev_length = MIN_MATCH - 1;
			match_available = 0;
			ins_h = 0;
		}

		function init_block() {
			var i;
			// Initialize the trees.
			for (i = 0; i < L_CODES; i++)
				dyn_ltree[i * 2] = 0;
			for (i = 0; i < D_CODES; i++)
				dyn_dtree[i * 2] = 0;
			for (i = 0; i < BL_CODES; i++)
				bl_tree[i * 2] = 0;

			dyn_ltree[END_BLOCK * 2] = 1;
			that.opt_len = that.static_len = 0;
			last_lit = matches = 0;
		}

		// Initialize the tree data structures for a new zlib stream.
		function tr_init() {

			l_desc.dyn_tree = dyn_ltree;
			l_desc.stat_desc = StaticTree.static_l_desc;

			d_desc.dyn_tree = dyn_dtree;
			d_desc.stat_desc = StaticTree.static_d_desc;

			bl_desc.dyn_tree = bl_tree;
			bl_desc.stat_desc = StaticTree.static_bl_desc;

			bi_buf = 0;
			bi_valid = 0;
			last_eob_len = 8; // enough lookahead for inflate

			// Initialize the first block of the first file:
			init_block();
		}

		// Restore the heap property by moving down the tree starting at node k,
		// exchanging a node with the smallest of its two sons if necessary,
		// stopping
		// when the heap property is re-established (each father smaller than its
		// two sons).
		that.pqdownheap = function(tree, // the tree to restore
		k // node to move down
		) {
			var heap = that.heap;
			var v = heap[k];
			var j = k << 1; // left son of k
			while (j <= that.heap_len) {
				// Set j to the smallest of the two sons:
				if (j < that.heap_len && smaller(tree, heap[j + 1], heap[j], that.depth)) {
					j++;
				}
				// Exit if v is smaller than both sons
				if (smaller(tree, v, heap[j], that.depth))
					break;

				// Exchange v with the smallest son
				heap[k] = heap[j];
				k = j;
				// And continue down the tree, setting j to the left son of k
				j <<= 1;
			}
			heap[k] = v;
		};

		// Scan a literal or distance tree to determine the frequencies of the codes
		// in the bit length tree.
		function scan_tree(tree,// the tree to be scanned
		max_code // and its largest code of non zero frequency
		) {
			var n; // iterates over all tree elements
			var prevlen = -1; // last emitted length
			var curlen; // length of current code
			var nextlen = tree[0 * 2 + 1]; // length of next code
			var count = 0; // repeat count of the current code
			var max_count = 7; // max repeat count
			var min_count = 4; // min repeat count

			if (nextlen === 0) {
				max_count = 138;
				min_count = 3;
			}
			tree[(max_code + 1) * 2 + 1] = 0xffff; // guard

			for (n = 0; n <= max_code; n++) {
				curlen = nextlen;
				nextlen = tree[(n + 1) * 2 + 1];
				if (++count < max_count && curlen == nextlen) {
					continue;
				} else if (count < min_count) {
					bl_tree[curlen * 2] += count;
				} else if (curlen !== 0) {
					if (curlen != prevlen)
						bl_tree[curlen * 2]++;
					bl_tree[REP_3_6 * 2]++;
				} else if (count <= 10) {
					bl_tree[REPZ_3_10 * 2]++;
				} else {
					bl_tree[REPZ_11_138 * 2]++;
				}
				count = 0;
				prevlen = curlen;
				if (nextlen === 0) {
					max_count = 138;
					min_count = 3;
				} else if (curlen == nextlen) {
					max_count = 6;
					min_count = 3;
				} else {
					max_count = 7;
					min_count = 4;
				}
			}
		}

		// Construct the Huffman tree for the bit lengths and return the index in
		// bl_order of the last bit length code to send.
		function build_bl_tree() {
			var max_blindex; // index of last bit length code of non zero freq

			// Determine the bit length frequencies for literal and distance trees
			scan_tree(dyn_ltree, l_desc.max_code);
			scan_tree(dyn_dtree, d_desc.max_code);

			// Build the bit length tree:
			bl_desc.build_tree(that);
			// opt_len now includes the length of the tree representations, except
			// the lengths of the bit lengths codes and the 5+5+4 bits for the
			// counts.

			// Determine the number of bit length codes to send. The pkzip format
			// requires that at least 4 bit length codes be sent. (appnote.txt says
			// 3 but the actual value used is 4.)
			for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
				if (bl_tree[Tree.bl_order[max_blindex] * 2 + 1] !== 0)
					break;
			}
			// Update opt_len to include the bit length tree and counts
			that.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;

			return max_blindex;
		}

		// Output a byte on the stream.
		// IN assertion: there is enough room in pending_buf.
		function put_byte(p) {
			that.pending_buf[that.pending++] = p;
		}

		function put_short(w) {
			put_byte(w & 0xff);
			put_byte((w >>> 8) & 0xff);
		}

		function putShortMSB(b) {
			put_byte((b >> 8) & 0xff);
			put_byte((b & 0xff) & 0xff);
		}

		function send_bits(value, length) {
			var val, len = length;
			if (bi_valid > Buf_size - len) {
				val = value;
				// bi_buf |= (val << bi_valid);
				bi_buf |= ((val << bi_valid) & 0xffff);
				put_short(bi_buf);
				bi_buf = val >>> (Buf_size - bi_valid);
				bi_valid += len - Buf_size;
			} else {
				// bi_buf |= (value) << bi_valid;
				bi_buf |= (((value) << bi_valid) & 0xffff);
				bi_valid += len;
			}
		}

		function send_code(c, tree) {
			var c2 = c * 2;
			send_bits(tree[c2] & 0xffff, tree[c2 + 1] & 0xffff);
		}

		// Send a literal or distance tree in compressed form, using the codes in
		// bl_tree.
		function send_tree(tree,// the tree to be sent
		max_code // and its largest code of non zero frequency
		) {
			var n; // iterates over all tree elements
			var prevlen = -1; // last emitted length
			var curlen; // length of current code
			var nextlen = tree[0 * 2 + 1]; // length of next code
			var count = 0; // repeat count of the current code
			var max_count = 7; // max repeat count
			var min_count = 4; // min repeat count

			if (nextlen === 0) {
				max_count = 138;
				min_count = 3;
			}

			for (n = 0; n <= max_code; n++) {
				curlen = nextlen;
				nextlen = tree[(n + 1) * 2 + 1];
				if (++count < max_count && curlen == nextlen) {
					continue;
				} else if (count < min_count) {
					do {
						send_code(curlen, bl_tree);
					} while (--count !== 0);
				} else if (curlen !== 0) {
					if (curlen != prevlen) {
						send_code(curlen, bl_tree);
						count--;
					}
					send_code(REP_3_6, bl_tree);
					send_bits(count - 3, 2);
				} else if (count <= 10) {
					send_code(REPZ_3_10, bl_tree);
					send_bits(count - 3, 3);
				} else {
					send_code(REPZ_11_138, bl_tree);
					send_bits(count - 11, 7);
				}
				count = 0;
				prevlen = curlen;
				if (nextlen === 0) {
					max_count = 138;
					min_count = 3;
				} else if (curlen == nextlen) {
					max_count = 6;
					min_count = 3;
				} else {
					max_count = 7;
					min_count = 4;
				}
			}
		}

		// Send the header for a block using dynamic Huffman trees: the counts, the
		// lengths of the bit length codes, the literal tree and the distance tree.
		// IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
		function send_all_trees(lcodes, dcodes, blcodes) {
			var rank; // index in bl_order

			send_bits(lcodes - 257, 5); // not +255 as stated in appnote.txt
			send_bits(dcodes - 1, 5);
			send_bits(blcodes - 4, 4); // not -3 as stated in appnote.txt
			for (rank = 0; rank < blcodes; rank++) {
				send_bits(bl_tree[Tree.bl_order[rank] * 2 + 1], 3);
			}
			send_tree(dyn_ltree, lcodes - 1); // literal tree
			send_tree(dyn_dtree, dcodes - 1); // distance tree
		}

		// Flush the bit buffer, keeping at most 7 bits in it.
		function bi_flush() {
			if (bi_valid == 16) {
				put_short(bi_buf);
				bi_buf = 0;
				bi_valid = 0;
			} else if (bi_valid >= 8) {
				put_byte(bi_buf & 0xff);
				bi_buf >>>= 8;
				bi_valid -= 8;
			}
		}

		// Send one empty static block to give enough lookahead for inflate.
		// This takes 10 bits, of which 7 may remain in the bit buffer.
		// The current inflate code requires 9 bits of lookahead. If the
		// last two codes for the previous block (real code plus EOB) were coded
		// on 5 bits or less, inflate may have only 5+3 bits of lookahead to decode
		// the last real code. In this case we send two empty static blocks instead
		// of one. (There are no problems if the previous block is stored or fixed.)
		// To simplify the code, we assume the worst case of last real code encoded
		// on one bit only.
		function _tr_align() {
			send_bits(STATIC_TREES << 1, 3);
			send_code(END_BLOCK, StaticTree.static_ltree);

			bi_flush();

			// Of the 10 bits for the empty block, we have already sent
			// (10 - bi_valid) bits. The lookahead for the last real code (before
			// the EOB of the previous block) was thus at least one plus the length
			// of the EOB plus what we have just sent of the empty static block.
			if (1 + last_eob_len + 10 - bi_valid < 9) {
				send_bits(STATIC_TREES << 1, 3);
				send_code(END_BLOCK, StaticTree.static_ltree);
				bi_flush();
			}
			last_eob_len = 7;
		}

		// Save the match info and tally the frequency counts. Return true if
		// the current block must be flushed.
		function _tr_tally(dist, // distance of matched string
		lc // match length-MIN_MATCH or unmatched char (if dist==0)
		) {
			var out_length, in_length, dcode;
			that.pending_buf[d_buf + last_lit * 2] = (dist >>> 8) & 0xff;
			that.pending_buf[d_buf + last_lit * 2 + 1] = dist & 0xff;

			that.pending_buf[l_buf + last_lit] = lc & 0xff;
			last_lit++;

			if (dist === 0) {
				// lc is the unmatched char
				dyn_ltree[lc * 2]++;
			} else {
				matches++;
				// Here, lc is the match length - MIN_MATCH
				dist--; // dist = match distance - 1
				dyn_ltree[(Tree._length_code[lc] + LITERALS + 1) * 2]++;
				dyn_dtree[Tree.d_code(dist) * 2]++;
			}

			if ((last_lit & 0x1fff) === 0 && level > 2) {
				// Compute an upper bound for the compressed length
				out_length = last_lit * 8;
				in_length = strstart - block_start;
				for (dcode = 0; dcode < D_CODES; dcode++) {
					out_length += dyn_dtree[dcode * 2] * (5 + Tree.extra_dbits[dcode]);
				}
				out_length >>>= 3;
				if ((matches < Math.floor(last_lit / 2)) && out_length < Math.floor(in_length / 2))
					return true;
			}

			return (last_lit == lit_bufsize - 1);
			// We avoid equality with lit_bufsize because of wraparound at 64K
			// on 16 bit machines and because stored blocks are restricted to
			// 64K-1 bytes.
		}

		// Send the block data compressed using the given Huffman trees
		function compress_block(ltree, dtree) {
			var dist; // distance of matched string
			var lc; // match length or unmatched char (if dist === 0)
			var lx = 0; // running index in l_buf
			var code; // the code to send
			var extra; // number of extra bits to send

			if (last_lit !== 0) {
				do {
					dist = ((that.pending_buf[d_buf + lx * 2] << 8) & 0xff00) | (that.pending_buf[d_buf + lx * 2 + 1] & 0xff);
					lc = (that.pending_buf[l_buf + lx]) & 0xff;
					lx++;

					if (dist === 0) {
						send_code(lc, ltree); // send a literal byte
					} else {
						// Here, lc is the match length - MIN_MATCH
						code = Tree._length_code[lc];

						send_code(code + LITERALS + 1, ltree); // send the length
						// code
						extra = Tree.extra_lbits[code];
						if (extra !== 0) {
							lc -= Tree.base_length[code];
							send_bits(lc, extra); // send the extra length bits
						}
						dist--; // dist is now the match distance - 1
						code = Tree.d_code(dist);

						send_code(code, dtree); // send the distance code
						extra = Tree.extra_dbits[code];
						if (extra !== 0) {
							dist -= Tree.base_dist[code];
							send_bits(dist, extra); // send the extra distance bits
						}
					} // literal or match pair ?

					// Check that the overlay between pending_buf and d_buf+l_buf is
					// ok:
				} while (lx < last_lit);
			}

			send_code(END_BLOCK, ltree);
			last_eob_len = ltree[END_BLOCK * 2 + 1];
		}

		// Flush the bit buffer and align the output on a byte boundary
		function bi_windup() {
			if (bi_valid > 8) {
				put_short(bi_buf);
			} else if (bi_valid > 0) {
				put_byte(bi_buf & 0xff);
			}
			bi_buf = 0;
			bi_valid = 0;
		}

		// Copy a stored block, storing first the length and its
		// one's complement if requested.
		function copy_block(buf, // the input data
		len, // its length
		header // true if block header must be written
		) {
			bi_windup(); // align on byte boundary
			last_eob_len = 8; // enough lookahead for inflate

			if (header) {
				put_short(len);
				put_short(~len);
			}

			that.pending_buf.set(window.subarray(buf, buf + len), that.pending);
			that.pending += len;
		}

		// Send a stored block
		function _tr_stored_block(buf, // input block
		stored_len, // length of input block
		eof // true if this is the last block for a file
		) {
			send_bits((STORED_BLOCK << 1) + (eof ? 1 : 0), 3); // send block type
			copy_block(buf, stored_len, true); // with header
		}

		// Determine the best encoding for the current block: dynamic trees, static
		// trees or store, and output the encoded block to the zip file.
		function _tr_flush_block(buf, // input block, or NULL if too old
		stored_len, // length of input block
		eof // true if this is the last block for a file
		) {
			var opt_lenb, static_lenb;// opt_len and static_len in bytes
			var max_blindex = 0; // index of last bit length code of non zero freq

			// Build the Huffman trees unless a stored block is forced
			if (level > 0) {
				// Construct the literal and distance trees
				l_desc.build_tree(that);

				d_desc.build_tree(that);

				// At this point, opt_len and static_len are the total bit lengths
				// of
				// the compressed block data, excluding the tree representations.

				// Build the bit length tree for the above two trees, and get the
				// index
				// in bl_order of the last bit length code to send.
				max_blindex = build_bl_tree();

				// Determine the best encoding. Compute first the block length in
				// bytes
				opt_lenb = (that.opt_len + 3 + 7) >>> 3;
				static_lenb = (that.static_len + 3 + 7) >>> 3;

				if (static_lenb <= opt_lenb)
					opt_lenb = static_lenb;
			} else {
				opt_lenb = static_lenb = stored_len + 5; // force a stored block
			}

			if ((stored_len + 4 <= opt_lenb) && buf != -1) {
				// 4: two words for the lengths
				// The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
				// Otherwise we can't have processed more than WSIZE input bytes
				// since
				// the last block flush, because compression would have been
				// successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
				// transform a block into a stored block.
				_tr_stored_block(buf, stored_len, eof);
			} else if (static_lenb == opt_lenb) {
				send_bits((STATIC_TREES << 1) + (eof ? 1 : 0), 3);
				compress_block(StaticTree.static_ltree, StaticTree.static_dtree);
			} else {
				send_bits((DYN_TREES << 1) + (eof ? 1 : 0), 3);
				send_all_trees(l_desc.max_code + 1, d_desc.max_code + 1, max_blindex + 1);
				compress_block(dyn_ltree, dyn_dtree);
			}

			// The above check is made mod 2^32, for files larger than 512 MB
			// and uLong implemented on 32 bits.

			init_block();

			if (eof) {
				bi_windup();
			}
		}

		function flush_block_only(eof) {
			_tr_flush_block(block_start >= 0 ? block_start : -1, strstart - block_start, eof);
			block_start = strstart;
			strm.flush_pending();
		}

		// Fill the window when the lookahead becomes insufficient.
		// Updates strstart and lookahead.
		//
		// IN assertion: lookahead < MIN_LOOKAHEAD
		// OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
		// At least one byte has been read, or avail_in === 0; reads are
		// performed for at least two bytes (required for the zip translate_eol
		// option -- not supported here).
		function fill_window() {
			var n, m;
			var p;
			var more; // Amount of free space at the end of the window.

			do {
				more = (window_size - lookahead - strstart);

				// Deal with !@#$% 64K limit:
				if (more === 0 && strstart === 0 && lookahead === 0) {
					more = w_size;
				} else if (more == -1) {
					// Very unlikely, but possible on 16 bit machine if strstart ==
					// 0
					// and lookahead == 1 (input done one byte at time)
					more--;

					// If the window is almost full and there is insufficient
					// lookahead,
					// move the upper half to the lower one to make room in the
					// upper half.
				} else if (strstart >= w_size + w_size - MIN_LOOKAHEAD) {
					window.set(window.subarray(w_size, w_size + w_size), 0);

					match_start -= w_size;
					strstart -= w_size; // we now have strstart >= MAX_DIST
					block_start -= w_size;

					// Slide the hash table (could be avoided with 32 bit values
					// at the expense of memory usage). We slide even when level ==
					// 0
					// to keep the hash table consistent if we switch back to level
					// > 0
					// later. (Using level 0 permanently is not an optimal usage of
					// zlib, so we don't care about this pathological case.)

					n = hash_size;
					p = n;
					do {
						m = (head[--p] & 0xffff);
						head[p] = (m >= w_size ? m - w_size : 0);
					} while (--n !== 0);

					n = w_size;
					p = n;
					do {
						m = (prev[--p] & 0xffff);
						prev[p] = (m >= w_size ? m - w_size : 0);
						// If n is not on any hash chain, prev[n] is garbage but
						// its value will never be used.
					} while (--n !== 0);
					more += w_size;
				}

				if (strm.avail_in === 0)
					return;

				// If there was no sliding:
				// strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
				// more == window_size - lookahead - strstart
				// => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
				// => more >= window_size - 2*WSIZE + 2
				// In the BIG_MEM or MMAP case (not yet supported),
				// window_size == input_size + MIN_LOOKAHEAD &&
				// strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
				// Otherwise, window_size == 2*WSIZE so more >= 2.
				// If there was sliding, more >= WSIZE. So in all cases, more >= 2.

				n = strm.read_buf(window, strstart + lookahead, more);
				lookahead += n;

				// Initialize the hash value now that we have some input:
				if (lookahead >= MIN_MATCH) {
					ins_h = window[strstart] & 0xff;
					ins_h = (((ins_h) << hash_shift) ^ (window[strstart + 1] & 0xff)) & hash_mask;
				}
				// If the whole input has less than MIN_MATCH bytes, ins_h is
				// garbage,
				// but this is not important since only literal bytes will be
				// emitted.
			} while (lookahead < MIN_LOOKAHEAD && strm.avail_in !== 0);
		}

		// Copy without compression as much as possible from the input stream,
		// return
		// the current block state.
		// This function does not insert new strings in the dictionary since
		// uncompressible data is probably not useful. This function is used
		// only for the level=0 compression option.
		// NOTE: this function should be optimized to avoid extra copying from
		// window to pending_buf.
		function deflate_stored(flush) {
			// Stored blocks are limited to 0xffff bytes, pending_buf is limited
			// to pending_buf_size, and each stored block has a 5 byte header:

			var max_block_size = 0xffff;
			var max_start;

			if (max_block_size > pending_buf_size - 5) {
				max_block_size = pending_buf_size - 5;
			}

			// Copy as much as possible from input to output:
			while (true) {
				// Fill the window as much as possible:
				if (lookahead <= 1) {
					fill_window();
					if (lookahead === 0 && flush == Z_NO_FLUSH)
						return NeedMore;
					if (lookahead === 0)
						break; // flush the current block
				}

				strstart += lookahead;
				lookahead = 0;

				// Emit a stored block if pending_buf will be full:
				max_start = block_start + max_block_size;
				if (strstart === 0 || strstart >= max_start) {
					// strstart === 0 is possible when wraparound on 16-bit machine
					lookahead = (strstart - max_start);
					strstart = max_start;

					flush_block_only(false);
					if (strm.avail_out === 0)
						return NeedMore;

				}

				// Flush if we may have to slide, otherwise block_start may become
				// negative and the data will be gone:
				if (strstart - block_start >= w_size - MIN_LOOKAHEAD) {
					flush_block_only(false);
					if (strm.avail_out === 0)
						return NeedMore;
				}
			}

			flush_block_only(flush == Z_FINISH);
			if (strm.avail_out === 0)
				return (flush == Z_FINISH) ? FinishStarted : NeedMore;

			return flush == Z_FINISH ? FinishDone : BlockDone;
		}

		function longest_match(cur_match) {
			var chain_length = max_chain_length; // max hash chain length
			var scan = strstart; // current string
			var match; // matched string
			var len; // length of current match
			var best_len = prev_length; // best match length so far
			var limit = strstart > (w_size - MIN_LOOKAHEAD) ? strstart - (w_size - MIN_LOOKAHEAD) : 0;
			var _nice_match = nice_match;

			// Stop when cur_match becomes <= limit. To simplify the code,
			// we prevent matches with the string of window index 0.

			var wmask = w_mask;

			var strend = strstart + MAX_MATCH;
			var scan_end1 = window[scan + best_len - 1];
			var scan_end = window[scan + best_len];

			// The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of
			// 16.
			// It is easy to get rid of this optimization if necessary.

			// Do not waste too much time if we already have a good match:
			if (prev_length >= good_match) {
				chain_length >>= 2;
			}

			// Do not look for matches beyond the end of the input. This is
			// necessary
			// to make deflate deterministic.
			if (_nice_match > lookahead)
				_nice_match = lookahead;

			do {
				match = cur_match;

				// Skip to next match if the match length cannot increase
				// or if the match length is less than 2:
				if (window[match + best_len] != scan_end || window[match + best_len - 1] != scan_end1 || window[match] != window[scan]
						|| window[++match] != window[scan + 1])
					continue;

				// The check at best_len-1 can be removed because it will be made
				// again later. (This heuristic is not always a win.)
				// It is not necessary to compare scan[2] and match[2] since they
				// are always equal when the other bytes match, given that
				// the hash keys are equal and that HASH_BITS >= 8.
				scan += 2;
				match++;

				// We check for insufficient lookahead only every 8th comparison;
				// the 256th check will be made at strstart+258.
				do {
				} while (window[++scan] == window[++match] && window[++scan] == window[++match] && window[++scan] == window[++match]
						&& window[++scan] == window[++match] && window[++scan] == window[++match] && window[++scan] == window[++match]
						&& window[++scan] == window[++match] && window[++scan] == window[++match] && scan < strend);

				len = MAX_MATCH - (strend - scan);
				scan = strend - MAX_MATCH;

				if (len > best_len) {
					match_start = cur_match;
					best_len = len;
					if (len >= _nice_match)
						break;
					scan_end1 = window[scan + best_len - 1];
					scan_end = window[scan + best_len];
				}

			} while ((cur_match = (prev[cur_match & wmask] & 0xffff)) > limit && --chain_length !== 0);

			if (best_len <= lookahead)
				return best_len;
			return lookahead;
		}

		// Compress as much as possible from the input stream, return the current
		// block state.
		// This function does not perform lazy evaluation of matches and inserts
		// new strings in the dictionary only for unmatched strings or for short
		// matches. It is used only for the fast compression options.
		function deflate_fast(flush) {
			// short hash_head = 0; // head of the hash chain
			var hash_head = 0; // head of the hash chain
			var bflush; // set if current block must be flushed

			while (true) {
				// Make sure that we always have enough lookahead, except
				// at the end of the input file. We need MAX_MATCH bytes
				// for the next match, plus MIN_MATCH bytes to insert the
				// string following the next match.
				if (lookahead < MIN_LOOKAHEAD) {
					fill_window();
					if (lookahead < MIN_LOOKAHEAD && flush == Z_NO_FLUSH) {
						return NeedMore;
					}
					if (lookahead === 0)
						break; // flush the current block
				}

				// Insert the string window[strstart .. strstart+2] in the
				// dictionary, and set hash_head to the head of the hash chain:
				if (lookahead >= MIN_MATCH) {
					ins_h = (((ins_h) << hash_shift) ^ (window[(strstart) + (MIN_MATCH - 1)] & 0xff)) & hash_mask;

					// prev[strstart&w_mask]=hash_head=head[ins_h];
					hash_head = (head[ins_h] & 0xffff);
					prev[strstart & w_mask] = head[ins_h];
					head[ins_h] = strstart;
				}

				// Find the longest match, discarding those <= prev_length.
				// At this point we have always match_length < MIN_MATCH

				if (hash_head !== 0 && ((strstart - hash_head) & 0xffff) <= w_size - MIN_LOOKAHEAD) {
					// To simplify the code, we prevent matches with the string
					// of window index 0 (in particular we have to avoid a match
					// of the string with itself at the start of the input file).
					if (strategy != Z_HUFFMAN_ONLY) {
						match_length = longest_match(hash_head);
					}
					// longest_match() sets match_start
				}
				if (match_length >= MIN_MATCH) {
					// check_match(strstart, match_start, match_length);

					bflush = _tr_tally(strstart - match_start, match_length - MIN_MATCH);

					lookahead -= match_length;

					// Insert new strings in the hash table only if the match length
					// is not too large. This saves time but degrades compression.
					if (match_length <= max_lazy_match && lookahead >= MIN_MATCH) {
						match_length--; // string at strstart already in hash table
						do {
							strstart++;

							ins_h = ((ins_h << hash_shift) ^ (window[(strstart) + (MIN_MATCH - 1)] & 0xff)) & hash_mask;
							// prev[strstart&w_mask]=hash_head=head[ins_h];
							hash_head = (head[ins_h] & 0xffff);
							prev[strstart & w_mask] = head[ins_h];
							head[ins_h] = strstart;

							// strstart never exceeds WSIZE-MAX_MATCH, so there are
							// always MIN_MATCH bytes ahead.
						} while (--match_length !== 0);
						strstart++;
					} else {
						strstart += match_length;
						match_length = 0;
						ins_h = window[strstart] & 0xff;

						ins_h = (((ins_h) << hash_shift) ^ (window[strstart + 1] & 0xff)) & hash_mask;
						// If lookahead < MIN_MATCH, ins_h is garbage, but it does
						// not
						// matter since it will be recomputed at next deflate call.
					}
				} else {
					// No match, output a literal byte

					bflush = _tr_tally(0, window[strstart] & 0xff);
					lookahead--;
					strstart++;
				}
				if (bflush) {

					flush_block_only(false);
					if (strm.avail_out === 0)
						return NeedMore;
				}
			}

			flush_block_only(flush == Z_FINISH);
			if (strm.avail_out === 0) {
				if (flush == Z_FINISH)
					return FinishStarted;
				else
					return NeedMore;
			}
			return flush == Z_FINISH ? FinishDone : BlockDone;
		}

		// Same as above, but achieves better compression. We use a lazy
		// evaluation for matches: a match is finally adopted only if there is
		// no better match at the next window position.
		function deflate_slow(flush) {
			// short hash_head = 0; // head of hash chain
			var hash_head = 0; // head of hash chain
			var bflush; // set if current block must be flushed
			var max_insert;

			// Process the input block.
			while (true) {
				// Make sure that we always have enough lookahead, except
				// at the end of the input file. We need MAX_MATCH bytes
				// for the next match, plus MIN_MATCH bytes to insert the
				// string following the next match.

				if (lookahead < MIN_LOOKAHEAD) {
					fill_window();
					if (lookahead < MIN_LOOKAHEAD && flush == Z_NO_FLUSH) {
						return NeedMore;
					}
					if (lookahead === 0)
						break; // flush the current block
				}

				// Insert the string window[strstart .. strstart+2] in the
				// dictionary, and set hash_head to the head of the hash chain:

				if (lookahead >= MIN_MATCH) {
					ins_h = (((ins_h) << hash_shift) ^ (window[(strstart) + (MIN_MATCH - 1)] & 0xff)) & hash_mask;
					// prev[strstart&w_mask]=hash_head=head[ins_h];
					hash_head = (head[ins_h] & 0xffff);
					prev[strstart & w_mask] = head[ins_h];
					head[ins_h] = strstart;
				}

				// Find the longest match, discarding those <= prev_length.
				prev_length = match_length;
				prev_match = match_start;
				match_length = MIN_MATCH - 1;

				if (hash_head !== 0 && prev_length < max_lazy_match && ((strstart - hash_head) & 0xffff) <= w_size - MIN_LOOKAHEAD) {
					// To simplify the code, we prevent matches with the string
					// of window index 0 (in particular we have to avoid a match
					// of the string with itself at the start of the input file).

					if (strategy != Z_HUFFMAN_ONLY) {
						match_length = longest_match(hash_head);
					}
					// longest_match() sets match_start

					if (match_length <= 5 && (strategy == Z_FILTERED || (match_length == MIN_MATCH && strstart - match_start > 4096))) {

						// If prev_match is also MIN_MATCH, match_start is garbage
						// but we will ignore the current match anyway.
						match_length = MIN_MATCH - 1;
					}
				}

				// If there was a match at the previous step and the current
				// match is not better, output the previous match:
				if (prev_length >= MIN_MATCH && match_length <= prev_length) {
					max_insert = strstart + lookahead - MIN_MATCH;
					// Do not insert strings in hash table beyond this.

					// check_match(strstart-1, prev_match, prev_length);

					bflush = _tr_tally(strstart - 1 - prev_match, prev_length - MIN_MATCH);

					// Insert in hash table all strings up to the end of the match.
					// strstart-1 and strstart are already inserted. If there is not
					// enough lookahead, the last two strings are not inserted in
					// the hash table.
					lookahead -= prev_length - 1;
					prev_length -= 2;
					do {
						if (++strstart <= max_insert) {
							ins_h = (((ins_h) << hash_shift) ^ (window[(strstart) + (MIN_MATCH - 1)] & 0xff)) & hash_mask;
							// prev[strstart&w_mask]=hash_head=head[ins_h];
							hash_head = (head[ins_h] & 0xffff);
							prev[strstart & w_mask] = head[ins_h];
							head[ins_h] = strstart;
						}
					} while (--prev_length !== 0);
					match_available = 0;
					match_length = MIN_MATCH - 1;
					strstart++;

					if (bflush) {
						flush_block_only(false);
						if (strm.avail_out === 0)
							return NeedMore;
					}
				} else if (match_available !== 0) {

					// If there was no match at the previous position, output a
					// single literal. If there was a match but the current match
					// is longer, truncate the previous match to a single literal.

					bflush = _tr_tally(0, window[strstart - 1] & 0xff);

					if (bflush) {
						flush_block_only(false);
					}
					strstart++;
					lookahead--;
					if (strm.avail_out === 0)
						return NeedMore;
				} else {
					// There is no previous match to compare with, wait for
					// the next step to decide.

					match_available = 1;
					strstart++;
					lookahead--;
				}
			}

			if (match_available !== 0) {
				bflush = _tr_tally(0, window[strstart - 1] & 0xff);
				match_available = 0;
			}
			flush_block_only(flush == Z_FINISH);

			if (strm.avail_out === 0) {
				if (flush == Z_FINISH)
					return FinishStarted;
				else
					return NeedMore;
			}

			return flush == Z_FINISH ? FinishDone : BlockDone;
		}

		function deflateReset(strm) {
			strm.total_in = strm.total_out = 0;
			strm.msg = null; //
			
			that.pending = 0;
			that.pending_out = 0;

			status = BUSY_STATE;

			last_flush = Z_NO_FLUSH;

			tr_init();
			lm_init();
			return Z_OK;
		}

		that.deflateInit = function(strm, _level, bits, _method, memLevel, _strategy) {
			if (!_method)
				_method = Z_DEFLATED;
			if (!memLevel)
				memLevel = DEF_MEM_LEVEL;
			if (!_strategy)
				_strategy = Z_DEFAULT_STRATEGY;

			// byte[] my_version=ZLIB_VERSION;

			//
			// if (!version || version[0] != my_version[0]
			// || stream_size != sizeof(z_stream)) {
			// return Z_VERSION_ERROR;
			// }

			strm.msg = null;

			if (_level == Z_DEFAULT_COMPRESSION)
				_level = 6;

			if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || _method != Z_DEFLATED || bits < 9 || bits > 15 || _level < 0 || _level > 9 || _strategy < 0
					|| _strategy > Z_HUFFMAN_ONLY) {
				return Z_STREAM_ERROR;
			}

			strm.dstate = that;

			w_bits = bits;
			w_size = 1 << w_bits;
			w_mask = w_size - 1;

			hash_bits = memLevel + 7;
			hash_size = 1 << hash_bits;
			hash_mask = hash_size - 1;
			hash_shift = Math.floor((hash_bits + MIN_MATCH - 1) / MIN_MATCH);

			window = new Uint8Array(w_size * 2);
			prev = [];
			head = [];

			lit_bufsize = 1 << (memLevel + 6); // 16K elements by default

			// We overlay pending_buf and d_buf+l_buf. This works since the average
			// output size for (length,distance) codes is <= 24 bits.
			that.pending_buf = new Uint8Array(lit_bufsize * 4);
			pending_buf_size = lit_bufsize * 4;

			d_buf = Math.floor(lit_bufsize / 2);
			l_buf = (1 + 2) * lit_bufsize;

			level = _level;

			strategy = _strategy;
			method = _method & 0xff;

			return deflateReset(strm);
		};

		that.deflateEnd = function() {
			if (status != INIT_STATE && status != BUSY_STATE && status != FINISH_STATE) {
				return Z_STREAM_ERROR;
			}
			// Deallocate in reverse order of allocations:
			that.pending_buf = null;
			head = null;
			prev = null;
			window = null;
			// free
			that.dstate = null;
			return status == BUSY_STATE ? Z_DATA_ERROR : Z_OK;
		};

		that.deflateParams = function(strm, _level, _strategy) {
			var err = Z_OK;

			if (_level == Z_DEFAULT_COMPRESSION) {
				_level = 6;
			}
			if (_level < 0 || _level > 9 || _strategy < 0 || _strategy > Z_HUFFMAN_ONLY) {
				return Z_STREAM_ERROR;
			}

			if (config_table[level].func != config_table[_level].func && strm.total_in !== 0) {
				// Flush the last buffer:
				err = strm.deflate(Z_PARTIAL_FLUSH);
			}

			if (level != _level) {
				level = _level;
				max_lazy_match = config_table[level].max_lazy;
				good_match = config_table[level].good_length;
				nice_match = config_table[level].nice_length;
				max_chain_length = config_table[level].max_chain;
			}
			strategy = _strategy;
			return err;
		};

		that.deflateSetDictionary = function(strm, dictionary, dictLength) {
			var length = dictLength;
			var n, index = 0;

			if (!dictionary || status != INIT_STATE)
				return Z_STREAM_ERROR;

			if (length < MIN_MATCH)
				return Z_OK;
			if (length > w_size - MIN_LOOKAHEAD) {
				length = w_size - MIN_LOOKAHEAD;
				index = dictLength - length; // use the tail of the dictionary
			}
			window.set(dictionary.subarray(index, index + length), 0);

			strstart = length;
			block_start = length;

			// Insert all strings in the hash table (except for the last two bytes).
			// s->lookahead stays null, so s->ins_h will be recomputed at the next
			// call of fill_window.

			ins_h = window[0] & 0xff;
			ins_h = (((ins_h) << hash_shift) ^ (window[1] & 0xff)) & hash_mask;

			for (n = 0; n <= length - MIN_MATCH; n++) {
				ins_h = (((ins_h) << hash_shift) ^ (window[(n) + (MIN_MATCH - 1)] & 0xff)) & hash_mask;
				prev[n & w_mask] = head[ins_h];
				head[ins_h] = n;
			}
			return Z_OK;
		};

		that.deflate = function(_strm, flush) {
			var i, header, level_flags, old_flush, bstate;

			if (flush > Z_FINISH || flush < 0) {
				return Z_STREAM_ERROR;
			}

			if (!_strm.next_out || (!_strm.next_in && _strm.avail_in !== 0) || (status == FINISH_STATE && flush != Z_FINISH)) {
				_strm.msg = z_errmsg[Z_NEED_DICT - (Z_STREAM_ERROR)];
				return Z_STREAM_ERROR;
			}
			if (_strm.avail_out === 0) {
				_strm.msg = z_errmsg[Z_NEED_DICT - (Z_BUF_ERROR)];
				return Z_BUF_ERROR;
			}

			strm = _strm; // just in case
			old_flush = last_flush;
			last_flush = flush;

			// Write the zlib header
			if (status == INIT_STATE) {
				header = (Z_DEFLATED + ((w_bits - 8) << 4)) << 8;
				level_flags = ((level - 1) & 0xff) >> 1;

				if (level_flags > 3)
					level_flags = 3;
				header |= (level_flags << 6);
				if (strstart !== 0)
					header |= PRESET_DICT;
				header += 31 - (header % 31);

				status = BUSY_STATE;
				putShortMSB(header);
			}

			// Flush as much pending output as possible
			if (that.pending !== 0) {
				strm.flush_pending();
				if (strm.avail_out === 0) {
					// console.log(" avail_out==0");
					// Since avail_out is 0, deflate will be called again with
					// more output space, but possibly with both pending and
					// avail_in equal to zero. There won't be anything to do,
					// but this is not an error situation so make sure we
					// return OK instead of BUF_ERROR at next call of deflate:
					last_flush = -1;
					return Z_OK;
				}

				// Make sure there is something to do and avoid duplicate
				// consecutive
				// flushes. For repeated and useless calls with Z_FINISH, we keep
				// returning Z_STREAM_END instead of Z_BUFF_ERROR.
			} else if (strm.avail_in === 0 && flush <= old_flush && flush != Z_FINISH) {
				strm.msg = z_errmsg[Z_NEED_DICT - (Z_BUF_ERROR)];
				return Z_BUF_ERROR;
			}

			// User must not provide more input after the first FINISH:
			if (status == FINISH_STATE && strm.avail_in !== 0) {
				_strm.msg = z_errmsg[Z_NEED_DICT - (Z_BUF_ERROR)];
				return Z_BUF_ERROR;
			}

			// Start a new block or continue the current one.
			if (strm.avail_in !== 0 || lookahead !== 0 || (flush != Z_NO_FLUSH && status != FINISH_STATE)) {
				bstate = -1;
				switch (config_table[level].func) {
				case STORED:
					bstate = deflate_stored(flush);
					break;
				case FAST:
					bstate = deflate_fast(flush);
					break;
				case SLOW:
					bstate = deflate_slow(flush);
					break;
				default:
				}

				if (bstate == FinishStarted || bstate == FinishDone) {
					status = FINISH_STATE;
				}
				if (bstate == NeedMore || bstate == FinishStarted) {
					if (strm.avail_out === 0) {
						last_flush = -1; // avoid BUF_ERROR next call, see above
					}
					return Z_OK;
					// If flush != Z_NO_FLUSH && avail_out === 0, the next call
					// of deflate should use the same flush parameter to make sure
					// that the flush is complete. So we don't have to output an
					// empty block here, this will be done at next call. This also
					// ensures that for a very small output buffer, we emit at most
					// one empty block.
				}

				if (bstate == BlockDone) {
					if (flush == Z_PARTIAL_FLUSH) {
						_tr_align();
					} else { // FULL_FLUSH or SYNC_FLUSH
						_tr_stored_block(0, 0, false);
						// For a full flush, this empty block will be recognized
						// as a special marker by inflate_sync().
						if (flush == Z_FULL_FLUSH) {
							// state.head[s.hash_size-1]=0;
							for (i = 0; i < hash_size/*-1*/; i++)
								// forget history
								head[i] = 0;
						}
					}
					strm.flush_pending();
					if (strm.avail_out === 0) {
						last_flush = -1; // avoid BUF_ERROR at next call, see above
						return Z_OK;
					}
				}
			}

			if (flush != Z_FINISH)
				return Z_OK;
			return Z_STREAM_END;
		};
	}

	// ZStream

	function ZStream() {
		var that = this;
		that.next_in_index = 0;
		that.next_out_index = 0;
		// that.next_in; // next input byte
		that.avail_in = 0; // number of bytes available at next_in
		that.total_in = 0; // total nb of input bytes read so far
		// that.next_out; // next output byte should be put there
		that.avail_out = 0; // remaining free space at next_out
		that.total_out = 0; // total nb of bytes output so far
		// that.msg;
		// that.dstate;
	}

	ZStream.prototype = {
		deflateInit : function(level, bits) {
			var that = this;
			that.dstate = new Deflate();
			if (!bits)
				bits = MAX_BITS;
			return that.dstate.deflateInit(that, level, bits);
		},

		deflate : function(flush) {
			var that = this;
			if (!that.dstate) {
				return Z_STREAM_ERROR;
			}
			return that.dstate.deflate(that, flush);
		},

		deflateEnd : function() {
			var that = this;
			if (!that.dstate)
				return Z_STREAM_ERROR;
			var ret = that.dstate.deflateEnd();
			that.dstate = null;
			return ret;
		},

		deflateParams : function(level, strategy) {
			var that = this;
			if (!that.dstate)
				return Z_STREAM_ERROR;
			return that.dstate.deflateParams(that, level, strategy);
		},

		deflateSetDictionary : function(dictionary, dictLength) {
			var that = this;
			if (!that.dstate)
				return Z_STREAM_ERROR;
			return that.dstate.deflateSetDictionary(that, dictionary, dictLength);
		},

		// Read a new buffer from the current input stream, update the
		// total number of bytes read. All deflate() input goes through
		// this function so some applications may wish to modify it to avoid
		// allocating a large strm->next_in buffer and copying from it.
		// (See also flush_pending()).
		read_buf : function(buf, start, size) {
			var that = this;
			var len = that.avail_in;
			if (len > size)
				len = size;
			if (len === 0)
				return 0;
			that.avail_in -= len;
			buf.set(that.next_in.subarray(that.next_in_index, that.next_in_index + len), start);
			that.next_in_index += len;
			that.total_in += len;
			return len;
		},

		// Flush as much pending output as possible. All deflate() output goes
		// through this function so some applications may wish to modify it
		// to avoid allocating a large strm->next_out buffer and copying into it.
		// (See also read_buf()).
		flush_pending : function() {
			var that = this;
			var len = that.dstate.pending;

			if (len > that.avail_out)
				len = that.avail_out;
			if (len === 0)
				return;

			// if (that.dstate.pending_buf.length <= that.dstate.pending_out || that.next_out.length <= that.next_out_index
			// || that.dstate.pending_buf.length < (that.dstate.pending_out + len) || that.next_out.length < (that.next_out_index +
			// len)) {
			// console.log(that.dstate.pending_buf.length + ", " + that.dstate.pending_out + ", " + that.next_out.length + ", " +
			// that.next_out_index + ", " + len);
			// console.log("avail_out=" + that.avail_out);
			// }

			that.next_out.set(that.dstate.pending_buf.subarray(that.dstate.pending_out, that.dstate.pending_out + len), that.next_out_index);

			that.next_out_index += len;
			that.dstate.pending_out += len;
			that.total_out += len;
			that.avail_out -= len;
			that.dstate.pending -= len;
			if (that.dstate.pending === 0) {
				that.dstate.pending_out = 0;
			}
		}
	};

	// Deflater

	return function Deflater(level) {
		var that = this;
		var z = new ZStream();
		var bufsize = 512;
		var flush = Z_NO_FLUSH;
		var buf = new Uint8Array(bufsize);

		if (typeof level == "undefined")
			level = Z_DEFAULT_COMPRESSION;
		z.deflateInit(level);
		z.next_out = buf;

		that.append = function(data, onprogress) {
			var err, buffers = [], lastIndex = 0, bufferIndex = 0, bufferSize = 0, array;
			if (!data.length)
				return;
			z.next_in_index = 0;
			z.next_in = data;
			z.avail_in = data.length;
			do {
				z.next_out_index = 0;
				z.avail_out = bufsize;
				err = z.deflate(flush);
				if (err != Z_OK)
					throw "deflating: " + z.msg;
				if (z.next_out_index)
					if (z.next_out_index == bufsize)
						buffers.push(new Uint8Array(buf));
					else
						buffers.push(new Uint8Array(buf.subarray(0, z.next_out_index)));
				bufferSize += z.next_out_index;
				if (onprogress && z.next_in_index > 0 && z.next_in_index != lastIndex) {
					onprogress(z.next_in_index);
					lastIndex = z.next_in_index;
				}
			} while (z.avail_in > 0 || z.avail_out === 0);
			array = new Uint8Array(bufferSize);
			buffers.forEach(function(chunk) {
				array.set(chunk, bufferIndex);
				bufferIndex += chunk.length;
			});
			return array;
		};
		that.flush = function() {
			var err, buffers = [], bufferIndex = 0, bufferSize = 0, array;
			do {
				z.next_out_index = 0;
				z.avail_out = bufsize;
				err = z.deflate(Z_FINISH);
				if (err != Z_STREAM_END && err != Z_OK)
					throw "deflating: " + z.msg;
				if (bufsize - z.avail_out > 0)
					buffers.push(new Uint8Array(buf.subarray(0, z.next_out_index)));
				bufferSize += z.next_out_index;
			} while (z.avail_in > 0 || z.avail_out === 0);
			z.deflateEnd();
			array = new Uint8Array(bufferSize);
			buffers.forEach(function(chunk) {
				array.set(chunk, bufferIndex);
				bufferIndex += chunk.length;
			});
			return array;
		};
	};
})(undefined);


/*
  html2canvas 0.5.0-beta3 <http://html2canvas.hertzen.com>
  Copyright (c) 2016 Niklas von Hertzen

  Released under  License
*/

!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.html2canvas=e();}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r);}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
/*! http://mths.be/punycode v1.2.4 by @mathias */
(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports;
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^ -~]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /\x2E|\u3002|\uFF0E|\uFF61/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		while (length--) {
			array[length] = fn(array[length]);
		}
		return array;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings.
	 * @private
	 * @param {String} domain The domain name.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		return map(string.split(regexSeparators), fn).join('.');
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <http://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols to a Punycode string of ASCII-only
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name to Unicode. Only the
	 * Punycoded parts of the domain name will be converted, i.e. it doesn't
	 * matter if you call it on a string that has already been converted to
	 * Unicode.
	 * @memberOf punycode
	 * @param {String} domain The Punycode domain name to convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(domain) {
		return mapDomain(domain, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name to Punycode. Only the
	 * non-ASCII parts of the domain name will be converted, i.e. it doesn't
	 * matter if you call it with a domain that's already in ASCII.
	 * @memberOf punycode
	 * @param {String} domain The domain name to convert, as a Unicode string.
	 * @returns {String} The Punycode representation of the given domain name.
	 */
	function toASCII(domain) {
		return mapDomain(domain, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.2.4',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <http://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
},{}],2:[function(_dereq_,module,exports){
var log = _dereq_('./log');

function restoreOwnerScroll(ownerDocument, x, y) {
    if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
        ownerDocument.defaultView.scrollTo(x, y);
    }
}

function cloneCanvasContents(canvas, clonedCanvas) {
    try {
        if (clonedCanvas) {
            clonedCanvas.width = canvas.width;
            clonedCanvas.height = canvas.height;
            clonedCanvas.getContext("2d").putImageData(canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height), 0, 0);
        }
    } catch(e) {
        log("Unable to copy canvas content from", canvas, e);
    }
}

function cloneNode(node, javascriptEnabled) {
    var clone = node.nodeType === 3 ? document.createTextNode(node.nodeValue) : node.cloneNode(false);

    var child = node.firstChild;
    while(child) {
        if (javascriptEnabled === true || child.nodeType !== 1 || child.nodeName !== 'SCRIPT') {
            clone.appendChild(cloneNode(child, javascriptEnabled));
        }
        child = child.nextSibling;
    }

    if (node.nodeType === 1) {
        clone._scrollTop = node.scrollTop;
        clone._scrollLeft = node.scrollLeft;
        if (node.nodeName === "CANVAS") {
            cloneCanvasContents(node, clone);
        } else if (node.nodeName === "TEXTAREA" || node.nodeName === "SELECT") {
            clone.value = node.value;
        }
    }

    return clone;
}

function initNode(node) {
    if (node.nodeType === 1) {
        node.scrollTop = node._scrollTop;
        node.scrollLeft = node._scrollLeft;

        var child = node.firstChild;
        while(child) {
            initNode(child);
            child = child.nextSibling;
        }
    }
}

module.exports = function(ownerDocument, containerDocument, width, height, options, x ,y) {
    var documentElement = cloneNode(ownerDocument.documentElement, options.javascriptEnabled);
    var container = containerDocument.createElement("iframe");

    container.className = "html2canvas-container";
    container.style.visibility = "hidden";
    container.style.position = "fixed";
    container.style.left = "-10000px";
    container.style.top = "0px";
    container.style.border = "0";
    container.width = width;
    container.height = height;
    container.scrolling = "no"; // ios won't scroll without it
    containerDocument.body.appendChild(container);

    return new Promise(function(resolve) {
        var documentClone = container.contentWindow.document;

        /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
         if window url is about:blank, we can assign the url to current by writing onto the document
         */
        container.contentWindow.onload = container.onload = function() {
            var interval = setInterval(function() {
                if (documentClone.body.childNodes.length > 0) {
                    initNode(documentClone.documentElement);
                    clearInterval(interval);
                    if (options.type === "view") {
                        container.contentWindow.scrollTo(x, y);
                        if ((/(iPad|iPhone|iPod)/g).test(navigator.userAgent) && (container.contentWindow.scrollY !== y || container.contentWindow.scrollX !== x)) {
                            documentClone.documentElement.style.top = (-y) + "px";
                            documentClone.documentElement.style.left = (-x) + "px";
                            documentClone.documentElement.style.position = 'absolute';
                        }
                    }
                    resolve(container);
                }
            }, 50);
        };

        documentClone.open();
        documentClone.write("<!DOCTYPE html><html></html>");
        // Chrome scrolls the parent document for some reason after the write to the cloned window???
        restoreOwnerScroll(ownerDocument, x, y);
        documentClone.replaceChild(documentClone.adoptNode(documentElement), documentClone.documentElement);
        documentClone.close();
    });
};

},{"./log":13}],3:[function(_dereq_,module,exports){
// http://dev.w3.org/csswg/css-color/

function Color(value) {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = null;
    var result = this.fromArray(value) ||
        this.namedColor(value) ||
        this.rgb(value) ||
        this.rgba(value) ||
        this.hex6(value) ||
        this.hex3(value);
}

Color.prototype.darken = function(amount) {
    var a = 1 - amount;
    return  new Color([
        Math.round(this.r * a),
        Math.round(this.g * a),
        Math.round(this.b * a),
        this.a
    ]);
};

Color.prototype.isTransparent = function() {
    return this.a === 0;
};

Color.prototype.isBlack = function() {
    return this.r === 0 && this.g === 0 && this.b === 0;
};

Color.prototype.fromArray = function(array) {
    if (Array.isArray(array)) {
        this.r = Math.min(array[0], 255);
        this.g = Math.min(array[1], 255);
        this.b = Math.min(array[2], 255);
        if (array.length > 3) {
            this.a = array[3];
        }
    }

    return (Array.isArray(array));
};

var _hex3 = /^#([a-f0-9]{3})$/i;

Color.prototype.hex3 = function(value) {
    var match = null;
    if ((match = value.match(_hex3)) !== null) {
        this.r = parseInt(match[1][0] + match[1][0], 16);
        this.g = parseInt(match[1][1] + match[1][1], 16);
        this.b = parseInt(match[1][2] + match[1][2], 16);
    }
    return match !== null;
};

var _hex6 = /^#([a-f0-9]{6})$/i;

Color.prototype.hex6 = function(value) {
    var match = null;
    if ((match = value.match(_hex6)) !== null) {
        this.r = parseInt(match[1].substring(0, 2), 16);
        this.g = parseInt(match[1].substring(2, 4), 16);
        this.b = parseInt(match[1].substring(4, 6), 16);
    }
    return match !== null;
};


var _rgb = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;

Color.prototype.rgb = function(value) {
    var match = null;
    if ((match = value.match(_rgb)) !== null) {
        this.r = Number(match[1]);
        this.g = Number(match[2]);
        this.b = Number(match[3]);
    }
    return match !== null;
};

var _rgba = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;

Color.prototype.rgba = function(value) {
    var match = null;
    if ((match = value.match(_rgba)) !== null) {
        this.r = Number(match[1]);
        this.g = Number(match[2]);
        this.b = Number(match[3]);
        this.a = Number(match[4]);
    }
    return match !== null;
};

Color.prototype.toString = function() {
    return this.a !== null && this.a !== 1 ?
    "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" :
    "rgb(" + [this.r, this.g, this.b].join(",") + ")";
};

Color.prototype.namedColor = function(value) {
    value = value.toLowerCase();
    var color = colors[value];
    if (color) {
        this.r = color[0];
        this.g = color[1];
        this.b = color[2];
    } else if (value === "transparent") {
        this.r = this.g = this.b = this.a = 0;
        return true;
    }

    return !!color;
};

Color.prototype.isColor = true;

// JSON.stringify([].slice.call($$('.named-color-table tr'), 1).map(function(row) { return [row.childNodes[3].textContent, row.childNodes[5].textContent.trim().split(",").map(Number)] }).reduce(function(data, row) {data[row[0]] = row[1]; return data}, {}))
var colors = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
};

module.exports = Color;

},{}],4:[function(_dereq_,module,exports){
var Support = _dereq_('./support');
var CanvasRenderer = _dereq_('./renderers/canvas');
var ImageLoader = _dereq_('./imageloader');
var NodeParser = _dereq_('./nodeparser');
var NodeContainer = _dereq_('./nodecontainer');
var log = _dereq_('./log');
var utils = _dereq_('./utils');
var createWindowClone = _dereq_('./clone');
var loadUrlDocument = _dereq_('./proxy').loadUrlDocument;
var getBounds = utils.getBounds;

var html2canvasNodeAttribute = "data-html2canvas-node";
var html2canvasCloneIndex = 0;

function html2canvas(nodeList, options) {
    var index = html2canvasCloneIndex++;
    options = options || {};
    if (options.logging) {
        log.options.logging = true;
        log.options.start = Date.now();
    }

    options.async = typeof(options.async) === "undefined" ? true : options.async;
    options.allowTaint = typeof(options.allowTaint) === "undefined" ? false : options.allowTaint;
    options.removeContainer = typeof(options.removeContainer) === "undefined" ? true : options.removeContainer;
    options.javascriptEnabled = typeof(options.javascriptEnabled) === "undefined" ? false : options.javascriptEnabled;
    options.imageTimeout = typeof(options.imageTimeout) === "undefined" ? 10000 : options.imageTimeout;
    options.renderer = typeof(options.renderer) === "function" ? options.renderer : CanvasRenderer;
    options.strict = !!options.strict;

    if (typeof(nodeList) === "string") {
        if (typeof(options.proxy) !== "string") {
            return Promise.reject("Proxy must be used when rendering url");
        }
        var width = options.width != null ? options.width : window.innerWidth;
        var height = options.height != null ? options.height : window.innerHeight;
        return loadUrlDocument(absoluteUrl(nodeList), options.proxy, document, width, height, options).then(function(container) {
            return renderWindow(container.contentWindow.document.documentElement, container, options, width, height);
        });
    }

    var node = ((nodeList === undefined) ? [document.documentElement] : ((nodeList.length) ? nodeList : [nodeList]))[0];
    node.setAttribute(html2canvasNodeAttribute + index, index);
    return renderDocument(node.ownerDocument, options, node.ownerDocument.defaultView.innerWidth, node.ownerDocument.defaultView.innerHeight, index).then(function(canvas) {
        if (typeof(options.onrendered) === "function") {
            log("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas");
            options.onrendered(canvas);
        }
        return canvas;
    });
}

html2canvas.CanvasRenderer = CanvasRenderer;
html2canvas.NodeContainer = NodeContainer;
html2canvas.log = log;
html2canvas.utils = utils;

var html2canvasExport = (typeof(document) === "undefined" || typeof(Object.create) !== "function" || typeof(document.createElement("canvas").getContext) !== "function") ? function() {
    return Promise.reject("No canvas support");
} : html2canvas;

module.exports = html2canvasExport;

if (typeof(define) === 'function' && define.amd) {
    define('html2canvas', [], function() {
        return html2canvasExport;
    });
}

function renderDocument(document, options, windowWidth, windowHeight, html2canvasIndex) {
    return createWindowClone(document, document, windowWidth, windowHeight, options, document.defaultView.pageXOffset, document.defaultView.pageYOffset).then(function(container) {
        log("Document cloned");
        var attributeName = html2canvasNodeAttribute + html2canvasIndex;
        var selector = "[" + attributeName + "='" + html2canvasIndex + "']";
        document.querySelector(selector).removeAttribute(attributeName);
        var clonedWindow = container.contentWindow;
        var node = clonedWindow.document.querySelector(selector);
        var oncloneHandler = (typeof(options.onclone) === "function") ? Promise.resolve(options.onclone(clonedWindow.document)) : Promise.resolve(true);
        return oncloneHandler.then(function() {
            return renderWindow(node, container, options, windowWidth, windowHeight);
        });
    });
}

function renderWindow(node, container, options, windowWidth, windowHeight) {
    var clonedWindow = container.contentWindow;
    var support = new Support(clonedWindow.document);
    var imageLoader = new ImageLoader(options, support);
    var bounds = getBounds(node);
    var width = options.type === "view" ? windowWidth : documentWidth(clonedWindow.document);
    var height = options.type === "view" ? windowHeight : documentHeight(clonedWindow.document);
    var renderer = new options.renderer(width, height, imageLoader, options, document);
    var parser = new NodeParser(node, renderer, support, imageLoader, options);
    return parser.ready.then(function() {
        log("Finished rendering");
        var canvas;

        if (options.type === "view") {
            canvas = crop(renderer.canvas, {width: renderer.canvas.width, height: renderer.canvas.height, top: 0, left: 0, x: 0, y: 0});
        } else if (node === clonedWindow.document.body || node === clonedWindow.document.documentElement || options.canvas != null) {
            canvas = renderer.canvas;
        } else {
            canvas = crop(renderer.canvas, {width:  options.width != null ? options.width : bounds.width, height: options.height != null ? options.height : bounds.height, top: bounds.top, left: bounds.left, x: 0, y: 0});
        }

        cleanupContainer(container, options);
        return canvas;
    });
}

function cleanupContainer(container, options) {
    if (options.removeContainer) {
        container.parentNode.removeChild(container);
        log("Cleaned up container");
    }
}

function crop(canvas, bounds) {
    var croppedCanvas = document.createElement("canvas");
    var x1 = Math.min(canvas.width - 1, Math.max(0, bounds.left));
    var x2 = Math.min(canvas.width, Math.max(1, bounds.left + bounds.width));
    var y1 = Math.min(canvas.height - 1, Math.max(0, bounds.top));
    var y2 = Math.min(canvas.height, Math.max(1, bounds.top + bounds.height));
    croppedCanvas.width = bounds.width;
    croppedCanvas.height =  bounds.height;
    var width = x2-x1;
    var height = y2-y1;
    log("Cropping canvas at:", "left:", bounds.left, "top:", bounds.top, "width:", width, "height:", height);
    log("Resulting crop with width", bounds.width, "and height", bounds.height, "with x", x1, "and y", y1);
    croppedCanvas.getContext("2d").drawImage(canvas, x1, y1, width, height, bounds.x, bounds.y, width, height);
    return croppedCanvas;
}

function documentWidth (doc) {
    return Math.max(
        Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
        Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
        Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
    );
}

function documentHeight (doc) {
    return Math.max(
        Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
        Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
        Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
    );
}

function absoluteUrl(url) {
    var link = document.createElement("a");
    link.href = url;
    link.href = link.href;
    return link;
}

},{"./clone":2,"./imageloader":11,"./log":13,"./nodecontainer":14,"./nodeparser":15,"./proxy":16,"./renderers/canvas":20,"./support":22,"./utils":26}],5:[function(_dereq_,module,exports){
var log = _dereq_('./log');
var smallImage = _dereq_('./utils').smallImage;

function DummyImageContainer(src) {
    this.src = src;
    log("DummyImageContainer for", src);
    if (!this.promise || !this.image) {
        log("Initiating DummyImageContainer");
        DummyImageContainer.prototype.image = new Image();
        var image = this.image;
        DummyImageContainer.prototype.promise = new Promise(function(resolve, reject) {
            image.onload = resolve;
            image.onerror = reject;
            image.src = smallImage();
            if (image.complete === true) {
                resolve(image);
            }
        });
    }
}

module.exports = DummyImageContainer;

},{"./log":13,"./utils":26}],6:[function(_dereq_,module,exports){
var smallImage = _dereq_('./utils').smallImage;

function Font(family, size) {
    var container = document.createElement('div'),
        img = document.createElement('img'),
        span = document.createElement('span'),
        sampleText = 'Hidden Text',
        baseline,
        middle;

    container.style.visibility = "hidden";
    container.style.fontFamily = family;
    container.style.fontSize = size;
    container.style.margin = 0;
    container.style.padding = 0;

    document.body.appendChild(container);

    img.src = smallImage();
    img.width = 1;
    img.height = 1;

    img.style.margin = 0;
    img.style.padding = 0;
    img.style.verticalAlign = "baseline";

    span.style.fontFamily = family;
    span.style.fontSize = size;
    span.style.margin = 0;
    span.style.padding = 0;

    span.appendChild(document.createTextNode(sampleText));
    container.appendChild(span);
    container.appendChild(img);
    baseline = (img.offsetTop - span.offsetTop) + 1;

    container.removeChild(span);
    container.appendChild(document.createTextNode(sampleText));

    container.style.lineHeight = "normal";
    img.style.verticalAlign = "super";

    middle = (img.offsetTop-container.offsetTop) + 1;

    document.body.removeChild(container);

    this.baseline = baseline;
    this.lineWidth = 1;
    this.middle = middle;
}

module.exports = Font;

},{"./utils":26}],7:[function(_dereq_,module,exports){
var Font = _dereq_('./font');

function FontMetrics() {
    this.data = {};
}

FontMetrics.prototype.getMetrics = function(family, size) {
    if (this.data[family + "-" + size] === undefined) {
        this.data[family + "-" + size] = new Font(family, size);
    }
    return this.data[family + "-" + size];
};

module.exports = FontMetrics;

},{"./font":6}],8:[function(_dereq_,module,exports){
var utils = _dereq_('./utils');
var getBounds = utils.getBounds;
var loadUrlDocument = _dereq_('./proxy').loadUrlDocument;

function FrameContainer(container, sameOrigin, options) {
    this.image = null;
    this.src = container;
    var self = this;
    var bounds = getBounds(container);
    this.promise = (!sameOrigin ? this.proxyLoad(options.proxy, bounds, options) : new Promise(function(resolve) {
        if (container.contentWindow.document.URL === "about:blank" || container.contentWindow.document.documentElement == null) {
            container.contentWindow.onload = container.onload = function() {
                resolve(container);
            };
        } else {
            resolve(container);
        }
    })).then(function(container) {
        var html2canvas = _dereq_('./core');
        return html2canvas(container.contentWindow.document.documentElement, {type: 'view', width: container.width, height: container.height, proxy: options.proxy, javascriptEnabled: options.javascriptEnabled, removeContainer: options.removeContainer, allowTaint: options.allowTaint, imageTimeout: options.imageTimeout / 2});
    }).then(function(canvas) {
        return self.image = canvas;
    });
}

FrameContainer.prototype.proxyLoad = function(proxy, bounds, options) {
    var container = this.src;
    return loadUrlDocument(container.src, proxy, container.ownerDocument, bounds.width, bounds.height, options);
};

module.exports = FrameContainer;

},{"./core":4,"./proxy":16,"./utils":26}],9:[function(_dereq_,module,exports){
function GradientContainer(imageData) {
    this.src = imageData.value;
    this.colorStops = [];
    this.type = null;
    this.x0 = 0.5;
    this.y0 = 0.5;
    this.x1 = 0.5;
    this.y1 = 0.5;
    this.promise = Promise.resolve(true);
}

GradientContainer.TYPES = {
    LINEAR: 1,
    RADIAL: 2
};

// TODO: support hsl[a], negative %/length values
// TODO: support <angle> (e.g. -?\d{1,3}(?:\.\d+)deg, etc. : https://developer.mozilla.org/docs/Web/CSS/angle )
GradientContainer.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i;

module.exports = GradientContainer;

},{}],10:[function(_dereq_,module,exports){
function ImageContainer(src, cors) {
    this.src = src;
    this.image = new Image();
    var self = this;
    this.tainted = null;
    this.promise = new Promise(function(resolve, reject) {
        self.image.onload = resolve;
        self.image.onerror = reject;
        if (cors) {
            self.image.crossOrigin = "anonymous";
        }
        self.image.src = src;
        if (self.image.complete === true) {
            resolve(self.image);
        }
    });
}

module.exports = ImageContainer;

},{}],11:[function(_dereq_,module,exports){
var log = _dereq_('./log');
var ImageContainer = _dereq_('./imagecontainer');
var DummyImageContainer = _dereq_('./dummyimagecontainer');
var ProxyImageContainer = _dereq_('./proxyimagecontainer');
var FrameContainer = _dereq_('./framecontainer');
var SVGContainer = _dereq_('./svgcontainer');
var SVGNodeContainer = _dereq_('./svgnodecontainer');
var LinearGradientContainer = _dereq_('./lineargradientcontainer');
var WebkitGradientContainer = _dereq_('./webkitgradientcontainer');
var bind = _dereq_('./utils').bind;

function ImageLoader(options, support) {
    this.link = null;
    this.options = options;
    this.support = support;
    this.origin = this.getOrigin(window.location.href);
}

ImageLoader.prototype.findImages = function(nodes) {
    var images = [];
    nodes.reduce(function(imageNodes, container) {
        switch(container.node.nodeName) {
        case "IMG":
            return imageNodes.concat([{
                args: [container.node.src],
                method: "url"
            }]);
        case "svg":
        case "IFRAME":
            return imageNodes.concat([{
                args: [container.node],
                method: container.node.nodeName
            }]);
        }
        return imageNodes;
    }, []).forEach(this.addImage(images, this.loadImage), this);
    return images;
};

ImageLoader.prototype.findBackgroundImage = function(images, container) {
    container.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(images, this.loadImage), this);
    return images;
};

ImageLoader.prototype.addImage = function(images, callback) {
    return function(newImage) {
        newImage.args.forEach(function(image) {
            if (!this.imageExists(images, image)) {
                images.splice(0, 0, callback.call(this, newImage));
                log('Added image #' + (images.length), typeof(image) === "string" ? image.substring(0, 100) : image);
            }
        }, this);
    };
};

ImageLoader.prototype.hasImageBackground = function(imageData) {
    return imageData.method !== "none";
};

ImageLoader.prototype.loadImage = function(imageData) {
    if (imageData.method === "url") {
        var src = imageData.args[0];
        if (this.isSVG(src) && !this.support.svg && !this.options.allowTaint) {
            return new SVGContainer(src);
        } else if (src.match(/data:image\/.*;base64,/i)) {
            return new ImageContainer(src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, ''), false);
        } else if (this.isSameOrigin(src) || this.options.allowTaint === true || this.isSVG(src)) {
            return new ImageContainer(src, false);
        } else if (this.support.cors && !this.options.allowTaint && this.options.useCORS) {
            return new ImageContainer(src, true);
        } else if (this.options.proxy) {
            return new ProxyImageContainer(src, this.options.proxy);
        } else {
            return new DummyImageContainer(src);
        }
    } else if (imageData.method === "linear-gradient") {
        return new LinearGradientContainer(imageData);
    } else if (imageData.method === "gradient") {
        return new WebkitGradientContainer(imageData);
    } else if (imageData.method === "svg") {
        return new SVGNodeContainer(imageData.args[0], this.support.svg);
    } else if (imageData.method === "IFRAME") {
        return new FrameContainer(imageData.args[0], this.isSameOrigin(imageData.args[0].src), this.options);
    } else {
        return new DummyImageContainer(imageData);
    }
};

ImageLoader.prototype.isSVG = function(src) {
    return src.substring(src.length - 3).toLowerCase() === "svg" || SVGContainer.prototype.isInline(src);
};

ImageLoader.prototype.imageExists = function(images, src) {
    return images.some(function(image) {
        return image.src === src;
    });
};

ImageLoader.prototype.isSameOrigin = function(url) {
    return (this.getOrigin(url) === this.origin);
};

ImageLoader.prototype.getOrigin = function(url) {
    var link = this.link || (this.link = document.createElement("a"));
    link.href = url;
    link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
    return link.protocol + link.hostname + link.port;
};

ImageLoader.prototype.getPromise = function(container) {
    return this.timeout(container, this.options.imageTimeout)['catch'](function() {
        var dummy = new DummyImageContainer(container.src);
        return dummy.promise.then(function(image) {
            container.image = image;
        });
    });
};

ImageLoader.prototype.get = function(src) {
    var found = null;
    return this.images.some(function(img) {
        return (found = img).src === src;
    }) ? found : null;
};

ImageLoader.prototype.fetch = function(nodes) {
    this.images = nodes.reduce(bind(this.findBackgroundImage, this), this.findImages(nodes));
    this.images.forEach(function(image, index) {
        image.promise.then(function() {
            log("Succesfully loaded image #"+ (index+1), image);
        }, function(e) {
            log("Failed loading image #"+ (index+1), image, e);
        });
    });
    this.ready = Promise.all(this.images.map(this.getPromise, this));
    log("Finished searching images");
    return this;
};

ImageLoader.prototype.timeout = function(container, timeout) {
    var timer;
    var promise = Promise.race([container.promise, new Promise(function(res, reject) {
        timer = setTimeout(function() {
            log("Timed out loading image", container);
            reject(container);
        }, timeout);
    })]).then(function(container) {
        clearTimeout(timer);
        return container;
    });
    promise['catch'](function() {
        clearTimeout(timer);
    });
    return promise;
};

module.exports = ImageLoader;

},{"./dummyimagecontainer":5,"./framecontainer":8,"./imagecontainer":10,"./lineargradientcontainer":12,"./log":13,"./proxyimagecontainer":17,"./svgcontainer":23,"./svgnodecontainer":24,"./utils":26,"./webkitgradientcontainer":27}],12:[function(_dereq_,module,exports){
var GradientContainer = _dereq_('./gradientcontainer');
var Color = _dereq_('./color');

function LinearGradientContainer(imageData) {
    GradientContainer.apply(this, arguments);
    this.type = GradientContainer.TYPES.LINEAR;

    var hasDirection = LinearGradientContainer.REGEXP_DIRECTION.test( imageData.args[0] ) ||
        !GradientContainer.REGEXP_COLORSTOP.test( imageData.args[0] );

    if (hasDirection) {
        imageData.args[0].split(/\s+/).reverse().forEach(function(position, index) {
            switch(position) {
            case "left":
                this.x0 = 0;
                this.x1 = 1;
                break;
            case "top":
                this.y0 = 0;
                this.y1 = 1;
                break;
            case "right":
                this.x0 = 1;
                this.x1 = 0;
                break;
            case "bottom":
                this.y0 = 1;
                this.y1 = 0;
                break;
            case "to":
                var y0 = this.y0;
                var x0 = this.x0;
                this.y0 = this.y1;
                this.x0 = this.x1;
                this.x1 = x0;
                this.y1 = y0;
                break;
            case "center":
                break; // centered by default
            // Firefox internally converts position keywords to percentages:
            // http://www.w3.org/TR/2010/WD-CSS2-20101207/colors.html#propdef-background-position
            default: // percentage or absolute length
                // TODO: support absolute start point positions (e.g., use bounds to convert px to a ratio)
                var ratio = parseFloat(position, 10) * 1e-2;
                if (isNaN(ratio)) { // invalid or unhandled value
                    break;
                }
                if (index === 0) {
                    this.y0 = ratio;
                    this.y1 = 1 - this.y0;
                } else {
                    this.x0 = ratio;
                    this.x1 = 1 - this.x0;
                }
                break;
            }
        }, this);
    } else {
        this.y0 = 0;
        this.y1 = 1;
    }

    this.colorStops = imageData.args.slice(hasDirection ? 1 : 0).map(function(colorStop) {
        var colorStopMatch = colorStop.match(GradientContainer.REGEXP_COLORSTOP);
        var value = +colorStopMatch[2];
        var unit = value === 0 ? "%" : colorStopMatch[3]; // treat "0" as "0%"
        return {
            color: new Color(colorStopMatch[1]),
            // TODO: support absolute stop positions (e.g., compute gradient line length & convert px to ratio)
            stop: unit === "%" ? value / 100 : null
        };
    });

    if (this.colorStops[0].stop === null) {
        this.colorStops[0].stop = 0;
    }

    if (this.colorStops[this.colorStops.length - 1].stop === null) {
        this.colorStops[this.colorStops.length - 1].stop = 1;
    }

    // calculates and fills-in explicit stop positions when omitted from rule
    this.colorStops.forEach(function(colorStop, index) {
        if (colorStop.stop === null) {
            this.colorStops.slice(index).some(function(find, count) {
                if (find.stop !== null) {
                    colorStop.stop = ((find.stop - this.colorStops[index - 1].stop) / (count + 1)) + this.colorStops[index - 1].stop;
                    return true;
                } else {
                    return false;
                }
            }, this);
        }
    }, this);
}

LinearGradientContainer.prototype = Object.create(GradientContainer.prototype);

// TODO: support <angle> (e.g. -?\d{1,3}(?:\.\d+)deg, etc. : https://developer.mozilla.org/docs/Web/CSS/angle )
LinearGradientContainer.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i;

module.exports = LinearGradientContainer;

},{"./color":3,"./gradientcontainer":9}],13:[function(_dereq_,module,exports){
var logger = function() {
    if (logger.options.logging && window.console && window.console.log) {
        Function.prototype.bind.call(window.console.log, (window.console)).apply(window.console, [(Date.now() - logger.options.start) + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)));
    }
};

logger.options = {logging: false};
module.exports = logger;

},{}],14:[function(_dereq_,module,exports){
var Color = _dereq_('./color');
var utils = _dereq_('./utils');
var getBounds = utils.getBounds;
var parseBackgrounds = utils.parseBackgrounds;
var offsetBounds = utils.offsetBounds;

function NodeContainer(node, parent) {
    this.node = node;
    this.parent = parent;
    this.stack = null;
    this.bounds = null;
    this.borders = null;
    this.clip = [];
    this.backgroundClip = [];
    this.offsetBounds = null;
    this.visible = null;
    this.computedStyles = null;
    this.colors = {};
    this.styles = {};
    this.backgroundImages = null;
    this.transformData = null;
    this.transformMatrix = null;
    this.isPseudoElement = false;
    this.opacity = null;
}

NodeContainer.prototype.cloneTo = function(stack) {
    stack.visible = this.visible;
    stack.borders = this.borders;
    stack.bounds = this.bounds;
    stack.clip = this.clip;
    stack.backgroundClip = this.backgroundClip;
    stack.computedStyles = this.computedStyles;
    stack.styles = this.styles;
    stack.backgroundImages = this.backgroundImages;
    stack.opacity = this.opacity;
};

NodeContainer.prototype.getOpacity = function() {
    return this.opacity === null ? (this.opacity = this.cssFloat('opacity')) : this.opacity;
};

NodeContainer.prototype.assignStack = function(stack) {
    this.stack = stack;
    stack.children.push(this);
};

NodeContainer.prototype.isElementVisible = function() {
    return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : (
        this.css('display') !== "none" &&
        this.css('visibility') !== "hidden" &&
        !this.node.hasAttribute("data-html2canvas-ignore") &&
        (this.node.nodeName !== "INPUT" || this.node.getAttribute("type") !== "hidden")
    );
};

NodeContainer.prototype.css = function(attribute) {
    if (!this.computedStyles) {
        this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null);
    }

    return this.styles[attribute] || (this.styles[attribute] = this.computedStyles[attribute]);
};

NodeContainer.prototype.prefixedCss = function(attribute) {
    var prefixes = ["webkit", "moz", "ms", "o"];
    var value = this.css(attribute);
    if (value === undefined) {
        prefixes.some(function(prefix) {
            value = this.css(prefix + attribute.substr(0, 1).toUpperCase() + attribute.substr(1));
            return value !== undefined;
        }, this);
    }
    return value === undefined ? null : value;
};

NodeContainer.prototype.computedStyle = function(type) {
    return this.node.ownerDocument.defaultView.getComputedStyle(this.node, type);
};

NodeContainer.prototype.cssInt = function(attribute) {
    var value = parseInt(this.css(attribute), 10);
    return (isNaN(value)) ? 0 : value; // borders in old IE are throwing 'medium' for demo.html
};

NodeContainer.prototype.color = function(attribute) {
    return this.colors[attribute] || (this.colors[attribute] = new Color(this.css(attribute)));
};

NodeContainer.prototype.cssFloat = function(attribute) {
    var value = parseFloat(this.css(attribute));
    return (isNaN(value)) ? 0 : value;
};

NodeContainer.prototype.fontWeight = function() {
    var weight = this.css("fontWeight");
    switch(parseInt(weight, 10)){
    case 401:
        weight = "bold";
        break;
    case 400:
        weight = "normal";
        break;
    }
    return weight;
};

NodeContainer.prototype.parseClip = function() {
    var matches = this.css('clip').match(this.CLIP);
    if (matches) {
        return {
            top: parseInt(matches[1], 10),
            right: parseInt(matches[2], 10),
            bottom: parseInt(matches[3], 10),
            left: parseInt(matches[4], 10)
        };
    }
    return null;
};

NodeContainer.prototype.parseBackgroundImages = function() {
    return this.backgroundImages || (this.backgroundImages = parseBackgrounds(this.css("backgroundImage")));
};

NodeContainer.prototype.cssList = function(property, index) {
    var value = (this.css(property) || '').split(',');
    value = value[index || 0] || value[0] || 'auto';
    value = value.trim().split(' ');
    if (value.length === 1) {
        value = [value[0], isPercentage(value[0]) ? 'auto' : value[0]];
    }
    return value;
};

NodeContainer.prototype.parseBackgroundSize = function(bounds, image, index) {
    var size = this.cssList("backgroundSize", index);
    var width, height;

    if (isPercentage(size[0])) {
        width = bounds.width * parseFloat(size[0]) / 100;
    } else if (/contain|cover/.test(size[0])) {
        var targetRatio = bounds.width / bounds.height, currentRatio = image.width / image.height;
        return (targetRatio < currentRatio ^ size[0] === 'contain') ?  {width: bounds.height * currentRatio, height: bounds.height} : {width: bounds.width, height: bounds.width / currentRatio};
    } else {
        width = parseInt(size[0], 10);
    }

    if (size[0] === 'auto' && size[1] === 'auto') {
        height = image.height;
    } else if (size[1] === 'auto') {
        height = width / image.width * image.height;
    } else if (isPercentage(size[1])) {
        height =  bounds.height * parseFloat(size[1]) / 100;
    } else {
        height = parseInt(size[1], 10);
    }

    if (size[0] === 'auto') {
        width = height / image.height * image.width;
    }

    return {width: width, height: height};
};

NodeContainer.prototype.parseBackgroundPosition = function(bounds, image, index, backgroundSize) {
    var position = this.cssList('backgroundPosition', index);
    var left, top;

    if (isPercentage(position[0])){
        left = (bounds.width - (backgroundSize || image).width) * (parseFloat(position[0]) / 100);
    } else {
        left = parseInt(position[0], 10);
    }

    if (position[1] === 'auto') {
        top = left / image.width * image.height;
    } else if (isPercentage(position[1])){
        top =  (bounds.height - (backgroundSize || image).height) * parseFloat(position[1]) / 100;
    } else {
        top = parseInt(position[1], 10);
    }

    if (position[0] === 'auto') {
        left = top / image.height * image.width;
    }

    return {left: left, top: top};
};

NodeContainer.prototype.parseBackgroundRepeat = function(index) {
    return this.cssList("backgroundRepeat", index)[0];
};

NodeContainer.prototype.parseTextShadows = function() {
    var textShadow = this.css("textShadow");
    var results = [];

    if (textShadow && textShadow !== 'none') {
        var shadows = textShadow.match(this.TEXT_SHADOW_PROPERTY);
        for (var i = 0; shadows && (i < shadows.length); i++) {
            var s = shadows[i].match(this.TEXT_SHADOW_VALUES);
            results.push({
                color: new Color(s[0]),
                offsetX: s[1] ? parseFloat(s[1].replace('px', '')) : 0,
                offsetY: s[2] ? parseFloat(s[2].replace('px', '')) : 0,
                blur: s[3] ? s[3].replace('px', '') : 0
            });
        }
    }
    return results;
};

NodeContainer.prototype.parseTransform = function() {
    if (!this.transformData) {
        if (this.hasTransform()) {
            var offset = this.parseBounds();
            var origin = this.prefixedCss("transformOrigin").split(" ").map(removePx).map(asFloat);
            origin[0] += offset.left;
            origin[1] += offset.top;
            this.transformData = {
                origin: origin,
                matrix: this.parseTransformMatrix()
            };
        } else {
            this.transformData = {
                origin: [0, 0],
                matrix: [1, 0, 0, 1, 0, 0]
            };
        }
    }
    return this.transformData;
};

NodeContainer.prototype.parseTransformMatrix = function() {
    if (!this.transformMatrix) {
        var transform = this.prefixedCss("transform");
        var matrix = transform ? parseMatrix(transform.match(this.MATRIX_PROPERTY)) : null;
        this.transformMatrix = matrix ? matrix : [1, 0, 0, 1, 0, 0];
    }
    return this.transformMatrix;
};

NodeContainer.prototype.parseBounds = function() {
    return this.bounds || (this.bounds = this.hasTransform() ? offsetBounds(this.node) : getBounds(this.node));
};

NodeContainer.prototype.hasTransform = function() {
    return this.parseTransformMatrix().join(",") !== "1,0,0,1,0,0" || (this.parent && this.parent.hasTransform());
};

NodeContainer.prototype.getValue = function() {
    var value = this.node.value || "";
    if (this.node.tagName === "SELECT") {
        value = selectionValue(this.node);
    } else if (this.node.type === "password") {
        value = Array(value.length + 1).join('\u2022'); // jshint ignore:line
    }
    return value.length === 0 ? (this.node.placeholder || "") : value;
};

NodeContainer.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/;
NodeContainer.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g;
NodeContainer.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;
NodeContainer.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/;

function selectionValue(node) {
    var option = node.options[node.selectedIndex || 0];
    return option ? (option.text || "") : "";
}

function parseMatrix(match) {
    if (match && match[1] === "matrix") {
        return match[2].split(",").map(function(s) {
            return parseFloat(s.trim());
        });
    } else if (match && match[1] === "matrix3d") {
        var matrix3d = match[2].split(",").map(function(s) {
          return parseFloat(s.trim());
        });
        return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];
    }
}

function isPercentage(value) {
    return value.toString().indexOf("%") !== -1;
}

function removePx(str) {
    return str.replace("px", "");
}

function asFloat(str) {
    return parseFloat(str);
}

module.exports = NodeContainer;

},{"./color":3,"./utils":26}],15:[function(_dereq_,module,exports){
var log = _dereq_('./log');
var punycode = _dereq_('punycode');
var NodeContainer = _dereq_('./nodecontainer');
var TextContainer = _dereq_('./textcontainer');
var PseudoElementContainer = _dereq_('./pseudoelementcontainer');
var FontMetrics = _dereq_('./fontmetrics');
var Color = _dereq_('./color');
var StackingContext = _dereq_('./stackingcontext');
var utils = _dereq_('./utils');
var bind = utils.bind;
var getBounds = utils.getBounds;
var parseBackgrounds = utils.parseBackgrounds;
var offsetBounds = utils.offsetBounds;

function NodeParser(element, renderer, support, imageLoader, options) {
    log("Starting NodeParser");
    this.renderer = renderer;
    this.options = options;
    this.range = null;
    this.support = support;
    this.renderQueue = [];
    this.stack = new StackingContext(true, 1, element.ownerDocument, null);
    var parent = new NodeContainer(element, null);
    if (options.background) {
        renderer.rectangle(0, 0, renderer.width, renderer.height, new Color(options.background));
    }
    if (element === element.ownerDocument.documentElement) {
        // http://www.w3.org/TR/css3-background/#special-backgrounds
        var canvasBackground = new NodeContainer(parent.color('backgroundColor').isTransparent() ? element.ownerDocument.body : element.ownerDocument.documentElement, null);
        renderer.rectangle(0, 0, renderer.width, renderer.height, canvasBackground.color('backgroundColor'));
    }
    parent.visibile = parent.isElementVisible();
    this.createPseudoHideStyles(element.ownerDocument);
    this.disableAnimations(element.ownerDocument);
    this.nodes = flatten([parent].concat(this.getChildren(parent)).filter(function(container) {
        return container.visible = container.isElementVisible();
    }).map(this.getPseudoElements, this));
    this.fontMetrics = new FontMetrics();
    log("Fetched nodes, total:", this.nodes.length);
    log("Calculate overflow clips");
    this.calculateOverflowClips();
    log("Start fetching images");
    this.images = imageLoader.fetch(this.nodes.filter(isElement));
    this.ready = this.images.ready.then(bind(function() {
        log("Images loaded, starting parsing");
        log("Creating stacking contexts");
        this.createStackingContexts();
        log("Sorting stacking contexts");
        this.sortStackingContexts(this.stack);
        this.parse(this.stack);
        log("Render queue created with " + this.renderQueue.length + " items");
        return new Promise(bind(function(resolve) {
            if (!options.async) {
                this.renderQueue.forEach(this.paint, this);
                resolve();
            } else if (typeof(options.async) === "function") {
                options.async.call(this, this.renderQueue, resolve);
            } else if (this.renderQueue.length > 0){
                this.renderIndex = 0;
                this.asyncRenderer(this.renderQueue, resolve);
            } else {
                resolve();
            }
        }, this));
    }, this));
}

NodeParser.prototype.calculateOverflowClips = function() {
    this.nodes.forEach(function(container) {
        if (isElement(container)) {
            if (isPseudoElement(container)) {
                container.appendToDOM();
            }
            container.borders = this.parseBorders(container);
            var clip = (container.css('overflow') === "hidden") ? [container.borders.clip] : [];
            var cssClip = container.parseClip();
            if (cssClip && ["absolute", "fixed"].indexOf(container.css('position')) !== -1) {
                clip.push([["rect",
                        container.bounds.left + cssClip.left,
                        container.bounds.top + cssClip.top,
                        cssClip.right - cssClip.left,
                        cssClip.bottom - cssClip.top
                ]]);
            }
            container.clip = hasParentClip(container) ? container.parent.clip.concat(clip) : clip;
            container.backgroundClip = (container.css('overflow') !== "hidden") ? container.clip.concat([container.borders.clip]) : container.clip;
            if (isPseudoElement(container)) {
                container.cleanDOM();
            }
        } else if (isTextNode(container)) {
            container.clip = hasParentClip(container) ? container.parent.clip : [];
        }
        if (!isPseudoElement(container)) {
            container.bounds = null;
        }
    }, this);
};

function hasParentClip(container) {
    return container.parent && container.parent.clip.length;
}

NodeParser.prototype.asyncRenderer = function(queue, resolve, asyncTimer) {
    asyncTimer = asyncTimer || Date.now();
    this.paint(queue[this.renderIndex++]);
    if (queue.length === this.renderIndex) {
        resolve();
    } else if (asyncTimer + 20 > Date.now()) {
        this.asyncRenderer(queue, resolve, asyncTimer);
    } else {
        setTimeout(bind(function() {
            this.asyncRenderer(queue, resolve);
        }, this), 0);
    }
};

NodeParser.prototype.createPseudoHideStyles = function(document) {
    this.createStyles(document, '.' + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }' +
        '.' + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }');
};

NodeParser.prototype.disableAnimations = function(document) {
    this.createStyles(document, '* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; ' +
        '-webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}');
};

NodeParser.prototype.createStyles = function(document, styles) {
    var hidePseudoElements = document.createElement('style');
    hidePseudoElements.innerHTML = styles;
    document.body.appendChild(hidePseudoElements);
};

NodeParser.prototype.getPseudoElements = function(container) {
    var nodes = [[container]];
    if (container.node.nodeType === Node.ELEMENT_NODE) {
        var before = this.getPseudoElement(container, ":before");
        var after = this.getPseudoElement(container, ":after");

        if (before) {
            nodes.push(before);
        }

        if (after) {
            nodes.push(after);
        }
    }
    return flatten(nodes);
};

function toCamelCase(str) {
    return str.replace(/(\-[a-z])/g, function(match){
        return match.toUpperCase().replace('-','');
    });
}

NodeParser.prototype.getPseudoElement = function(container, type) {
    var style = container.computedStyle(type);
    if(!style || !style.content || style.content === "none" || style.content === "-moz-alt-content" || style.display === "none") {
        return null;
    }

    var content = stripQuotes(style.content);
    var isImage = content.substr(0, 3) === 'url';
    var pseudoNode = document.createElement(isImage ? 'img' : 'html2canvaspseudoelement');
    var pseudoContainer = new PseudoElementContainer(pseudoNode, container, type);

    for (var i = style.length-1; i >= 0; i--) {
        var property = toCamelCase(style.item(i));
        pseudoNode.style[property] = style[property];
    }

    pseudoNode.className = PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER;

    if (isImage) {
        pseudoNode.src = parseBackgrounds(content)[0].args[0];
        return [pseudoContainer];
    } else {
        var text = document.createTextNode(content);
        pseudoNode.appendChild(text);
        return [pseudoContainer, new TextContainer(text, pseudoContainer)];
    }
};


NodeParser.prototype.getChildren = function(parentContainer) {
    return flatten([].filter.call(parentContainer.node.childNodes, renderableNode).map(function(node) {
        var container = [node.nodeType === Node.TEXT_NODE ? new TextContainer(node, parentContainer) : new NodeContainer(node, parentContainer)].filter(nonIgnoredElement);
        return node.nodeType === Node.ELEMENT_NODE && container.length && node.tagName !== "TEXTAREA" ? (container[0].isElementVisible() ? container.concat(this.getChildren(container[0])) : []) : container;
    }, this));
};

NodeParser.prototype.newStackingContext = function(container, hasOwnStacking) {
    var stack = new StackingContext(hasOwnStacking, container.getOpacity(), container.node, container.parent);
    container.cloneTo(stack);
    var parentStack = hasOwnStacking ? stack.getParentStack(this) : stack.parent.stack;
    parentStack.contexts.push(stack);
    container.stack = stack;
};

NodeParser.prototype.createStackingContexts = function() {
    this.nodes.forEach(function(container) {
        if (isElement(container) && (this.isRootElement(container) || hasOpacity(container) || isPositionedForStacking(container) || this.isBodyWithTransparentRoot(container) || container.hasTransform())) {
            this.newStackingContext(container, true);
        } else if (isElement(container) && ((isPositioned(container) && zIndex0(container)) || isInlineBlock(container) || isFloating(container))) {
            this.newStackingContext(container, false);
        } else {
            container.assignStack(container.parent.stack);
        }
    }, this);
};

NodeParser.prototype.isBodyWithTransparentRoot = function(container) {
    return container.node.nodeName === "BODY" && container.parent.color('backgroundColor').isTransparent();
};

NodeParser.prototype.isRootElement = function(container) {
    return container.parent === null;
};

NodeParser.prototype.sortStackingContexts = function(stack) {
    stack.contexts.sort(zIndexSort(stack.contexts.slice(0)));
    stack.contexts.forEach(this.sortStackingContexts, this);
};

NodeParser.prototype.parseTextBounds = function(container) {
    return function(text, index, textList) {
        if (container.parent.css("textDecoration").substr(0, 4) !== "none" || text.trim().length !== 0) {
            if (this.support.rangeBounds && !container.parent.hasTransform()) {
                var offset = textList.slice(0, index).join("").length;
                return this.getRangeBounds(container.node, offset, text.length);
            } else if (container.node && typeof(container.node.data) === "string") {
                var replacementNode = container.node.splitText(text.length);
                var bounds = this.getWrapperBounds(container.node, container.parent.hasTransform());
                container.node = replacementNode;
                return bounds;
            }
        } else if(!this.support.rangeBounds || container.parent.hasTransform()){
            container.node = container.node.splitText(text.length);
        }
        return {};
    };
};

NodeParser.prototype.getWrapperBounds = function(node, transform) {
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    var parent = node.parentNode,
        backupText = node.cloneNode(true);

    wrapper.appendChild(node.cloneNode(true));
    parent.replaceChild(wrapper, node);
    var bounds = transform ? offsetBounds(wrapper) : getBounds(wrapper);
    parent.replaceChild(backupText, wrapper);
    return bounds;
};

NodeParser.prototype.getRangeBounds = function(node, offset, length) {
    var range = this.range || (this.range = node.ownerDocument.createRange());
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return range.getBoundingClientRect();
};

function ClearTransform() {}

NodeParser.prototype.parse = function(stack) {
    // http://www.w3.org/TR/CSS21/visuren.html#z-index
    var negativeZindex = stack.contexts.filter(negativeZIndex); // 2. the child stacking contexts with negative stack levels (most negative first).
    var descendantElements = stack.children.filter(isElement);
    var descendantNonFloats = descendantElements.filter(not(isFloating));
    var nonInlineNonPositionedDescendants = descendantNonFloats.filter(not(isPositioned)).filter(not(inlineLevel)); // 3 the in-flow, non-inline-level, non-positioned descendants.
    var nonPositionedFloats = descendantElements.filter(not(isPositioned)).filter(isFloating); // 4. the non-positioned floats.
    var inFlow = descendantNonFloats.filter(not(isPositioned)).filter(inlineLevel); // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
    var stackLevel0 = stack.contexts.concat(descendantNonFloats.filter(isPositioned)).filter(zIndex0); // 6. the child stacking contexts with stack level 0 and the positioned descendants with stack level 0.
    var text = stack.children.filter(isTextNode).filter(hasText);
    var positiveZindex = stack.contexts.filter(positiveZIndex); // 7. the child stacking contexts with positive stack levels (least positive first).
    negativeZindex.concat(nonInlineNonPositionedDescendants).concat(nonPositionedFloats)
        .concat(inFlow).concat(stackLevel0).concat(text).concat(positiveZindex).forEach(function(container) {
            this.renderQueue.push(container);
            if (isStackingContext(container)) {
                this.parse(container);
                this.renderQueue.push(new ClearTransform());
            }
        }, this);
};

NodeParser.prototype.paint = function(container) {
    try {
        if (container instanceof ClearTransform) {
            this.renderer.ctx.restore();
        } else if (isTextNode(container)) {
            if (isPseudoElement(container.parent)) {
                container.parent.appendToDOM();
            }
            this.paintText(container);
            if (isPseudoElement(container.parent)) {
                container.parent.cleanDOM();
            }
        } else {
            this.paintNode(container);
        }
    } catch(e) {
        log(e);
        if (this.options.strict) {
            throw e;
        }
    }
};

NodeParser.prototype.paintNode = function(container) {
    if (isStackingContext(container)) {
        this.renderer.setOpacity(container.opacity);
        this.renderer.ctx.save();
        if (container.hasTransform()) {
            this.renderer.setTransform(container.parseTransform());
        }
    }

    if (container.node.nodeName === "INPUT" && container.node.type === "checkbox") {
        this.paintCheckbox(container);
    } else if (container.node.nodeName === "INPUT" && container.node.type === "radio") {
        this.paintRadio(container);
    } else {
        this.paintElement(container);
    }
};

NodeParser.prototype.paintElement = function(container) {
    var bounds = container.parseBounds();
    this.renderer.clip(container.backgroundClip, function() {
        this.renderer.renderBackground(container, bounds, container.borders.borders.map(getWidth));
    }, this);

    this.renderer.clip(container.clip, function() {
        this.renderer.renderBorders(container.borders.borders);
    }, this);

    this.renderer.clip(container.backgroundClip, function() {
        switch (container.node.nodeName) {
        case "svg":
        case "IFRAME":
            var imgContainer = this.images.get(container.node);
            if (imgContainer) {
                this.renderer.renderImage(container, bounds, container.borders, imgContainer);
            } else {
                log("Error loading <" + container.node.nodeName + ">", container.node);
            }
            break;
        case "IMG":
            var imageContainer = this.images.get(container.node.src);
            if (imageContainer) {
                this.renderer.renderImage(container, bounds, container.borders, imageContainer);
            } else {
                log("Error loading <img>", container.node.src);
            }
            break;
        case "CANVAS":
            this.renderer.renderImage(container, bounds, container.borders, {image: container.node});
            break;
        case "SELECT":
        case "INPUT":
        case "TEXTAREA":
            this.paintFormValue(container);
            break;
        }
    }, this);
};

NodeParser.prototype.paintCheckbox = function(container) {
    var b = container.parseBounds();

    var size = Math.min(b.width, b.height);
    var bounds = {width: size - 1, height: size - 1, top: b.top, left: b.left};
    var r = [3, 3];
    var radius = [r, r, r, r];
    var borders = [1,1,1,1].map(function(w) {
        return {color: new Color('#A5A5A5'), width: w};
    });

    var borderPoints = calculateCurvePoints(bounds, radius, borders);

    this.renderer.clip(container.backgroundClip, function() {
        this.renderer.rectangle(bounds.left + 1, bounds.top + 1, bounds.width - 2, bounds.height - 2, new Color("#DEDEDE"));
        this.renderer.renderBorders(calculateBorders(borders, bounds, borderPoints, radius));
        if (container.node.checked) {
            this.renderer.font(new Color('#424242'), 'normal', 'normal', 'bold', (size - 3) + "px", 'arial');
            this.renderer.text("\u2714", bounds.left + size / 6, bounds.top + size - 1);
        }
    }, this);
};

NodeParser.prototype.paintRadio = function(container) {
    var bounds = container.parseBounds();

    var size = Math.min(bounds.width, bounds.height) - 2;

    this.renderer.clip(container.backgroundClip, function() {
        this.renderer.circleStroke(bounds.left + 1, bounds.top + 1, size, new Color('#DEDEDE'), 1, new Color('#A5A5A5'));
        if (container.node.checked) {
            this.renderer.circle(Math.ceil(bounds.left + size / 4) + 1, Math.ceil(bounds.top + size / 4) + 1, Math.floor(size / 2), new Color('#424242'));
        }
    }, this);
};

NodeParser.prototype.paintFormValue = function(container) {
    var value = container.getValue();
    if (value.length > 0) {
        var document = container.node.ownerDocument;
        var wrapper = document.createElement('html2canvaswrapper');
        var properties = ['lineHeight', 'textAlign', 'fontFamily', 'fontWeight', 'fontSize', 'color',
            'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom',
            'width', 'height', 'borderLeftStyle', 'borderTopStyle', 'borderLeftWidth', 'borderTopWidth',
            'boxSizing', 'whiteSpace', 'wordWrap'];

        properties.forEach(function(property) {
            try {
                wrapper.style[property] = container.css(property);
            } catch(e) {
                // Older IE has issues with "border"
                log("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
            }
        });
        var bounds = container.parseBounds();
        wrapper.style.position = "fixed";
        wrapper.style.left = bounds.left + "px";
        wrapper.style.top = bounds.top + "px";
        wrapper.textContent = value;
        document.body.appendChild(wrapper);
        this.paintText(new TextContainer(wrapper.firstChild, container));
        document.body.removeChild(wrapper);
    }
};

NodeParser.prototype.paintText = function(container) {
    container.applyTextTransform();
    var characters = punycode.ucs2.decode(container.node.data);
    var textList = (!this.options.letterRendering || noLetterSpacing(container)) && !hasUnicode(container.node.data) ? getWords(characters) : characters.map(function(character) {
        return punycode.ucs2.encode([character]);
    });

    var weight = container.parent.fontWeight();
    var size = container.parent.css('fontSize');
    var family = container.parent.css('fontFamily');
    var shadows = container.parent.parseTextShadows();

    this.renderer.font(container.parent.color('color'), container.parent.css('fontStyle'), container.parent.css('fontVariant'), weight, size, family);
    if (shadows.length) {
        // TODO: support multiple text shadows
        this.renderer.fontShadow(shadows[0].color, shadows[0].offsetX, shadows[0].offsetY, shadows[0].blur);
    } else {
        this.renderer.clearShadow();
    }

    this.renderer.clip(container.parent.clip, function() {
        textList.map(this.parseTextBounds(container), this).forEach(function(bounds, index) {
            if (bounds) {
                this.renderer.text(textList[index], bounds.left, bounds.bottom);
                this.renderTextDecoration(container.parent, bounds, this.fontMetrics.getMetrics(family, size));
            }
        }, this);
    }, this);
};

NodeParser.prototype.renderTextDecoration = function(container, bounds, metrics) {
    switch(container.css("textDecoration").split(" ")[0]) {
    case "underline":
        // Draws a line at the baseline of the font
        // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
        this.renderer.rectangle(bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, container.color("color"));
        break;
    case "overline":
        this.renderer.rectangle(bounds.left, Math.round(bounds.top), bounds.width, 1, container.color("color"));
        break;
    case "line-through":
        // TODO try and find exact position for line-through
        this.renderer.rectangle(bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, container.color("color"));
        break;
    }
};

var borderColorTransforms = {
    inset: [
        ["darken", 0.60],
        ["darken", 0.10],
        ["darken", 0.10],
        ["darken", 0.60]
    ]
};

NodeParser.prototype.parseBorders = function(container) {
    var nodeBounds = container.parseBounds();
    var radius = getBorderRadiusData(container);
    var borders = ["Top", "Right", "Bottom", "Left"].map(function(side, index) {
        var style = container.css('border' + side + 'Style');
        var color = container.color('border' + side + 'Color');
        if (style === "inset" && color.isBlack()) {
            color = new Color([255, 255, 255, color.a]); // this is wrong, but
        }
        var colorTransform = borderColorTransforms[style] ? borderColorTransforms[style][index] : null;
        return {
            width: container.cssInt('border' + side + 'Width'),
            color: colorTransform ? color[colorTransform[0]](colorTransform[1]) : color,
            args: null
        };
    });
    var borderPoints = calculateCurvePoints(nodeBounds, radius, borders);

    return {
        clip: this.parseBackgroundClip(container, borderPoints, borders, radius, nodeBounds),
        borders: calculateBorders(borders, nodeBounds, borderPoints, radius)
    };
};

function calculateBorders(borders, nodeBounds, borderPoints, radius) {
    return borders.map(function(border, borderSide) {
        if (border.width > 0) {
            var bx = nodeBounds.left;
            var by = nodeBounds.top;
            var bw = nodeBounds.width;
            var bh = nodeBounds.height - (borders[2].width);

            switch(borderSide) {
            case 0:
                // top border
                bh = borders[0].width;
                border.args = drawSide({
                        c1: [bx, by],
                        c2: [bx + bw, by],
                        c3: [bx + bw - borders[1].width, by + bh],
                        c4: [bx + borders[3].width, by + bh]
                    }, radius[0], radius[1],
                    borderPoints.topLeftOuter, borderPoints.topLeftInner, borderPoints.topRightOuter, borderPoints.topRightInner);
                break;
            case 1:
                // right border
                bx = nodeBounds.left + nodeBounds.width - (borders[1].width);
                bw = borders[1].width;

                border.args = drawSide({
                        c1: [bx + bw, by],
                        c2: [bx + bw, by + bh + borders[2].width],
                        c3: [bx, by + bh],
                        c4: [bx, by + borders[0].width]
                    }, radius[1], radius[2],
                    borderPoints.topRightOuter, borderPoints.topRightInner, borderPoints.bottomRightOuter, borderPoints.bottomRightInner);
                break;
            case 2:
                // bottom border
                by = (by + nodeBounds.height) - (borders[2].width);
                bh = borders[2].width;
                border.args = drawSide({
                        c1: [bx + bw, by + bh],
                        c2: [bx, by + bh],
                        c3: [bx + borders[3].width, by],
                        c4: [bx + bw - borders[3].width, by]
                    }, radius[2], radius[3],
                    borderPoints.bottomRightOuter, borderPoints.bottomRightInner, borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner);
                break;
            case 3:
                // left border
                bw = borders[3].width;
                border.args = drawSide({
                        c1: [bx, by + bh + borders[2].width],
                        c2: [bx, by],
                        c3: [bx + bw, by + borders[0].width],
                        c4: [bx + bw, by + bh]
                    }, radius[3], radius[0],
                    borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner, borderPoints.topLeftOuter, borderPoints.topLeftInner);
                break;
            }
        }
        return border;
    });
}

NodeParser.prototype.parseBackgroundClip = function(container, borderPoints, borders, radius, bounds) {
    var backgroundClip = container.css('backgroundClip'),
        borderArgs = [];

    switch(backgroundClip) {
    case "content-box":
    case "padding-box":
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftInner, borderPoints.topRightInner, bounds.left + borders[3].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightInner, borderPoints.bottomRightInner, bounds.left + bounds.width - borders[1].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightInner, borderPoints.bottomLeftInner, bounds.left + bounds.width - borders[1].width, bounds.top + bounds.height - borders[2].width);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftInner, borderPoints.topLeftInner, bounds.left + borders[3].width, bounds.top + bounds.height - borders[2].width);
        break;

    default:
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftOuter, borderPoints.topRightOuter, bounds.left, bounds.top);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightOuter, borderPoints.bottomRightOuter, bounds.left + bounds.width, bounds.top);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightOuter, borderPoints.bottomLeftOuter, bounds.left + bounds.width, bounds.top + bounds.height);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftOuter, borderPoints.topLeftOuter, bounds.left, bounds.top + bounds.height);
        break;
    }

    return borderArgs;
};

function getCurvePoints(x, y, r1, r2) {
    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    var ox = (r1) * kappa, // control point offset horizontal
        oy = (r2) * kappa, // control point offset vertical
        xm = x + r1, // x-middle
        ym = y + r2; // y-middle
    return {
        topLeft: bezierCurve({x: x, y: ym}, {x: x, y: ym - oy}, {x: xm - ox, y: y}, {x: xm, y: y}),
        topRight: bezierCurve({x: x, y: y}, {x: x + ox,y: y}, {x: xm, y: ym - oy}, {x: xm, y: ym}),
        bottomRight: bezierCurve({x: xm, y: y}, {x: xm, y: y + oy}, {x: x + ox, y: ym}, {x: x, y: ym}),
        bottomLeft: bezierCurve({x: xm, y: ym}, {x: xm - ox, y: ym}, {x: x, y: y + oy}, {x: x, y:y})
    };
}

function calculateCurvePoints(bounds, borderRadius, borders) {
    var x = bounds.left,
        y = bounds.top,
        width = bounds.width,
        height = bounds.height,

        tlh = borderRadius[0][0] < width / 2 ? borderRadius[0][0] : width / 2,
        tlv = borderRadius[0][1] < height / 2 ? borderRadius[0][1] : height / 2,
        trh = borderRadius[1][0] < width / 2 ? borderRadius[1][0] : width / 2,
        trv = borderRadius[1][1] < height / 2 ? borderRadius[1][1] : height / 2,
        brh = borderRadius[2][0] < width / 2 ? borderRadius[2][0] : width / 2,
        brv = borderRadius[2][1] < height / 2 ? borderRadius[2][1] : height / 2,
        blh = borderRadius[3][0] < width / 2 ? borderRadius[3][0] : width / 2,
        blv = borderRadius[3][1] < height / 2 ? borderRadius[3][1] : height / 2;

    var topWidth = width - trh,
        rightHeight = height - brv,
        bottomWidth = width - brh,
        leftHeight = height - blv;

    return {
        topLeftOuter: getCurvePoints(x, y, tlh, tlv).topLeft.subdivide(0.5),
        topLeftInner: getCurvePoints(x + borders[3].width, y + borders[0].width, Math.max(0, tlh - borders[3].width), Math.max(0, tlv - borders[0].width)).topLeft.subdivide(0.5),
        topRightOuter: getCurvePoints(x + topWidth, y, trh, trv).topRight.subdivide(0.5),
        topRightInner: getCurvePoints(x + Math.min(topWidth, width + borders[3].width), y + borders[0].width, (topWidth > width + borders[3].width) ? 0 :trh - borders[3].width, trv - borders[0].width).topRight.subdivide(0.5),
        bottomRightOuter: getCurvePoints(x + bottomWidth, y + rightHeight, brh, brv).bottomRight.subdivide(0.5),
        bottomRightInner: getCurvePoints(x + Math.min(bottomWidth, width - borders[3].width), y + Math.min(rightHeight, height + borders[0].width), Math.max(0, brh - borders[1].width),  brv - borders[2].width).bottomRight.subdivide(0.5),
        bottomLeftOuter: getCurvePoints(x, y + leftHeight, blh, blv).bottomLeft.subdivide(0.5),
        bottomLeftInner: getCurvePoints(x + borders[3].width, y + leftHeight, Math.max(0, blh - borders[3].width), blv - borders[2].width).bottomLeft.subdivide(0.5)
    };
}

function bezierCurve(start, startControl, endControl, end) {
    var lerp = function (a, b, t) {
        return {
            x: a.x + (b.x - a.x) * t,
            y: a.y + (b.y - a.y) * t
        };
    };

    return {
        start: start,
        startControl: startControl,
        endControl: endControl,
        end: end,
        subdivide: function(t) {
            var ab = lerp(start, startControl, t),
                bc = lerp(startControl, endControl, t),
                cd = lerp(endControl, end, t),
                abbc = lerp(ab, bc, t),
                bccd = lerp(bc, cd, t),
                dest = lerp(abbc, bccd, t);
            return [bezierCurve(start, ab, abbc, dest), bezierCurve(dest, bccd, cd, end)];
        },
        curveTo: function(borderArgs) {
            borderArgs.push(["bezierCurve", startControl.x, startControl.y, endControl.x, endControl.y, end.x, end.y]);
        },
        curveToReversed: function(borderArgs) {
            borderArgs.push(["bezierCurve", endControl.x, endControl.y, startControl.x, startControl.y, start.x, start.y]);
        }
    };
}

function drawSide(borderData, radius1, radius2, outer1, inner1, outer2, inner2) {
    var borderArgs = [];

    if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push(["line", outer1[1].start.x, outer1[1].start.y]);
        outer1[1].curveTo(borderArgs);
    } else {
        borderArgs.push([ "line", borderData.c1[0], borderData.c1[1]]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
        borderArgs.push(["line", outer2[0].start.x, outer2[0].start.y]);
        outer2[0].curveTo(borderArgs);
        borderArgs.push(["line", inner2[0].end.x, inner2[0].end.y]);
        inner2[0].curveToReversed(borderArgs);
    } else {
        borderArgs.push(["line", borderData.c2[0], borderData.c2[1]]);
        borderArgs.push(["line", borderData.c3[0], borderData.c3[1]]);
    }

    if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push(["line", inner1[1].end.x, inner1[1].end.y]);
        inner1[1].curveToReversed(borderArgs);
    } else {
        borderArgs.push(["line", borderData.c4[0], borderData.c4[1]]);
    }

    return borderArgs;
}

function parseCorner(borderArgs, radius1, radius2, corner1, corner2, x, y) {
    if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push(["line", corner1[0].start.x, corner1[0].start.y]);
        corner1[0].curveTo(borderArgs);
        corner1[1].curveTo(borderArgs);
    } else {
        borderArgs.push(["line", x, y]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
        borderArgs.push(["line", corner2[0].start.x, corner2[0].start.y]);
    }
}

function negativeZIndex(container) {
    return container.cssInt("zIndex") < 0;
}

function positiveZIndex(container) {
    return container.cssInt("zIndex") > 0;
}

function zIndex0(container) {
    return container.cssInt("zIndex") === 0;
}

function inlineLevel(container) {
    return ["inline", "inline-block", "inline-table"].indexOf(container.css("display")) !== -1;
}

function isStackingContext(container) {
    return (container instanceof StackingContext);
}

function hasText(container) {
    return container.node.data.trim().length > 0;
}

function noLetterSpacing(container) {
    return (/^(normal|none|0px)$/.test(container.parent.css("letterSpacing")));
}

function getBorderRadiusData(container) {
    return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(side) {
        var value = container.css('border' + side + 'Radius');
        var arr = value.split(" ");
        if (arr.length <= 1) {
            arr[1] = arr[0];
        }
        return arr.map(asInt);
    });
}

function renderableNode(node) {
    return (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE);
}

function isPositionedForStacking(container) {
    var position = container.css("position");
    var zIndex = (["absolute", "relative", "fixed"].indexOf(position) !== -1) ? container.css("zIndex") : "auto";
    return zIndex !== "auto";
}

function isPositioned(container) {
    return container.css("position") !== "static";
}

function isFloating(container) {
    return container.css("float") !== "none";
}

function isInlineBlock(container) {
    return ["inline-block", "inline-table"].indexOf(container.css("display")) !== -1;
}

function not(callback) {
    var context = this;
    return function() {
        return !callback.apply(context, arguments);
    };
}

function isElement(container) {
    return container.node.nodeType === Node.ELEMENT_NODE;
}

function isPseudoElement(container) {
    return container.isPseudoElement === true;
}

function isTextNode(container) {
    return container.node.nodeType === Node.TEXT_NODE;
}

function zIndexSort(contexts) {
    return function(a, b) {
        return (a.cssInt("zIndex") + (contexts.indexOf(a) / contexts.length)) - (b.cssInt("zIndex") + (contexts.indexOf(b) / contexts.length));
    };
}

function hasOpacity(container) {
    return container.getOpacity() < 1;
}

function asInt(value) {
    return parseInt(value, 10);
}

function getWidth(border) {
    return border.width;
}

function nonIgnoredElement(nodeContainer) {
    return (nodeContainer.node.nodeType !== Node.ELEMENT_NODE || ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(nodeContainer.node.nodeName) === -1);
}

function flatten(arrays) {
    return [].concat.apply([], arrays);
}

function stripQuotes(content) {
    var first = content.substr(0, 1);
    return (first === content.substr(content.length - 1) && first.match(/'|"/)) ? content.substr(1, content.length - 2) : content;
}

function getWords(characters) {
    var words = [], i = 0, onWordBoundary = false, word;
    while(characters.length) {
        if (isWordBoundary(characters[i]) === onWordBoundary) {
            word = characters.splice(0, i);
            if (word.length) {
                words.push(punycode.ucs2.encode(word));
            }
            onWordBoundary =! onWordBoundary;
            i = 0;
        } else {
            i++;
        }

        if (i >= characters.length) {
            word = characters.splice(0, i);
            if (word.length) {
                words.push(punycode.ucs2.encode(word));
            }
        }
    }
    return words;
}

function isWordBoundary(characterCode) {
    return [
        32, // <space>
        13, // \r
        10, // \n
        9, // \t
        45 // -
    ].indexOf(characterCode) !== -1;
}

function hasUnicode(string) {
    return (/[^\u0000-\u00ff]/).test(string);
}

module.exports = NodeParser;

},{"./color":3,"./fontmetrics":7,"./log":13,"./nodecontainer":14,"./pseudoelementcontainer":18,"./stackingcontext":21,"./textcontainer":25,"./utils":26,"punycode":1}],16:[function(_dereq_,module,exports){
var XHR = _dereq_('./xhr');
var utils = _dereq_('./utils');
var log = _dereq_('./log');
var createWindowClone = _dereq_('./clone');
var decode64 = utils.decode64;

function Proxy(src, proxyUrl, document) {
    var supportsCORS = ('withCredentials' in new XMLHttpRequest());
    if (!proxyUrl) {
        return Promise.reject("No proxy configured");
    }
    var callback = createCallback(supportsCORS);
    var url = createProxyUrl(proxyUrl, src, callback);

    return supportsCORS ? XHR(url) : (jsonp(document, url, callback).then(function(response) {
        return decode64(response.content);
    }));
}
var proxyCount = 0;

function ProxyURL(src, proxyUrl, document) {
    var supportsCORSImage = ('crossOrigin' in new Image());
    var callback = createCallback(supportsCORSImage);
    var url = createProxyUrl(proxyUrl, src, callback);
    return (supportsCORSImage ? Promise.resolve(url) : jsonp(document, url, callback).then(function(response) {
        return "data:" + response.type + ";base64," + response.content;
    }));
}

function jsonp(document, url, callback) {
    return new Promise(function(resolve, reject) {
        var s = document.createElement("script");
        var cleanup = function() {
            delete window.html2canvas.proxy[callback];
            document.body.removeChild(s);
        };
        window.html2canvas.proxy[callback] = function(response) {
            cleanup();
            resolve(response);
        };
        s.src = url;
        s.onerror = function(e) {
            cleanup();
            reject(e);
        };
        document.body.appendChild(s);
    });
}

function createCallback(useCORS) {
    return !useCORS ? "html2canvas_" + Date.now() + "_" + (++proxyCount) + "_" + Math.round(Math.random() * 100000) : "";
}

function createProxyUrl(proxyUrl, src, callback) {
    return proxyUrl + "?url=" + encodeURIComponent(src) + (callback.length ? "&callback=html2canvas.proxy." + callback : "");
}

function documentFromHTML(src) {
    return function(html) {
        var parser = new DOMParser(), doc;
        try {
            doc = parser.parseFromString(html, "text/html");
        } catch(e) {
            log("DOMParser not supported, falling back to createHTMLDocument");
            doc = document.implementation.createHTMLDocument("");
            try {
                doc.open();
                doc.write(html);
                doc.close();
            } catch(ee) {
                log("createHTMLDocument write not supported, falling back to document.body.innerHTML");
                doc.body.innerHTML = html; // ie9 doesnt support writing to documentElement
            }
        }

        var b = doc.querySelector("base");
        if (!b || !b.href.host) {
            var base = doc.createElement("base");
            base.href = src;
            doc.head.insertBefore(base, doc.head.firstChild);
        }

        return doc;
    };
}

function loadUrlDocument(src, proxy, document, width, height, options) {
    return new Proxy(src, proxy, window.document).then(documentFromHTML(src)).then(function(doc) {
        return createWindowClone(doc, document, width, height, options, 0, 0);
    });
}

exports.Proxy = Proxy;
exports.ProxyURL = ProxyURL;
exports.loadUrlDocument = loadUrlDocument;

},{"./clone":2,"./log":13,"./utils":26,"./xhr":28}],17:[function(_dereq_,module,exports){
var ProxyURL = _dereq_('./proxy').ProxyURL;

function ProxyImageContainer(src, proxy) {
    var link = document.createElement("a");
    link.href = src;
    src = link.href;
    this.src = src;
    this.image = new Image();
    var self = this;
    this.promise = new Promise(function(resolve, reject) {
        self.image.crossOrigin = "Anonymous";
        self.image.onload = resolve;
        self.image.onerror = reject;

        new ProxyURL(src, proxy, document).then(function(url) {
            self.image.src = url;
        })['catch'](reject);
    });
}

module.exports = ProxyImageContainer;

},{"./proxy":16}],18:[function(_dereq_,module,exports){
var NodeContainer = _dereq_('./nodecontainer');

function PseudoElementContainer(node, parent, type) {
    NodeContainer.call(this, node, parent);
    this.isPseudoElement = true;
    this.before = type === ":before";
}

PseudoElementContainer.prototype.cloneTo = function(stack) {
    PseudoElementContainer.prototype.cloneTo.call(this, stack);
    stack.isPseudoElement = true;
    stack.before = this.before;
};

PseudoElementContainer.prototype = Object.create(NodeContainer.prototype);

PseudoElementContainer.prototype.appendToDOM = function() {
    if (this.before) {
        this.parent.node.insertBefore(this.node, this.parent.node.firstChild);
    } else {
        this.parent.node.appendChild(this.node);
    }
    this.parent.node.className += " " + this.getHideClass();
};

PseudoElementContainer.prototype.cleanDOM = function() {
    this.node.parentNode.removeChild(this.node);
    this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "");
};

PseudoElementContainer.prototype.getHideClass = function() {
    return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")];
};

PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before";
PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after";

module.exports = PseudoElementContainer;

},{"./nodecontainer":14}],19:[function(_dereq_,module,exports){
var log = _dereq_('./log');

function Renderer(width, height, images, options, document) {
    this.width = width;
    this.height = height;
    this.images = images;
    this.options = options;
    this.document = document;
}

Renderer.prototype.renderImage = function(container, bounds, borderData, imageContainer) {
    var paddingLeft = container.cssInt('paddingLeft'),
        paddingTop = container.cssInt('paddingTop'),
        paddingRight = container.cssInt('paddingRight'),
        paddingBottom = container.cssInt('paddingBottom'),
        borders = borderData.borders;

    var width = bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight);
    var height = bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom);
    this.drawImage(
        imageContainer,
        0,
        0,
        imageContainer.image.width || width,
        imageContainer.image.height || height,
        bounds.left + paddingLeft + borders[3].width,
        bounds.top + paddingTop + borders[0].width,
        width,
        height
    );
};

Renderer.prototype.renderBackground = function(container, bounds, borderData) {
    if (bounds.height > 0 && bounds.width > 0) {
        this.renderBackgroundColor(container, bounds);
        this.renderBackgroundImage(container, bounds, borderData);
    }
};

Renderer.prototype.renderBackgroundColor = function(container, bounds) {
    var color = container.color("backgroundColor");
    if (!color.isTransparent()) {
        this.rectangle(bounds.left, bounds.top, bounds.width, bounds.height, color);
    }
};

Renderer.prototype.renderBorders = function(borders) {
    borders.forEach(this.renderBorder, this);
};

Renderer.prototype.renderBorder = function(data) {
    if (!data.color.isTransparent() && data.args !== null) {
        this.drawShape(data.args, data.color);
    }
};

Renderer.prototype.renderBackgroundImage = function(container, bounds, borderData) {
    var backgroundImages = container.parseBackgroundImages();
    backgroundImages.reverse().forEach(function(backgroundImage, index, arr) {
        switch(backgroundImage.method) {
        case "url":
            var image = this.images.get(backgroundImage.args[0]);
            if (image) {
                this.renderBackgroundRepeating(container, bounds, image, arr.length - (index+1), borderData);
            } else {
                log("Error loading background-image", backgroundImage.args[0]);
            }
            break;
        case "linear-gradient":
        case "gradient":
            var gradientImage = this.images.get(backgroundImage.value);
            if (gradientImage) {
                this.renderBackgroundGradient(gradientImage, bounds, borderData);
            } else {
                log("Error loading background-image", backgroundImage.args[0]);
            }
            break;
        case "none":
            break;
        default:
            log("Unknown background-image type", backgroundImage.args[0]);
        }
    }, this);
};

Renderer.prototype.renderBackgroundRepeating = function(container, bounds, imageContainer, index, borderData) {
    var size = container.parseBackgroundSize(bounds, imageContainer.image, index);
    var position = container.parseBackgroundPosition(bounds, imageContainer.image, index, size);
    var repeat = container.parseBackgroundRepeat(index);
    switch (repeat) {
    case "repeat-x":
    case "repeat no-repeat":
        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + borderData[3], bounds.top + position.top + borderData[0], 99999, size.height, borderData);
        break;
    case "repeat-y":
    case "no-repeat repeat":
        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + position.left + borderData[3], bounds.top + borderData[0], size.width, 99999, borderData);
        break;
    case "no-repeat":
        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + position.left + borderData[3], bounds.top + position.top + borderData[0], size.width, size.height, borderData);
        break;
    default:
        this.renderBackgroundRepeat(imageContainer, position, size, {top: bounds.top, left: bounds.left}, borderData[3], borderData[0]);
        break;
    }
};

module.exports = Renderer;

},{"./log":13}],20:[function(_dereq_,module,exports){
var Renderer = _dereq_('../renderer');
var LinearGradientContainer = _dereq_('../lineargradientcontainer');
var log = _dereq_('../log');

function CanvasRenderer(width, height) {
    Renderer.apply(this, arguments);
    this.canvas = this.options.canvas || this.document.createElement("canvas");
    if (!this.options.canvas) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
    this.ctx = this.canvas.getContext("2d");
    this.taintCtx = this.document.createElement("canvas").getContext("2d");
    this.ctx.textBaseline = "bottom";
    this.variables = {};
    log("Initialized CanvasRenderer with size", width, "x", height);
}

CanvasRenderer.prototype = Object.create(Renderer.prototype);

CanvasRenderer.prototype.setFillStyle = function(fillStyle) {
    this.ctx.fillStyle = typeof(fillStyle) === "object" && !!fillStyle.isColor ? fillStyle.toString() : fillStyle;
    return this.ctx;
};

CanvasRenderer.prototype.rectangle = function(left, top, width, height, color) {
    this.setFillStyle(color).fillRect(left, top, width, height);
};

CanvasRenderer.prototype.circle = function(left, top, size, color) {
    this.setFillStyle(color);
    this.ctx.beginPath();
    this.ctx.arc(left + size / 2, top + size / 2, size / 2, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();
};

CanvasRenderer.prototype.circleStroke = function(left, top, size, color, stroke, strokeColor) {
    this.circle(left, top, size, color);
    this.ctx.strokeStyle = strokeColor.toString();
    this.ctx.stroke();
};

CanvasRenderer.prototype.drawShape = function(shape, color) {
    this.shape(shape);
    this.setFillStyle(color).fill();
};

CanvasRenderer.prototype.taints = function(imageContainer) {
    if (imageContainer.tainted === null) {
        this.taintCtx.drawImage(imageContainer.image, 0, 0);
        try {
            this.taintCtx.getImageData(0, 0, 1, 1);
            imageContainer.tainted = false;
        } catch(e) {
            this.taintCtx = document.createElement("canvas").getContext("2d");
            imageContainer.tainted = true;
        }
    }

    return imageContainer.tainted;
};

CanvasRenderer.prototype.drawImage = function(imageContainer, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (!this.taints(imageContainer) || this.options.allowTaint) {
        this.ctx.drawImage(imageContainer.image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
};

CanvasRenderer.prototype.clip = function(shapes, callback, context) {
    this.ctx.save();
    shapes.filter(hasEntries).forEach(function(shape) {
        this.shape(shape).clip();
    }, this);
    callback.call(context);
    this.ctx.restore();
};

CanvasRenderer.prototype.shape = function(shape) {
    this.ctx.beginPath();
    shape.forEach(function(point, index) {
        if (point[0] === "rect") {
            this.ctx.rect.apply(this.ctx, point.slice(1));
        } else {
            this.ctx[(index === 0) ? "moveTo" : point[0] + "To" ].apply(this.ctx, point.slice(1));
        }
    }, this);
    this.ctx.closePath();
    return this.ctx;
};

CanvasRenderer.prototype.font = function(color, style, variant, weight, size, family) {
    this.setFillStyle(color).font = [style, variant, weight, size, family].join(" ").split(",")[0];
};

CanvasRenderer.prototype.fontShadow = function(color, offsetX, offsetY, blur) {
    this.setVariable("shadowColor", color.toString())
        .setVariable("shadowOffsetY", offsetX)
        .setVariable("shadowOffsetX", offsetY)
        .setVariable("shadowBlur", blur);
};

CanvasRenderer.prototype.clearShadow = function() {
    this.setVariable("shadowColor", "rgba(0,0,0,0)");
};

CanvasRenderer.prototype.setOpacity = function(opacity) {
    this.ctx.globalAlpha = opacity;
};

CanvasRenderer.prototype.setTransform = function(transform) {
    this.ctx.translate(transform.origin[0], transform.origin[1]);
    this.ctx.transform.apply(this.ctx, transform.matrix);
    this.ctx.translate(-transform.origin[0], -transform.origin[1]);
};

CanvasRenderer.prototype.setVariable = function(property, value) {
    if (this.variables[property] !== value) {
        this.variables[property] = this.ctx[property] = value;
    }

    return this;
};

CanvasRenderer.prototype.text = function(text, left, bottom) {
    this.ctx.fillText(text, left, bottom);
};

CanvasRenderer.prototype.backgroundRepeatShape = function(imageContainer, backgroundPosition, size, bounds, left, top, width, height, borderData) {
    var shape = [
        ["line", Math.round(left), Math.round(top)],
        ["line", Math.round(left + width), Math.round(top)],
        ["line", Math.round(left + width), Math.round(height + top)],
        ["line", Math.round(left), Math.round(height + top)]
    ];
    this.clip([shape], function() {
        this.renderBackgroundRepeat(imageContainer, backgroundPosition, size, bounds, borderData[3], borderData[0]);
    }, this);
};

CanvasRenderer.prototype.renderBackgroundRepeat = function(imageContainer, backgroundPosition, size, bounds, borderLeft, borderTop) {
    var offsetX = Math.round(bounds.left + backgroundPosition.left + borderLeft), offsetY = Math.round(bounds.top + backgroundPosition.top + borderTop);
    this.setFillStyle(this.ctx.createPattern(this.resizeImage(imageContainer, size), "repeat"));
    this.ctx.translate(offsetX, offsetY);
    this.ctx.fill();
    this.ctx.translate(-offsetX, -offsetY);
};

CanvasRenderer.prototype.renderBackgroundGradient = function(gradientImage, bounds) {
    if (gradientImage instanceof LinearGradientContainer) {
        var gradient = this.ctx.createLinearGradient(
            bounds.left + bounds.width * gradientImage.x0,
            bounds.top + bounds.height * gradientImage.y0,
            bounds.left +  bounds.width * gradientImage.x1,
            bounds.top +  bounds.height * gradientImage.y1);
        gradientImage.colorStops.forEach(function(colorStop) {
            gradient.addColorStop(colorStop.stop, colorStop.color.toString());
        });
        this.rectangle(bounds.left, bounds.top, bounds.width, bounds.height, gradient);
    }
};

CanvasRenderer.prototype.resizeImage = function(imageContainer, size) {
    var image = imageContainer.image;
    if(image.width === size.width && image.height === size.height) {
        return image;
    }

    var ctx, canvas = document.createElement('canvas');
    canvas.width = size.width;
    canvas.height = size.height;
    ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height );
    return canvas;
};

function hasEntries(array) {
    return array.length > 0;
}

module.exports = CanvasRenderer;

},{"../lineargradientcontainer":12,"../log":13,"../renderer":19}],21:[function(_dereq_,module,exports){
var NodeContainer = _dereq_('./nodecontainer');

function StackingContext(hasOwnStacking, opacity, element, parent) {
    NodeContainer.call(this, element, parent);
    this.ownStacking = hasOwnStacking;
    this.contexts = [];
    this.children = [];
    this.opacity = (this.parent ? this.parent.stack.opacity : 1) * opacity;
}

StackingContext.prototype = Object.create(NodeContainer.prototype);

StackingContext.prototype.getParentStack = function(context) {
    var parentStack = (this.parent) ? this.parent.stack : null;
    return parentStack ? (parentStack.ownStacking ? parentStack : parentStack.getParentStack(context)) : context.stack;
};

module.exports = StackingContext;

},{"./nodecontainer":14}],22:[function(_dereq_,module,exports){
function Support(document) {
    this.rangeBounds = this.testRangeBounds(document);
    this.cors = this.testCORS();
    this.svg = this.testSVG();
}

Support.prototype.testRangeBounds = function(document) {
    var range, testElement, rangeBounds, rangeHeight, support = false;

    if (document.createRange) {
        range = document.createRange();
        if (range.getBoundingClientRect) {
            testElement = document.createElement('boundtest');
            testElement.style.height = "123px";
            testElement.style.display = "block";
            document.body.appendChild(testElement);

            range.selectNode(testElement);
            rangeBounds = range.getBoundingClientRect();
            rangeHeight = rangeBounds.height;

            if (rangeHeight === 123) {
                support = true;
            }
            document.body.removeChild(testElement);
        }
    }

    return support;
};

Support.prototype.testCORS = function() {
    return typeof((new Image()).crossOrigin) !== "undefined";
};

Support.prototype.testSVG = function() {
    var img = new Image();
    var canvas = document.createElement("canvas");
    var ctx =  canvas.getContext("2d");
    img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";

    try {
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL();
    } catch(e) {
        return false;
    }
    return true;
};

module.exports = Support;

},{}],23:[function(_dereq_,module,exports){
var XHR = _dereq_('./xhr');
var decode64 = _dereq_('./utils').decode64;

function SVGContainer(src) {
    this.src = src;
    this.image = null;
    var self = this;

    this.promise = this.hasFabric().then(function() {
        return (self.isInline(src) ? Promise.resolve(self.inlineFormatting(src)) : XHR(src));
    }).then(function(svg) {
        return new Promise(function(resolve) {
            window.html2canvas.svg.fabric.loadSVGFromString(svg, self.createCanvas.call(self, resolve));
        });
    });
}

SVGContainer.prototype.hasFabric = function() {
    return !window.html2canvas.svg || !window.html2canvas.svg.fabric ? Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg")) : Promise.resolve();
};

SVGContainer.prototype.inlineFormatting = function(src) {
    return (/^data:image\/svg\+xml;base64,/.test(src)) ? this.decode64(this.removeContentType(src)) : this.removeContentType(src);
};

SVGContainer.prototype.removeContentType = function(src) {
    return src.replace(/^data:image\/svg\+xml(;base64)?,/,'');
};

SVGContainer.prototype.isInline = function(src) {
    return (/^data:image\/svg\+xml/i.test(src));
};

SVGContainer.prototype.createCanvas = function(resolve) {
    var self = this;
    return function (objects, options) {
        var canvas = new window.html2canvas.svg.fabric.StaticCanvas('c');
        self.image = canvas.lowerCanvasEl;
        canvas
            .setWidth(options.width)
            .setHeight(options.height)
            .add(window.html2canvas.svg.fabric.util.groupSVGElements(objects, options))
            .renderAll();
        resolve(canvas.lowerCanvasEl);
    };
};

SVGContainer.prototype.decode64 = function(str) {
    return (typeof(window.atob) === "function") ? window.atob(str) : decode64(str);
};

module.exports = SVGContainer;

},{"./utils":26,"./xhr":28}],24:[function(_dereq_,module,exports){
var SVGContainer = _dereq_('./svgcontainer');

function SVGNodeContainer(node, _native) {
    this.src = node;
    this.image = null;
    var self = this;

    this.promise = _native ? new Promise(function(resolve, reject) {
        self.image = new Image();
        self.image.onload = resolve;
        self.image.onerror = reject;
        self.image.src = "data:image/svg+xml," + (new XMLSerializer()).serializeToString(node);
        if (self.image.complete === true) {
            resolve(self.image);
        }
    }) : this.hasFabric().then(function() {
        return new Promise(function(resolve) {
            window.html2canvas.svg.fabric.parseSVGDocument(node, self.createCanvas.call(self, resolve));
        });
    });
}

SVGNodeContainer.prototype = Object.create(SVGContainer.prototype);

module.exports = SVGNodeContainer;

},{"./svgcontainer":23}],25:[function(_dereq_,module,exports){
var NodeContainer = _dereq_('./nodecontainer');

function TextContainer(node, parent) {
    NodeContainer.call(this, node, parent);
}

TextContainer.prototype = Object.create(NodeContainer.prototype);

TextContainer.prototype.applyTextTransform = function() {
    this.node.data = this.transform(this.parent.css("textTransform"));
};

TextContainer.prototype.transform = function(transform) {
    var text = this.node.data;
    switch(transform){
        case "lowercase":
            return text.toLowerCase();
        case "capitalize":
            return text.replace(/(^|\s|:|-|\(|\))([a-z])/g, capitalize);
        case "uppercase":
            return text.toUpperCase();
        default:
            return text;
    }
};

function capitalize(m, p1, p2) {
    if (m.length > 0) {
        return p1 + p2.toUpperCase();
    }
}

module.exports = TextContainer;

},{"./nodecontainer":14}],26:[function(_dereq_,module,exports){
exports.smallImage = function smallImage() {
    return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
};

exports.bind = function(callback, context) {
    return function() {
        return callback.apply(context, arguments);
    };
};

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

exports.decode64 = function(base64) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var len = base64.length, i, encoded1, encoded2, encoded3, encoded4, byte1, byte2, byte3;

    var output = "";

    for (i = 0; i < len; i+=4) {
        encoded1 = chars.indexOf(base64[i]);
        encoded2 = chars.indexOf(base64[i+1]);
        encoded3 = chars.indexOf(base64[i+2]);
        encoded4 = chars.indexOf(base64[i+3]);

        byte1 = (encoded1 << 2) | (encoded2 >> 4);
        byte2 = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        byte3 = ((encoded3 & 3) << 6) | encoded4;
        if (encoded3 === 64) {
            output += String.fromCharCode(byte1);
        } else if (encoded4 === 64 || encoded4 === -1) {
            output += String.fromCharCode(byte1, byte2);
        } else{
            output += String.fromCharCode(byte1, byte2, byte3);
        }
    }

    return output;
};

exports.getBounds = function(node) {
    if (node.getBoundingClientRect) {
        var clientRect = node.getBoundingClientRect();
        var width = node.offsetWidth == null ? clientRect.width : node.offsetWidth;
        return {
            top: clientRect.top,
            bottom: clientRect.bottom || (clientRect.top + clientRect.height),
            right: clientRect.left + width,
            left: clientRect.left,
            width:  width,
            height: node.offsetHeight == null ? clientRect.height : node.offsetHeight
        };
    }
    return {};
};

exports.offsetBounds = function(node) {
    var parent = node.offsetParent ? exports.offsetBounds(node.offsetParent) : {top: 0, left: 0};

    return {
        top: node.offsetTop + parent.top,
        bottom: node.offsetTop + node.offsetHeight + parent.top,
        right: node.offsetLeft + parent.left + node.offsetWidth,
        left: node.offsetLeft + parent.left,
        width: node.offsetWidth,
        height: node.offsetHeight
    };
};

exports.parseBackgrounds = function(backgroundImage) {
    var whitespace = ' \r\n\t',
        method, definition, prefix, prefix_i, block, results = [],
        mode = 0, numParen = 0, quote, args;
    var appendResult = function() {
        if(method) {
            if (definition.substr(0, 1) === '"') {
                definition = definition.substr(1, definition.length - 2);
            }
            if (definition) {
                args.push(definition);
            }
            if (method.substr(0, 1) === '-' && (prefix_i = method.indexOf('-', 1 ) + 1) > 0) {
                prefix = method.substr(0, prefix_i);
                method = method.substr(prefix_i);
            }
            results.push({
                prefix: prefix,
                method: method.toLowerCase(),
                value: block,
                args: args,
                image: null
            });
        }
        args = [];
        method = prefix = definition = block = '';
    };
    args = [];
    method = prefix = definition = block = '';
    backgroundImage.split("").forEach(function(c) {
        if (mode === 0 && whitespace.indexOf(c) > -1) {
            return;
        }
        switch(c) {
        case '"':
            if(!quote) {
                quote = c;
            } else if(quote === c) {
                quote = null;
            }
            break;
        case '(':
            if(quote) {
                break;
            } else if(mode === 0) {
                mode = 1;
                block += c;
                return;
            } else {
                numParen++;
            }
            break;
        case ')':
            if (quote) {
                break;
            } else if(mode === 1) {
                if(numParen === 0) {
                    mode = 0;
                    block += c;
                    appendResult();
                    return;
                } else {
                    numParen--;
                }
            }
            break;

        case ',':
            if (quote) {
                break;
            } else if(mode === 0) {
                appendResult();
                return;
            } else if (mode === 1) {
                if (numParen === 0 && !method.match(/^url$/i)) {
                    args.push(definition);
                    definition = '';
                    block += c;
                    return;
                }
            }
            break;
        }

        block += c;
        if (mode === 0) {
            method += c;
        } else {
            definition += c;
        }
    });

    appendResult();
    return results;
};

},{}],27:[function(_dereq_,module,exports){
var GradientContainer = _dereq_('./gradientcontainer');

function WebkitGradientContainer(imageData) {
    GradientContainer.apply(this, arguments);
    this.type = imageData.args[0] === "linear" ? GradientContainer.TYPES.LINEAR : GradientContainer.TYPES.RADIAL;
}

WebkitGradientContainer.prototype = Object.create(GradientContainer.prototype);

module.exports = WebkitGradientContainer;

},{"./gradientcontainer":9}],28:[function(_dereq_,module,exports){
function XHR(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(xhr.statusText));
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}

module.exports = XHR;

},{}]},{},[4])(4)
});

// Generated by CoffeeScript 1.4.0

/*
# PNG.js
# Copyright (c) 2011 Devon Govett
# MIT LICENSE
# 
# 
*/


(function(global) {
  var PNG;

  PNG = (function() {
    var APNG_BLEND_OP_OVER, APNG_BLEND_OP_SOURCE, APNG_DISPOSE_OP_BACKGROUND, APNG_DISPOSE_OP_NONE, APNG_DISPOSE_OP_PREVIOUS, makeImage, scratchCanvas, scratchCtx;

    PNG.load = function(url, canvas, callback) {
      var xhr,
        _this = this;
      if (typeof canvas === 'function') {
        callback = canvas;
      }
      xhr = new XMLHttpRequest;
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = function() {
        var data, png;
        data = new Uint8Array(xhr.response || xhr.mozResponseArrayBuffer);
        png = new PNG(data);
        if (typeof (canvas != null ? canvas.getContext : void 0) === 'function') {
          png.render(canvas);
        }
        return typeof callback === "function" ? callback(png) : void 0;
      };
      return xhr.send(null);
    };

    APNG_DISPOSE_OP_NONE = 0;

    APNG_DISPOSE_OP_BACKGROUND = 1;

    APNG_DISPOSE_OP_PREVIOUS = 2;

    APNG_BLEND_OP_SOURCE = 0;

    APNG_BLEND_OP_OVER = 1;

    function PNG(data) {
      var chunkSize, colors, palLen, delayDen, delayNum, frame, i, index, key, section, palShort, text, _i, _j, _ref;
      this.data = data;
      this.pos = 8;
      this.palette = [];
      this.imgData = [];
      this.transparency = {};
      this.animation = null;
      this.text = {};
      frame = null;
      while (true) {
        chunkSize = this.readUInt32();
        section = ((function() {
          var _i, _results;
          _results = [];
          for (i = _i = 0; _i < 4; i = ++_i) {
            _results.push(String.fromCharCode(this.data[this.pos++]));
          }
          return _results;
        }).call(this)).join('');
        switch (section) {
          case 'IHDR':
            this.width = this.readUInt32();
            this.height = this.readUInt32();
            this.bits = this.data[this.pos++];
            this.colorType = this.data[this.pos++];
            this.compressionMethod = this.data[this.pos++];
            this.filterMethod = this.data[this.pos++];
            this.interlaceMethod = this.data[this.pos++];
            break;
          case 'acTL':
            this.animation = {
              numFrames: this.readUInt32(),
              numPlays: this.readUInt32() || Infinity,
              frames: []
            };
            break;
          case 'PLTE':
            this.palette = this.read(chunkSize);
            break;
          case 'fcTL':
            if (frame) {
              this.animation.frames.push(frame);
            }
            this.pos += 4;
            frame = {
              width: this.readUInt32(),
              height: this.readUInt32(),
              xOffset: this.readUInt32(),
              yOffset: this.readUInt32()
            };
            delayNum = this.readUInt16();
            delayDen = this.readUInt16() || 100;
            frame.delay = 1000 * delayNum / delayDen;
            frame.disposeOp = this.data[this.pos++];
            frame.blendOp = this.data[this.pos++];
            frame.data = [];
            break;
          case 'IDAT':
          case 'fdAT':
            if (section === 'fdAT') {
              this.pos += 4;
              chunkSize -= 4;
            }
            data = (frame != null ? frame.data : void 0) || this.imgData;
            for (i = _i = 0; 0 <= chunkSize ? _i < chunkSize : _i > chunkSize; i = 0 <= chunkSize ? ++_i : --_i) {
              data.push(this.data[this.pos++]);
            }
            break;
          case 'tRNS':
            this.transparency = {};
            switch (this.colorType) {
              case 3:
            	palLen = this.palette.length/3;
                this.transparency.indexed = this.read(chunkSize);
                if(this.transparency.indexed.length > palLen)
                	throw new Error('More transparent colors than palette size');
                /*
                 * According to the PNG spec trns should be increased to the same size as palette if shorter
                 */
                //palShort = 255 - this.transparency.indexed.length;
                palShort = palLen - this.transparency.indexed.length;
                if (palShort > 0) {
                  for (i = _j = 0; 0 <= palShort ? _j < palShort : _j > palShort; i = 0 <= palShort ? ++_j : --_j) {
                    this.transparency.indexed.push(255);
                  }
                }
                break;
              case 0:
                this.transparency.grayscale = this.read(chunkSize)[0];
                break;
              case 2:
                this.transparency.rgb = this.read(chunkSize);
            }
            break;
          case 'tEXt':
            text = this.read(chunkSize);
            index = text.indexOf(0);
            key = String.fromCharCode.apply(String, text.slice(0, index));
            this.text[key] = String.fromCharCode.apply(String, text.slice(index + 1));
            break;
          case 'IEND':
            if (frame) {
              this.animation.frames.push(frame);
            }
            this.colors = (function() {
              switch (this.colorType) {
                case 0:
                case 3:
                case 4:
                  return 1;
                case 2:
                case 6:
                  return 3;
              }
            }).call(this);
            this.hasAlphaChannel = (_ref = this.colorType) === 4 || _ref === 6;
            colors = this.colors + (this.hasAlphaChannel ? 1 : 0);
            this.pixelBitlength = this.bits * colors;
            this.colorSpace = (function() {
              switch (this.colors) {
                case 1:
                  return 'DeviceGray';
                case 3:
                  return 'DeviceRGB';
              }
            }).call(this);
            this.imgData = new Uint8Array(this.imgData);
            return;
          default:
            this.pos += chunkSize;
        }
        this.pos += 4;
        if (this.pos > this.data.length) {
          throw new Error("Incomplete or corrupt PNG file");
        }
      }
      return;
    }

    PNG.prototype.read = function(bytes) {
      var i, _i, _results;
      _results = [];
      for (i = _i = 0; 0 <= bytes ? _i < bytes : _i > bytes; i = 0 <= bytes ? ++_i : --_i) {
        _results.push(this.data[this.pos++]);
      }
      return _results;
    };

    PNG.prototype.readUInt32 = function() {
      var b1, b2, b3, b4;
      b1 = this.data[this.pos++] << 24;
      b2 = this.data[this.pos++] << 16;
      b3 = this.data[this.pos++] << 8;
      b4 = this.data[this.pos++];
      return b1 | b2 | b3 | b4;
    };

    PNG.prototype.readUInt16 = function() {
      var b1, b2;
      b1 = this.data[this.pos++] << 8;
      b2 = this.data[this.pos++];
      return b1 | b2;
    };

    PNG.prototype.decodePixels = function(data) {
      var abyte, c, col, i, left, length, p, pa, paeth, pb, pc, pixelBytes, pixels, pos, row, scanlineLength, upper, upperLeft, _i, _j, _k, _l, _m;
      if (data == null) {
        data = this.imgData;
      }
      if (data.length === 0) {
        return new Uint8Array(0);
      }
      data = new FlateStream(data);
      data = data.getBytes();
      pixelBytes = this.pixelBitlength / 8;
      scanlineLength = pixelBytes * this.width;
      pixels = new Uint8Array(scanlineLength * this.height);
      length = data.length;
      row = 0;
      pos = 0;
      c = 0;
      while (pos < length) {
        switch (data[pos++]) {
          case 0:
            for (i = _i = 0; _i < scanlineLength; i = _i += 1) {
              pixels[c++] = data[pos++];
            }
            break;
          case 1:
            for (i = _j = 0; _j < scanlineLength; i = _j += 1) {
              abyte = data[pos++];
              left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
              pixels[c++] = (abyte + left) % 256;
            }
            break;
          case 2:
            for (i = _k = 0; _k < scanlineLength; i = _k += 1) {
              abyte = data[pos++];
              col = (i - (i % pixelBytes)) / pixelBytes;
              upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
              pixels[c++] = (upper + abyte) % 256;
            }
            break;
          case 3:
            for (i = _l = 0; _l < scanlineLength; i = _l += 1) {
              abyte = data[pos++];
              col = (i - (i % pixelBytes)) / pixelBytes;
              left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
              upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
              pixels[c++] = (abyte + Math.floor((left + upper) / 2)) % 256;
            }
            break;
          case 4:
            for (i = _m = 0; _m < scanlineLength; i = _m += 1) {
              abyte = data[pos++];
              col = (i - (i % pixelBytes)) / pixelBytes;
              left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
              if (row === 0) {
                upper = upperLeft = 0;
              } else {
                upper = pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
                upperLeft = col && pixels[(row - 1) * scanlineLength + (col - 1) * pixelBytes + (i % pixelBytes)];
              }
              p = left + upper - upperLeft;
              pa = Math.abs(p - left);
              pb = Math.abs(p - upper);
              pc = Math.abs(p - upperLeft);
              if (pa <= pb && pa <= pc) {
                paeth = left;
              } else if (pb <= pc) {
                paeth = upper;
              } else {
                paeth = upperLeft;
              }
              pixels[c++] = (abyte + paeth) % 256;
            }
            break;
          default:
            throw new Error("Invalid filter algorithm: " + data[pos - 1]);
        }
        row++;
      }
      return pixels;
    };

    PNG.prototype.decodePalette = function() {
      var c, i, length, palette, pos, ret, transparency, _i, _ref, _ref1;
      palette = this.palette;
      transparency = this.transparency.indexed || [];
      ret = new Uint8Array((transparency.length || 0) + palette.length);
      pos = 0;
      length = palette.length;
      c = 0;
      for (i = _i = 0, _ref = palette.length; _i < _ref; i = _i += 3) {
        ret[pos++] = palette[i];
        ret[pos++] = palette[i + 1];
        ret[pos++] = palette[i + 2];
        ret[pos++] = (_ref1 = transparency[c++]) != null ? _ref1 : 255;
      }
      return ret;
    };

    PNG.prototype.copyToImageData = function(imageData, pixels) {
      var alpha, colors, data, i, input, j, k, length, palette, v, _ref;
      colors = this.colors;
      palette = null;
      alpha = this.hasAlphaChannel;
      if (this.palette.length) {
        palette = (_ref = this._decodedPalette) != null ? _ref : this._decodedPalette = this.decodePalette();
        colors = 4;
        alpha = true;
      }
      data = imageData.data || imageData;
      length = data.length;
      input = palette || pixels;
      i = j = 0;
      if (colors === 1) {
        while (i < length) {
          k = palette ? pixels[i / 4] * 4 : j;
          v = input[k++];
          data[i++] = v;
          data[i++] = v;
          data[i++] = v;
          data[i++] = alpha ? input[k++] : 255;
          j = k;
        }
      } else {
        while (i < length) {
          k = palette ? pixels[i / 4] * 4 : j;
          data[i++] = input[k++];
          data[i++] = input[k++];
          data[i++] = input[k++];
          data[i++] = alpha ? input[k++] : 255;
          j = k;
        }
      }
    };

    PNG.prototype.decode = function() {
      var ret;
      ret = new Uint8Array(this.width * this.height * 4);
      this.copyToImageData(ret, this.decodePixels());
      return ret;
    };

    try {
        scratchCanvas = global.document.createElement('canvas');
        scratchCtx = scratchCanvas.getContext('2d');
    } catch(e) {
        return -1;
    }

    makeImage = function(imageData) {
      var img;
      scratchCtx.width = imageData.width;
      scratchCtx.height = imageData.height;
      scratchCtx.clearRect(0, 0, imageData.width, imageData.height);
      scratchCtx.putImageData(imageData, 0, 0);
      img = new Image;
      img.src = scratchCanvas.toDataURL();
      return img;
    };

    PNG.prototype.decodeFrames = function(ctx) {
      var frame, i, imageData, pixels, _i, _len, _ref, _results;
      if (!this.animation) {
        return;
      }
      _ref = this.animation.frames;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        frame = _ref[i];
        imageData = ctx.createImageData(frame.width, frame.height);
        pixels = this.decodePixels(new Uint8Array(frame.data));
        this.copyToImageData(imageData, pixels);
        frame.imageData = imageData;
        _results.push(frame.image = makeImage(imageData));
      }
      return _results;
    };

    PNG.prototype.renderFrame = function(ctx, number) {
      var frame, frames, prev;
      frames = this.animation.frames;
      frame = frames[number];
      prev = frames[number - 1];
      if (number === 0) {
        ctx.clearRect(0, 0, this.width, this.height);
      }
      if ((prev != null ? prev.disposeOp : void 0) === APNG_DISPOSE_OP_BACKGROUND) {
        ctx.clearRect(prev.xOffset, prev.yOffset, prev.width, prev.height);
      } else if ((prev != null ? prev.disposeOp : void 0) === APNG_DISPOSE_OP_PREVIOUS) {
        ctx.putImageData(prev.imageData, prev.xOffset, prev.yOffset);
      }
      if (frame.blendOp === APNG_BLEND_OP_SOURCE) {
        ctx.clearRect(frame.xOffset, frame.yOffset, frame.width, frame.height);
      }
      return ctx.drawImage(frame.image, frame.xOffset, frame.yOffset);
    };

    PNG.prototype.animate = function(ctx) {
      var doFrame, frameNumber, frames, numFrames, numPlays, _ref,
        _this = this;
      frameNumber = 0;
      _ref = this.animation, numFrames = _ref.numFrames, frames = _ref.frames, numPlays = _ref.numPlays;
      return (doFrame = function() {
        var f, frame;
        f = frameNumber++ % numFrames;
        frame = frames[f];
        _this.renderFrame(ctx, f);
        if (numFrames > 1 && frameNumber / numFrames < numPlays) {
          return _this.animation._timeout = setTimeout(doFrame, frame.delay);
        }
      })();
    };

    PNG.prototype.stopAnimation = function() {
      var _ref;
      return clearTimeout((_ref = this.animation) != null ? _ref._timeout : void 0);
    };

    PNG.prototype.render = function(canvas) {
      var ctx, data;
      if (canvas._png) {
        canvas._png.stopAnimation();
      }
      canvas._png = this;
      canvas.width = this.width;
      canvas.height = this.height;
      ctx = canvas.getContext("2d");
      if (this.animation) {
        this.decodeFrames(ctx);
        return this.animate(ctx);
      } else {
        data = ctx.createImageData(this.width, this.height);
        this.copyToImageData(data, this.decodePixels());
        return ctx.putImageData(data, 0, 0);
      }
    };

    return PNG;

  })();

  global.PNG = PNG;

})(typeof window !== "undefined" && window || undefined);

/*
 * Extracted from pdf.js
 * https://github.com/andreasgal/pdf.js
 *
 * Copyright (c) 2011 Mozilla Foundation
 *
 * Contributors: Andreas Gal <gal@mozilla.com>
 *               Chris G Jones <cjones@mozilla.com>
 *               Shaon Barman <shaon.barman@gmail.com>
 *               Vivien Nicolas <21@vingtetun.org>
 *               Justin D'Arcangelo <justindarc@gmail.com>
 *               Yury Delendik
 *
 * 
 */

var DecodeStream = (function() {
  function constructor() {
    this.pos = 0;
    this.bufferLength = 0;
    this.eof = false;
    this.buffer = null;
  }

  constructor.prototype = {
    ensureBuffer: function decodestream_ensureBuffer(requested) {
      var buffer = this.buffer;
      var current = buffer ? buffer.byteLength : 0;
      if (requested < current)
        return buffer;
      var size = 512;
      while (size < requested)
        size <<= 1;
      var buffer2 = new Uint8Array(size);
      for (var i = 0; i < current; ++i)
        buffer2[i] = buffer[i];
      return this.buffer = buffer2;
    },
    getByte: function decodestream_getByte() {
      var pos = this.pos;
      while (this.bufferLength <= pos) {
        if (this.eof)
          return null;
        this.readBlock();
      }
      return this.buffer[this.pos++];
    },
    getBytes: function decodestream_getBytes(length) {
      var pos = this.pos;

      if (length) {
        this.ensureBuffer(pos + length);
        var end = pos + length;

        while (!this.eof && this.bufferLength < end)
          this.readBlock();

        var bufEnd = this.bufferLength;
        if (end > bufEnd)
          end = bufEnd;
      } else {
        while (!this.eof)
          this.readBlock();

        var end = this.bufferLength;
      }

      this.pos = end;
      return this.buffer.subarray(pos, end);
    },
    lookChar: function decodestream_lookChar() {
      var pos = this.pos;
      while (this.bufferLength <= pos) {
        if (this.eof)
          return null;
        this.readBlock();
      }
      return String.fromCharCode(this.buffer[this.pos]);
    },
    getChar: function decodestream_getChar() {
      var pos = this.pos;
      while (this.bufferLength <= pos) {
        if (this.eof)
          return null;
        this.readBlock();
      }
      return String.fromCharCode(this.buffer[this.pos++]);
    },
    makeSubStream: function decodestream_makeSubstream(start, length, dict) {
      var end = start + length;
      while (this.bufferLength <= end && !this.eof)
        this.readBlock();
      return new Stream(this.buffer, start, length, dict);
    },
    skip: function decodestream_skip(n) {
      if (!n)
        n = 1;
      this.pos += n;
    },
    reset: function decodestream_reset() {
      this.pos = 0;
    }
  };

  return constructor;
})();

var FlateStream = (function() {
  if (typeof Uint32Array === 'undefined') {
    return undefined;
  }
  var codeLenCodeMap = new Uint32Array([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15
  ]);

  var lengthDecode = new Uint32Array([
    0x00003, 0x00004, 0x00005, 0x00006, 0x00007, 0x00008, 0x00009, 0x0000a,
    0x1000b, 0x1000d, 0x1000f, 0x10011, 0x20013, 0x20017, 0x2001b, 0x2001f,
    0x30023, 0x3002b, 0x30033, 0x3003b, 0x40043, 0x40053, 0x40063, 0x40073,
    0x50083, 0x500a3, 0x500c3, 0x500e3, 0x00102, 0x00102, 0x00102
  ]);

  var distDecode = new Uint32Array([
    0x00001, 0x00002, 0x00003, 0x00004, 0x10005, 0x10007, 0x20009, 0x2000d,
    0x30011, 0x30019, 0x40021, 0x40031, 0x50041, 0x50061, 0x60081, 0x600c1,
    0x70101, 0x70181, 0x80201, 0x80301, 0x90401, 0x90601, 0xa0801, 0xa0c01,
    0xb1001, 0xb1801, 0xc2001, 0xc3001, 0xd4001, 0xd6001
  ]);

  var fixedLitCodeTab = [new Uint32Array([
    0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c0,
    0x70108, 0x80060, 0x80020, 0x900a0, 0x80000, 0x80080, 0x80040, 0x900e0,
    0x70104, 0x80058, 0x80018, 0x90090, 0x70114, 0x80078, 0x80038, 0x900d0,
    0x7010c, 0x80068, 0x80028, 0x900b0, 0x80008, 0x80088, 0x80048, 0x900f0,
    0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c8,
    0x7010a, 0x80064, 0x80024, 0x900a8, 0x80004, 0x80084, 0x80044, 0x900e8,
    0x70106, 0x8005c, 0x8001c, 0x90098, 0x70116, 0x8007c, 0x8003c, 0x900d8,
    0x7010e, 0x8006c, 0x8002c, 0x900b8, 0x8000c, 0x8008c, 0x8004c, 0x900f8,
    0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c4,
    0x70109, 0x80062, 0x80022, 0x900a4, 0x80002, 0x80082, 0x80042, 0x900e4,
    0x70105, 0x8005a, 0x8001a, 0x90094, 0x70115, 0x8007a, 0x8003a, 0x900d4,
    0x7010d, 0x8006a, 0x8002a, 0x900b4, 0x8000a, 0x8008a, 0x8004a, 0x900f4,
    0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cc,
    0x7010b, 0x80066, 0x80026, 0x900ac, 0x80006, 0x80086, 0x80046, 0x900ec,
    0x70107, 0x8005e, 0x8001e, 0x9009c, 0x70117, 0x8007e, 0x8003e, 0x900dc,
    0x7010f, 0x8006e, 0x8002e, 0x900bc, 0x8000e, 0x8008e, 0x8004e, 0x900fc,
    0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c2,
    0x70108, 0x80061, 0x80021, 0x900a2, 0x80001, 0x80081, 0x80041, 0x900e2,
    0x70104, 0x80059, 0x80019, 0x90092, 0x70114, 0x80079, 0x80039, 0x900d2,
    0x7010c, 0x80069, 0x80029, 0x900b2, 0x80009, 0x80089, 0x80049, 0x900f2,
    0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900ca,
    0x7010a, 0x80065, 0x80025, 0x900aa, 0x80005, 0x80085, 0x80045, 0x900ea,
    0x70106, 0x8005d, 0x8001d, 0x9009a, 0x70116, 0x8007d, 0x8003d, 0x900da,
    0x7010e, 0x8006d, 0x8002d, 0x900ba, 0x8000d, 0x8008d, 0x8004d, 0x900fa,
    0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c6,
    0x70109, 0x80063, 0x80023, 0x900a6, 0x80003, 0x80083, 0x80043, 0x900e6,
    0x70105, 0x8005b, 0x8001b, 0x90096, 0x70115, 0x8007b, 0x8003b, 0x900d6,
    0x7010d, 0x8006b, 0x8002b, 0x900b6, 0x8000b, 0x8008b, 0x8004b, 0x900f6,
    0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900ce,
    0x7010b, 0x80067, 0x80027, 0x900ae, 0x80007, 0x80087, 0x80047, 0x900ee,
    0x70107, 0x8005f, 0x8001f, 0x9009e, 0x70117, 0x8007f, 0x8003f, 0x900de,
    0x7010f, 0x8006f, 0x8002f, 0x900be, 0x8000f, 0x8008f, 0x8004f, 0x900fe,
    0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c1,
    0x70108, 0x80060, 0x80020, 0x900a1, 0x80000, 0x80080, 0x80040, 0x900e1,
    0x70104, 0x80058, 0x80018, 0x90091, 0x70114, 0x80078, 0x80038, 0x900d1,
    0x7010c, 0x80068, 0x80028, 0x900b1, 0x80008, 0x80088, 0x80048, 0x900f1,
    0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c9,
    0x7010a, 0x80064, 0x80024, 0x900a9, 0x80004, 0x80084, 0x80044, 0x900e9,
    0x70106, 0x8005c, 0x8001c, 0x90099, 0x70116, 0x8007c, 0x8003c, 0x900d9,
    0x7010e, 0x8006c, 0x8002c, 0x900b9, 0x8000c, 0x8008c, 0x8004c, 0x900f9,
    0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c5,
    0x70109, 0x80062, 0x80022, 0x900a5, 0x80002, 0x80082, 0x80042, 0x900e5,
    0x70105, 0x8005a, 0x8001a, 0x90095, 0x70115, 0x8007a, 0x8003a, 0x900d5,
    0x7010d, 0x8006a, 0x8002a, 0x900b5, 0x8000a, 0x8008a, 0x8004a, 0x900f5,
    0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cd,
    0x7010b, 0x80066, 0x80026, 0x900ad, 0x80006, 0x80086, 0x80046, 0x900ed,
    0x70107, 0x8005e, 0x8001e, 0x9009d, 0x70117, 0x8007e, 0x8003e, 0x900dd,
    0x7010f, 0x8006e, 0x8002e, 0x900bd, 0x8000e, 0x8008e, 0x8004e, 0x900fd,
    0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c3,
    0x70108, 0x80061, 0x80021, 0x900a3, 0x80001, 0x80081, 0x80041, 0x900e3,
    0x70104, 0x80059, 0x80019, 0x90093, 0x70114, 0x80079, 0x80039, 0x900d3,
    0x7010c, 0x80069, 0x80029, 0x900b3, 0x80009, 0x80089, 0x80049, 0x900f3,
    0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900cb,
    0x7010a, 0x80065, 0x80025, 0x900ab, 0x80005, 0x80085, 0x80045, 0x900eb,
    0x70106, 0x8005d, 0x8001d, 0x9009b, 0x70116, 0x8007d, 0x8003d, 0x900db,
    0x7010e, 0x8006d, 0x8002d, 0x900bb, 0x8000d, 0x8008d, 0x8004d, 0x900fb,
    0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c7,
    0x70109, 0x80063, 0x80023, 0x900a7, 0x80003, 0x80083, 0x80043, 0x900e7,
    0x70105, 0x8005b, 0x8001b, 0x90097, 0x70115, 0x8007b, 0x8003b, 0x900d7,
    0x7010d, 0x8006b, 0x8002b, 0x900b7, 0x8000b, 0x8008b, 0x8004b, 0x900f7,
    0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900cf,
    0x7010b, 0x80067, 0x80027, 0x900af, 0x80007, 0x80087, 0x80047, 0x900ef,
    0x70107, 0x8005f, 0x8001f, 0x9009f, 0x70117, 0x8007f, 0x8003f, 0x900df,
    0x7010f, 0x8006f, 0x8002f, 0x900bf, 0x8000f, 0x8008f, 0x8004f, 0x900ff
  ]), 9];

  var fixedDistCodeTab = [new Uint32Array([
    0x50000, 0x50010, 0x50008, 0x50018, 0x50004, 0x50014, 0x5000c, 0x5001c,
    0x50002, 0x50012, 0x5000a, 0x5001a, 0x50006, 0x50016, 0x5000e, 0x00000,
    0x50001, 0x50011, 0x50009, 0x50019, 0x50005, 0x50015, 0x5000d, 0x5001d,
    0x50003, 0x50013, 0x5000b, 0x5001b, 0x50007, 0x50017, 0x5000f, 0x00000
  ]), 5];
  
  function error(e) {
      throw new Error(e)
  }

  function constructor(bytes) {
    //var bytes = stream.getBytes();
    var bytesPos = 0;

    var cmf = bytes[bytesPos++];
    var flg = bytes[bytesPos++];
    if (cmf == -1 || flg == -1)
      error('Invalid header in flate stream');
    if ((cmf & 0x0f) != 0x08)
      error('Unknown compression method in flate stream');
    if ((((cmf << 8) + flg) % 31) != 0)
      error('Bad FCHECK in flate stream');
    if (flg & 0x20)
      error('FDICT bit set in flate stream');

    this.bytes = bytes;
    this.bytesPos = bytesPos;

    this.codeSize = 0;
    this.codeBuf = 0;

    DecodeStream.call(this);
  }

  constructor.prototype = Object.create(DecodeStream.prototype);

  constructor.prototype.getBits = function(bits) {
    var codeSize = this.codeSize;
    var codeBuf = this.codeBuf;
    var bytes = this.bytes;
    var bytesPos = this.bytesPos;

    var b;
    while (codeSize < bits) {
      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad encoding in flate stream');
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    b = codeBuf & ((1 << bits) - 1);
    this.codeBuf = codeBuf >> bits;
    this.codeSize = codeSize -= bits;
    this.bytesPos = bytesPos;
    return b;
  };

  constructor.prototype.getCode = function(table) {
    var codes = table[0];
    var maxLen = table[1];
    var codeSize = this.codeSize;
    var codeBuf = this.codeBuf;
    var bytes = this.bytes;
    var bytesPos = this.bytesPos;

    while (codeSize < maxLen) {
      var b;
      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad encoding in flate stream');
      codeBuf |= (b << codeSize);
      codeSize += 8;
    }
    var code = codes[codeBuf & ((1 << maxLen) - 1)];
    var codeLen = code >> 16;
    var codeVal = code & 0xffff;
    if (codeSize == 0 || codeSize < codeLen || codeLen == 0)
      error('Bad encoding in flate stream');
    this.codeBuf = (codeBuf >> codeLen);
    this.codeSize = (codeSize - codeLen);
    this.bytesPos = bytesPos;
    return codeVal;
  };

  constructor.prototype.generateHuffmanTable = function(lengths) {
    var n = lengths.length;

    // find max code length
    var maxLen = 0;
    for (var i = 0; i < n; ++i) {
      if (lengths[i] > maxLen)
        maxLen = lengths[i];
    }

    // build the table
    var size = 1 << maxLen;
    var codes = new Uint32Array(size);
    for (var len = 1, code = 0, skip = 2;
         len <= maxLen;
         ++len, code <<= 1, skip <<= 1) {
      for (var val = 0; val < n; ++val) {
        if (lengths[val] == len) {
          // bit-reverse the code
          var code2 = 0;
          var t = code;
          for (var i = 0; i < len; ++i) {
            code2 = (code2 << 1) | (t & 1);
            t >>= 1;
          }

          // fill the table entries
          for (var i = code2; i < size; i += skip)
            codes[i] = (len << 16) | val;

          ++code;
        }
      }
    }

    return [codes, maxLen];
  };

  constructor.prototype.readBlock = function() {
    function repeat(stream, array, len, offset, what) {
      var repeat = stream.getBits(len) + offset;
      while (repeat-- > 0)
        array[i++] = what;
    }

    // read block header
    var hdr = this.getBits(3);
    if (hdr & 1)
      this.eof = true;
    hdr >>= 1;

    if (hdr == 0) { // uncompressed block
      var bytes = this.bytes;
      var bytesPos = this.bytesPos;
      var b;

      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad block header in flate stream');
      var blockLen = b;
      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad block header in flate stream');
      blockLen |= (b << 8);
      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad block header in flate stream');
      var check = b;
      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad block header in flate stream');
      check |= (b << 8);
      if (check != (~blockLen & 0xffff))
        error('Bad uncompressed block length in flate stream');

      this.codeBuf = 0;
      this.codeSize = 0;

      var bufferLength = this.bufferLength;
      var buffer = this.ensureBuffer(bufferLength + blockLen);
      var end = bufferLength + blockLen;
      this.bufferLength = end;
      for (var n = bufferLength; n < end; ++n) {
        if (typeof (b = bytes[bytesPos++]) == 'undefined') {
          this.eof = true;
          break;
        }
        buffer[n] = b;
      }
      this.bytesPos = bytesPos;
      return;
    }

    var litCodeTable;
    var distCodeTable;
    if (hdr == 1) { // compressed block, fixed codes
      litCodeTable = fixedLitCodeTab;
      distCodeTable = fixedDistCodeTab;
    } else if (hdr == 2) { // compressed block, dynamic codes
      var numLitCodes = this.getBits(5) + 257;
      var numDistCodes = this.getBits(5) + 1;
      var numCodeLenCodes = this.getBits(4) + 4;

      // build the code lengths code table
      var codeLenCodeLengths = Array(codeLenCodeMap.length);
      var i = 0;
      while (i < numCodeLenCodes)
        codeLenCodeLengths[codeLenCodeMap[i++]] = this.getBits(3);
      var codeLenCodeTab = this.generateHuffmanTable(codeLenCodeLengths);

      // build the literal and distance code tables
      var len = 0;
      var i = 0;
      var codes = numLitCodes + numDistCodes;
      var codeLengths = new Array(codes);
      while (i < codes) {
        var code = this.getCode(codeLenCodeTab);
        if (code == 16) {
          repeat(this, codeLengths, 2, 3, len);
        } else if (code == 17) {
          repeat(this, codeLengths, 3, 3, len = 0);
        } else if (code == 18) {
          repeat(this, codeLengths, 7, 11, len = 0);
        } else {
          codeLengths[i++] = len = code;
        }
      }

      litCodeTable =
        this.generateHuffmanTable(codeLengths.slice(0, numLitCodes));
      distCodeTable =
        this.generateHuffmanTable(codeLengths.slice(numLitCodes, codes));
    } else {
      error('Unknown block type in flate stream');
    }

    var buffer = this.buffer;
    var limit = buffer ? buffer.length : 0;
    var pos = this.bufferLength;
    while (true) {
      var code1 = this.getCode(litCodeTable);
      if (code1 < 256) {
        if (pos + 1 >= limit) {
          buffer = this.ensureBuffer(pos + 1);
          limit = buffer.length;
        }
        buffer[pos++] = code1;
        continue;
      }
      if (code1 == 256) {
        this.bufferLength = pos;
        return;
      }
      code1 -= 257;
      code1 = lengthDecode[code1];
      var code2 = code1 >> 16;
      if (code2 > 0)
        code2 = this.getBits(code2);
      var len = (code1 & 0xffff) + code2;
      code1 = this.getCode(distCodeTable);
      code1 = distDecode[code1];
      code2 = code1 >> 16;
      if (code2 > 0)
        code2 = this.getBits(code2);
      var dist = (code1 & 0xffff) + code2;
      if (pos + len >= limit) {
        buffer = this.ensureBuffer(pos + len);
        limit = buffer.length;
      }
      for (var k = 0; k < len; ++k, ++pos)
        buffer[pos] = buffer[pos - dist];
    }
  };

  return constructor;
})();

/**
 * JavaScript Polyfill functions for jsPDF
 * Collected from public resources by
 * https://github.com/diegocr
 */

(function (global) {
	var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	if (typeof global.btoa === 'undefined') {
		global.btoa = function(data) {
			//  discuss at: http://phpjs.org/functions/base64_encode/
			// original by: Tyler Akins (http://rumkin.com)
			// improved by: Bayron Guevara
			// improved by: Thunder.m
			// improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
			// improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
			// improved by: Rafal Kukawski (http://kukawski.pl)
			// bugfixed by: Pellentesque Malesuada
			//   example 1: base64_encode('Kevin van Zonneveld');
			//   returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='

			var o1,o2,o3,h1,h2,h3,h4,bits,i = 0,ac = 0,enc = '',tmp_arr = [];

			if (!data) {
				return data;
			}

			do { // pack three octets into four hexets
				o1 = data.charCodeAt(i++);
				o2 = data.charCodeAt(i++);
				o3 = data.charCodeAt(i++);

				bits = o1 << 16 | o2 << 8 | o3;

				h1 = bits >> 18 & 0x3f;
				h2 = bits >> 12 & 0x3f;
				h3 = bits >> 6 & 0x3f;
				h4 = bits & 0x3f;

				// use hexets to index into b64, and append result to encoded string
				tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
			} while (i < data.length);

			enc = tmp_arr.join('');

			var r = data.length % 3;

			return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
		};
	}

	if (typeof global.atob === 'undefined') {
		global.atob = function(data) {
			//  discuss at: http://phpjs.org/functions/base64_decode/
			// original by: Tyler Akins (http://rumkin.com)
			// improved by: Thunder.m
			// improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
			// improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
			//    input by: Aman Gupta
			//    input by: Brett Zamir (http://brett-zamir.me)
			// bugfixed by: Onno Marsman
			// bugfixed by: Pellentesque Malesuada
			// bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
			//   example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
			//   returns 1: 'Kevin van Zonneveld'

			var o1,o2,o3,h1,h2,h3,h4,bits,i = 0,ac = 0,dec = '',tmp_arr = [];

			if (!data) {
				return data;
			}

			data += '';

			do { // unpack four hexets into three octets using index points in b64
				h1 = b64.indexOf(data.charAt(i++));
				h2 = b64.indexOf(data.charAt(i++));
				h3 = b64.indexOf(data.charAt(i++));
				h4 = b64.indexOf(data.charAt(i++));

				bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

				o1 = bits >> 16 & 0xff;
				o2 = bits >> 8 & 0xff;
				o3 = bits & 0xff;

				if (h3 == 64) {
					tmp_arr[ac++] = String.fromCharCode(o1);
				} else if (h4 == 64) {
					tmp_arr[ac++] = String.fromCharCode(o1, o2);
				} else {
					tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
				}
			} while (i < data.length);

			dec = tmp_arr.join('');

			return dec;
		};
	}

	if (!Array.prototype.map) {
		Array.prototype.map = function(fun /*, thisArg */) {
			if (this === void 0 || this === null || typeof fun !== "function")
				throw new TypeError();

			var t = Object(this), len = t.length >>> 0, res = new Array(len);
			var thisArg = arguments.length > 1 ? arguments[1] : void 0;
			for (var i = 0; i < len; i++) {
				// NOTE: Absolute correctness would demand Object.defineProperty
				//       be used.  But this method is fairly new, and failure is
				//       possible only if Object.prototype or Array.prototype
				//       has a property |i| (very unlikely), so use a less-correct
				//       but more portable alternative.
				if (i in t)
					res[i] = fun.call(thisArg, t[i], i, t);
			}

			return res;
		};
	}


	if(!Array.isArray) {
		Array.isArray = function(arg) {
			return Object.prototype.toString.call(arg) === '[object Array]';
		};
	}

	if (!Array.prototype.forEach) {
		Array.prototype.forEach = function(fun, thisArg) {
			"use strict";

			if (this === void 0 || this === null || typeof fun !== "function")
				throw new TypeError();

			var t = Object(this), len = t.length >>> 0;
			for (var i = 0; i < len; i++) {
				if (i in t)
					fun.call(thisArg, t[i], i, t);
			}
		};
	}

	if (!Object.keys) {
		Object.keys = (function () {
			'use strict';

			var hasOwnProperty = Object.prototype.hasOwnProperty,
				hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
				dontEnums = ['toString','toLocaleString','valueOf','hasOwnProperty',
					'isPrototypeOf','propertyIsEnumerable','constructor'],
				dontEnumsLength = dontEnums.length;

			return function (obj) {
				if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
					throw new TypeError();
				}
				var result = [], prop, i;

				for (prop in obj) {
					if (hasOwnProperty.call(obj, prop)) {
						result.push(prop);
					}
				}

				if (hasDontEnumBug) {
					for (i = 0; i < dontEnumsLength; i++) {
						if (hasOwnProperty.call(obj, dontEnums[i])) {
							result.push(dontEnums[i]);
						}
					}
				}
				return result;
			};
		}());
	}

	if (!String.prototype.trim) {
		String.prototype.trim = function () {
			return this.replace(/^\s+|\s+$/g, '');
		};
	}
	if (!String.prototype.trimLeft) {
		String.prototype.trimLeft = function() {
			return this.replace(/^\s+/g, "");
		};
	}
	if (!String.prototype.trimRight) {
		String.prototype.trimRight = function() {
			return this.replace(/\s+$/g, "");
		};
	}

})(typeof self !== "undefined" && self || typeof window !== "undefined" && window || undefined);

return jsPDF;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ })
/******/ ]);