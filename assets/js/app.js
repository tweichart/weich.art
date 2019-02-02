import fontawesome from '@fortawesome/fontawesome'
import faXing from '@fortawesome/fontawesome-free-brands/faXing'
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'
import faCode from '@fortawesome/fontawesome-free-solid/faCode'

import Main from './main'

fontawesome.library.add(faXing, faLinkedinIn, faTwitter, faGithub, faPencilAlt, faCheck, faCode)

const main = new Main()
