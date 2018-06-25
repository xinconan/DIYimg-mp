Component({
  data: {
    url: '',
  },
  props: {
    className: '',
    src: '',
    errorSrc: '',
    mode: ''
  },
  methods: {
    onImgError() {
      this.setData({
        url: this.props.errorSrc
      })
    }
  },
});
