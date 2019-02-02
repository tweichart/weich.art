class Main {
    constructor () {
        this.ageCnt = null
        this.bind()
    }

    bind () {
        $('main').on('scroll', (e) => {
            this.onScroll(e, $(e.currentTarget))
        })
        $('#contact form').on('submit', (e) => {
            this.onSubmit(e, $(e.currentTarget))
        })
        $('body').bootstrapMaterialDesign()
        $('main').scrollspy({
            target: '#navigation',
            offset: $('header').height(),
        })
        $(document).ready(() => {
            this.onReady()
        })
    }

    calculateAge (birthday) {
        let ageDifMs = Date.now() - birthday.getTime()
        let ageDate = new Date(ageDifMs)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    //credit: https://medium.com/talk-like/detecting-if-an-element-is-in-the-viewport-jquery-a6a4405a3ea2
    isInViewport ($el, offset = 0) {
        let elementTop = $el.offset().top
        let elementBottom = elementTop + $el.outerHeight()
        let viewportTop = $(window).scrollTop() - offset
        let viewportBottom = viewportTop + $(window).height()
        return elementBottom > viewportTop && elementTop < viewportBottom
    }

    countUpElement (el, start, end) {
        let cnt = new CountUp('age', start, end, 0, 2, {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
        })
        if (!cnt.error) {
            cnt.start()
        }
        return cnt
    }

    onReady () {
        let hash = window.location.hash.substring(1)
        if (hash !== '') {
            let $el = $('#' + hash)
            if ($el.length > 0) {
                $('main').scrollTop($el.position().top - $('header').height())
            }
        }
    }

    onSubmit (e, $el) {
        e.preventDefault()
        $el.button('loading')
        let data = {}
        const vals = $el.serializeArray()
        $.each(vals, (i, v) => {
            data[v.name] = v.value
        })
        $.post('/', data).done(() => {
            $('#contact form div.alert').
                removeClass('alert-danger').
                addClass('alert-success').
                text('E-Mail has been sent successfully. Thank you and see you soon!').
                parent().show()
        }).fail(() => {
            $('#contact form div.alert').
                removeClass('alert-success').
                addClass('alert-danger').
                html('Could not send e-mail via contact form. Click <a href="mailto:mail@tobias-weichart.de">here</a>' +
                    ' to try it via external e-mail programm.').
                parent().show()
        }).always(() => {
            $el.button('reset')
            let $main = $('main').get(0)
            $main.scrollTop = $main.scrollHeight
        })
    }

    onScroll (e, $el) {
        $('.timeline div.card').each((i, v) => {
            let $v = $(v)
            if (!this.isInViewport($v, 250) || $v.css('left') < '-' + ($(window).width() / 2) + 'px') {
                return
            }
            $v.addClass('in')
        })
        let $age = $('#age')
        if (this.ageCnt === null && this.isInViewport($age)) {
            let dob = this.calculateAge(new Date('1989-02-11T19:00:00'))
            let age = parseInt($age.text())
            this.ageCnt = setTimeout(() => {
                this.countUpElement('age', age, dob)
            }, 2000)
        }
    }
}

export default Main
