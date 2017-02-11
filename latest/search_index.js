var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#HTTP.jl-Documentation-1",
    "page": "Home",
    "title": "HTTP.jl Documentation",
    "category": "section",
    "text": "HTTP.jl provides a pure Julia library for HTTP functionality."
},

{
    "location": "index.html#Requests-1",
    "page": "Home",
    "title": "Requests",
    "category": "section",
    "text": "Note that the HTTP methods of POST, DELETE, PUT, etc. all follow the same format as HTTP.get, documented below.HTTP.get\nHTTP.send!\nHTTP.Client\nHTTP.Connection"
},

{
    "location": "index.html#HTTP.Request",
    "page": "Home",
    "title": "HTTP.Request",
    "category": "Type",
    "text": "A type representing an HTTP request.\n\n\n\n"
},

{
    "location": "index.html#HTTP.Response",
    "page": "Home",
    "title": "HTTP.Response",
    "category": "Type",
    "text": "A type representing an HTTP response.\n\n\n\n"
},

{
    "location": "index.html#HTTP.Cookies.Cookie",
    "page": "Home",
    "title": "HTTP.Cookies.Cookie",
    "category": "Type",
    "text": "`Cookie()`\n`Cookie(; kwargs...)`\n`Cookie(name, value; kwargs...)`\n\nA Cookie represents an HTTP cookie as sent in the Set-Cookie header of an HTTP response or the Cookie header of an HTTP request. Supported fields (which can be set using keyword arguments) include:\n\nname: name of the cookie\nvalue: value of the cookie\npath: applicable path for the cookie\ndomain: applicable domain for the cookie\nexpires: a DateTime representing when the cookie should expire\nmaxage: maxage == 0 means no max age, maxage < 0 means delete cookie now, max age > 0 means the # of seconds until expiration\nsecure::Bool: secure cookie attribute\nhttponly::Bool: httponly cookie attribute\nhostonly::Bool: hostonly cookie attribute\n\nSee http:#tools.ietf.org/html/rfc6265 for details.\n\n\n\n"
},

{
    "location": "index.html#HTTP.URI",
    "page": "Home",
    "title": "HTTP.URI",
    "category": "Type",
    "text": "HTTP.URI(host; userinfo=\"\", path=\"\", query=\"\", fragment=\"\", isconnect=false)\nHTTP.URI(; scheme=\"\", hostname=\"\", port=\"\", ...)\nparse(HTTP.URI, str::String; isconnect=false)\n\nA type representing a valid uri. Can be constructed from distinct parts using the various supported keyword arguments. With a raw, already-encoded uri string, use parse(HTTP.URI, str) to parse the HTTP.URI directly. The HTTP.URI constructors will automatically escape any provided query arguments, typically provided as \"key\"=>\"value\"::Pair or Dict(\"key\"=>\"value\"). Note that multiple values for a single query key can provided like Dict(\"key\"=>[\"value1\", \"value2\"]).\n\nFor efficiency, the internal representation is stored as a set of offsets and lengths to the various uri components. To access and return these components as strings, use the various accessor methods:\n\nHTTP.scheme: returns the scheme (if any) associated with the uri\nHTTP.userinfo: returns the userinfo (if any) associated with the uri\nHTTP.hostname: returns the hostname only of the uri\nHTTP.port: returns the port of the uri; will return \"80\" or \"443\" by default if the scheme is \"http\" or \"https\", respectively\nHTTP.host: returns the \"hostname:port\" combination\nHTTP.path: returns the path for a uri\nHTTP.query: returns the query for a uri\nHTTP.fragment: returns the fragment for a uri\nHTTP.resource: returns the path-query-fragment combination\n\n\n\n"
},

{
    "location": "index.html#HTTP.FIFOBuffer",
    "page": "Home",
    "title": "HTTP.FIFOBuffer",
    "category": "Type",
    "text": "A FIFOBuffer is a first-in, first-out, in-memory, async-friendly IO buffer type\n\nConstructors:     FIFOBuffer([max::Integer])     FIFOBuffer(string_or_bytes_vector)     FIFOBuffer(io::IO)\n\nFIFOBuffer([max]): creates a FIFOBuffer with a maximum size of max; this means that bytes can be written up until max number of bytes have been written (with none being read). At this point, the FIFOBuffer is full and will return 0 for all subsequent writes. If no max argument is given, then a default size of typemax(Int32)^2 is used; this essentially allows all writes every time.\n\nReading is supported via readavailable(f) and read(f, nb), which returns all or nb bytes, respectively, starting at the earliest bytes written.\n\nYou may call String(f::FIFOBuffer) to view the current contents in the buffer without consuming them.\n\nA FIFOBuffer is built to be used asynchronously to allow buffered reading and writing. In particular, a FIFOBuffer detects if it is being read from/written to the main task, or asynchronously, and will behave slightly differently depending on which.\n\nSpecifically, when reading from a FIFOBuffer, if accessed from the main task, it will not block if there are no bytes available to read, instead returning an empty UInt8[]. If being read from asynchronously, however, reading will block until additional bytes have been written. An example of this in action is:\n\nf = HTTP.FIFOBuffer(5) # create a FIFOBuffer that will hold at most 5 bytes, currently empty\nf2 = HTTP.FIFOBuffer(5) # a 2nd buffer that we'll write to asynchronously\n\n# start an asynchronous writing task with the 2nd buffer\ntsk = @async begin\n    while !eof(f)\n        write(f2, readavailable(f))\n    end\nend\n\n# now write some bytes to the first buffer\n# writing triggers our async task to wake up and read the bytes we just wrote\n# leaving the first buffer empty again and blocking again until more bytes have been written\nwrite(f, [0x01, 0x02, 0x03, 0x04, 0x05])\n\n# we can see that `f2` now holds the bytes we wrote to `f`\nString(readavailable(f2))\n\n# our async task will continue until `f` is closed\nclose(f)\n\nistaskdone(tsk) # true\n\n\n\n"
},

{
    "location": "index.html#HTTP-Types-1",
    "page": "Home",
    "title": "HTTP Types",
    "category": "section",
    "text": "HTTP.Request\nHTTP.Response\nHTTP.Cookie\nHTTP.URI\nHTTP.FIFOBuffer"
},

{
    "location": "index.html#HTTP-Utilities-1",
    "page": "Home",
    "title": "HTTP Utilities",
    "category": "section",
    "text": "HTTP.parse\nHTTP.escape\nHTTP.unescape\nHTTP.userinfo\nHTTP.splitpath\nHTTP.isvalid\nHTTP.sniff"
},

]}
