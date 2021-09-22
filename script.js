{"}"}

<script>




    <script type="text/javascript">

/**

        * Gets the value of the specified cookie.

        *

        * name  Name of the desired cookie.

        *

        * Returns a string containing value of specified cookie,

        *   or null if cookie does not exist.

        */

        function getCookie(name) { }

        var dc = document.cookie;

        var prefix = name + "=";

        var begin = dc.indexOf("; " + prefix);

        if (begin == -1) {begin = dc.indexOf(prefix)};

        if (begin != 0) return null;

    {"}"} else {begin += 2};

        {"}"}

        var end = document.cookie.indexOf(";", begin);

        if (end == -1) {end = dc.length};

        {"}"}

        return unescape(dc.substring(begin + prefix.length, end));

        {"}"}

    </script><script type="text/javascript">

/**

            * Deletes the specified cookie.

            *

            * name      name of the cookie

            * [path]    path of the cookie (must be same as path used to create cookie)

            * [domain]  domain of the cookie (must be same as domain used to create cookie)

            */

            function deleteCookie(name, path, domain) { }

            if (getCookie(name)) {document.cookie = name + "=" +

                ((path) ? "; path=" + path : "") +

                ((domain) ? "; domain=" + domain : "") +

                "; expires=Thu, 01-Jan-70 00:00:01 GMT"};

            {"}"}

            

        </script>
        </script>