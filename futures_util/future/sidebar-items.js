initSidebarItems({"enum":[["Either","Combines two different futures, streams, or sinks having the same associated types into a single type."],["MaybeDone","A future that may have completed."],["TryMaybeDone","A future that may have completed with an error."]],"fn":[["err","Create a future that is immediately ready with an error value."],["join","Joins the result of two futures, waiting for them both to complete."],["join3","Same as `join`, but with more futures."],["join4","Same as `join`, but with more futures."],["join5","Same as `join`, but with more futures."],["lazy","Creates a new future that allows delayed execution of a closure."],["maybe_done","Wraps a future into a `MaybeDone`"],["ok","Create a future that is immediately ready with a success value."],["pending","Creates a future which never resolves, representing a computation that never finishes."],["poll_fn","Creates a new future wrapping around a function returning [`Poll`]."],["ready","Creates a future that is immediately ready with a value."],["select","Waits for either one of two differently-typed futures to complete."],["try_join","Joins the result of two futures, waiting for them both to complete or for one to produce an error."],["try_join3","Same as `try_join`, but with more futures."],["try_join4","Same as `try_join`, but with more futures."],["try_join5","Same as `try_join`, but with more futures."],["try_maybe_done","Wraps a future into a `TryMaybeDone`"],["try_select","Waits for either one of two differently-typed futures to complete."]],"struct":[["AndThen","Future for the `and_then` method."],["ErrInto","Future for the `err_into` method."],["Flatten","Future for the `flatten` method."],["FlattenStream","Stream for the `flatten_stream` method."],["Fuse","Future for the `fuse` method."],["FutureObj","A custom trait object for polling futures, roughly akin to `Box<dyn Future<Output = T> + Send + 'a>`."],["Inspect","Future for the `inspect` method."],["InspectErr","Future for the `inspect_err` method."],["InspectOk","Future for the `inspect_ok` method."],["IntoFuture","Future for the `into_future` method."],["IntoStream","Stream for the `into_stream` method."],["Join","Future for the `join` function."],["Join3","Future for the [`join3`] function."],["Join4","Future for the [`join4`] function."],["Join5","Future for the [`join5`] function."],["Lazy","Future for the [`lazy`] function."],["LocalFutureObj","A custom trait object for polling futures, roughly akin to `Box<dyn Future<Output = T> + 'a>`."],["Map","Future for the `map` method."],["MapErr","Future for the `map_err` method."],["MapInto","Future for the `map_into` combinator."],["MapOk","Future for the `map_ok` method."],["MapOkOrElse","Future for the `map_ok_or_else` method."],["NeverError","Future for the `never_error` combinator."],["OkInto","Future for the `ok_into` method."],["OptionFuture","A future representing a value which may or may not be present."],["OrElse","Future for the `or_else` method."],["Pending","Future for the [`pending()`] function."],["PollFn","Future for the [`poll_fn`] function."],["Ready","Future for the `ready` function."],["Select","Future for the [`select()`] function."],["Then","Future for the `then` method."],["TryFlatten","Future for the `try_flatten` method."],["TryFlattenStream","Future for the `try_flatten_stream` method."],["TryJoin","Future for the `try_join` function."],["TryJoin3","Future for the [`try_join3`] function."],["TryJoin4","Future for the [`try_join4`] function."],["TryJoin5","Future for the [`try_join5`] function."],["TrySelect","Future for the [`try_select()`] function."],["UnitError","Future for the `unit_error` combinator."],["UnwrapOrElse","Future for the `unwrap_or_else` method."]],"trait":[["FusedFuture","A future which tracks whether or not the underlying future should no longer be polled."],["Future","A future represents an asynchronous computation."],["FutureExt","An extension trait for `Future`s that provides a variety of convenient adapters."],["TryFuture","A convenience for futures that return `Result` values that includes a variety of adapters tailored to such futures."],["TryFutureExt","Adapters specific to [`Result`]-returning futures"],["UnsafeFutureObj","A custom implementation of a future trait object for `FutureObj`, providing a vtable with drop support."]]});