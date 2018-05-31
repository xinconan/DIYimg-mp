Component({
  data: {
    url: '',
  },
  props: {
    class: '',
    src: '',
    errorSrc: '',
    mode: ''
  },
  methods: {
    onImgError(e) {
      this.setData({
        url: errorSrc
      })
    }
  },
});
