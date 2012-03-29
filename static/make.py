#!/usr/bin/env python

import sys
import os
import stat

def main():
    base = os.path.dirname(sys.argv[0])
    destfile = os.path.join(base, '..', 'fix')

    # no error checking, because if there are problems I want people to
    # report them
    css  = open(os.path.join(base, 'page.css')).read()
    js   = open(os.path.join(base, 'page.js')).read()
    bash = open(os.path.join(base, 'fix.template')).read()


    fh = open(destfile, 'w')
    fh.write(bash % {'css': css, 'js': js})
    fh.close()

    # chmod $destfile 755
    os.chmod(destfile,
             stat.S_IRUSR | stat.S_IWUSR | stat.S_IXUSR |
             stat.S_IRGRP | stat.S_IXGRP | stat.S_IROTH | stat.S_IXOTH)


if __name__ == "__main__":
    try:
        main()
    except Exception, e:
        print "There has been a problem!"
        print "Please email the following to me at quodlibetor@gmail.com:"
        print str(e)
