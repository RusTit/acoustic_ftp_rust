(function() {var implementors = {};
implementors["arc_swap"] = [{"text":"impl&lt;T:&nbsp;PartialOrd&gt; PartialOrd&lt;ConstantDeref&lt;T&gt;&gt; for ConstantDeref&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;PartialOrd&gt; PartialOrd&lt;Constant&lt;T&gt;&gt; for Constant&lt;T&gt;","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl PartialOrd&lt;Bytes&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;[u8]&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Bytes&gt; for [u8]","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;str&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Bytes&gt; for str","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Vec&lt;u8&gt;&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Bytes&gt; for Vec&lt;u8&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;String&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Bytes&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; PartialOrd&lt;Bytes&gt; for &amp;'_ [u8]","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; PartialOrd&lt;Bytes&gt; for &amp;'_ str","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; PartialOrd&lt;&amp;'a T&gt; for Bytes <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Bytes: PartialOrd&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;[u8]&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for [u8]","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;str&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for str","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Vec&lt;u8&gt;&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for Vec&lt;u8&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;String&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; PartialOrd&lt;&amp;'a T&gt; for BytesMut <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BytesMut: PartialOrd&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; PartialOrd&lt;BytesMut&gt; for &amp;'_ [u8]","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; PartialOrd&lt;BytesMut&gt; for &amp;'_ str","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl PartialOrd&lt;HeaderValue&gt; for HeaderValue","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;str&gt; for HeaderValue","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;[u8]&gt; for HeaderValue","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;HeaderValue&gt; for str","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;HeaderValue&gt; for [u8]","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;String&gt; for HeaderValue","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;HeaderValue&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;HeaderValue&gt; for &amp;'a HeaderValue","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; PartialOrd&lt;&amp;'a T&gt; for HeaderValue <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;HeaderValue: PartialOrd&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;HeaderValue&gt; for &amp;'a str","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;StatusCode&gt; for StatusCode","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Authority&gt; for Authority","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;str&gt; for Authority","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Authority&gt; for str","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;Authority&gt; for &amp;'a str","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;&amp;'a str&gt; for Authority","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;String&gt; for Authority","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Authority&gt; for String","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PathAndQuery&gt; for PathAndQuery","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;str&gt; for PathAndQuery","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PathAndQuery&gt; for str","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;&amp;'a str&gt; for PathAndQuery","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;PathAndQuery&gt; for &amp;'a str","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;String&gt; for PathAndQuery","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;PathAndQuery&gt; for String","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Version&gt; for Version","synthetic":false,"types":[]}];
implementors["httpdate"] = [{"text":"impl PartialOrd&lt;HttpDate&gt; for HttpDate","synthetic":false,"types":[]}];
implementors["ipnet"] = [{"text":"impl PartialOrd&lt;IpAddrRange&gt; for IpAddrRange","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ipv4AddrRange&gt; for Ipv4AddrRange","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ipv6AddrRange&gt; for Ipv6AddrRange","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;IpNet&gt; for IpNet","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ipv4Net&gt; for Ipv4Net","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ipv6Net&gt; for Ipv6Net","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;IpSubnets&gt; for IpSubnets","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ipv4Subnets&gt; for Ipv4Subnets","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ipv6Subnets&gt; for Ipv6Subnets","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl PartialOrd&lt;Level&gt; for Level","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LevelFilter&gt; for Level","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LevelFilter&gt; for LevelFilter","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Level&gt; for LevelFilter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;Metadata&lt;'a&gt;&gt; for Metadata&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;MetadataBuilder&lt;'a&gt;&gt; for MetadataBuilder&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["mime"] = [{"text":"impl&lt;'a&gt; PartialOrd&lt;Name&lt;'a&gt;&gt; for Name&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Mime&gt; for Mime","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl PartialOrd&lt;PollOpt&gt; for PollOpt","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Ready&gt; for Ready","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;UnixReady&gt; for UnixReady","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Token&gt; for Token","synthetic":false,"types":[]}];
implementors["openssl"] = [{"text":"impl PartialOrd&lt;Asn1TimeRef&gt; for Asn1TimeRef","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Asn1Time&gt; for Asn1TimeRef","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;Asn1Time&gt; for &amp;'a Asn1TimeRef","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Asn1Time&gt; for Asn1Time","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Asn1TimeRef&gt; for Asn1Time","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;&amp;'a Asn1TimeRef&gt; for Asn1Time","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BigNumRef&gt; for BigNumRef","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BigNum&gt; for BigNumRef","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BigNum&gt; for BigNum","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BigNumRef&gt; for BigNum","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;CMSOptions&gt; for CMSOptions","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;OcspFlag&gt; for OcspFlag","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Pkcs7Flags&gt; for Pkcs7Flags","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SslOptions&gt; for SslOptions","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SslMode&gt; for SslMode","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SslVerifyMode&gt; for SslVerifyMode","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;SslSessionCacheMode&gt; for SslSessionCacheMode","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ExtensionContext&gt; for ExtensionContext","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ShutdownState&gt; for ShutdownState","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;X509CheckFlags&gt; for X509CheckFlags","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl PartialOrd&lt;Ident&gt; for Ident","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl PartialOrd&lt;Span&gt; for Span","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Position&gt; for Position","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Literal&gt; for Literal","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ClassUnicodeRange&gt; for ClassUnicodeRange","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ClassBytesRange&gt; for ClassBytesRange","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Utf8Sequence&gt; for Utf8Sequence","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Utf8Range&gt; for Utf8Range","synthetic":false,"types":[]}];
implementors["signal_hook_registry"] = [{"text":"impl PartialOrd&lt;SigId&gt; for SigId","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; PartialOrd&lt;SmallVec&lt;A&gt;&gt; for SmallVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: PartialOrd,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl PartialOrd&lt;Lifetime&gt; for Lifetime","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; PartialOrd&lt;ArrayVec&lt;A&gt;&gt; for ArrayVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: PartialOrd,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; PartialOrd&lt;TinyVec&lt;A&gt;&gt; for TinyVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: PartialOrd,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl PartialOrd&lt;Instant&gt; for Instant","synthetic":false,"types":[]}];
implementors["tokio_util"] = [{"text":"impl PartialOrd&lt;BytesCodec&gt; for BytesCodec","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LinesCodec&gt; for LinesCodec","synthetic":false,"types":[]}];
implementors["tracing_core"] = [{"text":"impl PartialOrd&lt;Level&gt; for Level","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LevelFilter&gt; for Level","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LevelFilter&gt; for LevelFilter","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Level&gt; for LevelFilter","synthetic":false,"types":[]}];
implementors["unicase"] = [{"text":"impl&lt;T:&nbsp;AsRef&lt;str&gt;&gt; PartialOrd&lt;Ascii&lt;T&gt;&gt; for Ascii&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;AsRef&lt;str&gt;&gt; PartialOrd&lt;UniCase&lt;T&gt;&gt; for UniCase&lt;T&gt;","synthetic":false,"types":[]}];
implementors["unicode_bidi"] = [{"text":"impl PartialOrd&lt;Level&gt; for Level","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl&lt;S:&nbsp;PartialOrd&gt; PartialOrd&lt;Host&lt;S&gt;&gt; for Host&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Url&gt; for Url","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()