<router-view class="view"  transition="fade" transition-mode="out-in" keep-alive></router-view>
.view {
  transition: all .5s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
  // transform: translate3d(20px, 0, 0);
}