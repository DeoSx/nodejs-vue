<template>
  <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="center">
        <router-link tag="li" to="/" active-class="active" exact
          ><a href="#">Home</a></router-link
        >
        <router-link tag="li" to="/create" active-class="active" exact
          ><a href="#">Create</a></router-link
        >
      </ul>
    </div>
  </nav>
</template>

<script></script>

<style lang="sass" scoped>
nav
	padding: 0 20px
</style>
