(function() {var implementors = {};
implementors["quick_xml"] = [{"text":"impl&lt;'de, 'a, R:&nbsp;BufRead&gt; Deserializer&lt;'de&gt; for &amp;'a mut Deserializer&lt;R&gt;","synthetic":false,"types":[]}];
implementors["serde_json"] = [{"text":"impl&lt;'de, 'a, R:&nbsp;Read&lt;'de&gt;&gt; Deserializer&lt;'de&gt; for &amp;'a mut Deserializer&lt;R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserializer&lt;'de&gt; for Value","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserializer&lt;'de&gt; for &amp;'de Value","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserializer&lt;'de&gt; for Number","synthetic":false,"types":[]},{"text":"impl&lt;'de, 'a&gt; Deserializer&lt;'de&gt; for &amp;'a Number","synthetic":false,"types":[]}];
implementors["serde_urlencoded"] = [{"text":"impl&lt;'de&gt; Deserializer&lt;'de&gt; for Deserializer&lt;'de&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()