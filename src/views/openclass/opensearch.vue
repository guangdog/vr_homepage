<template>
	<div id="">
		<div class="search bar6">
	    <form>
	      <input type="text" placeholder="请输入您要搜索的课程名称">
	      <button type="submit">搜索</button>
	    </form>
	  </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
	div.search {padding: 30px 0px;}
	form {
    position: relative;
    width: 1000px;
    margin: 0 auto;
  }

  input, button {
    border: none;
    outline: none;
  }

  input {
    width: 100%;
    height: 45px;
    padding-left: 13px;
  }

  button {
    height: 45px;
    width: 70px;
    cursor: pointer;
    position: absolute;
  }

  .bar6 input {
    border: 2px solid #c5464a;
    border-radius: 5px;
    background: transparent;
    top: 0;
    right: 0;
  }
  .bar6 button {
    background: #c5464a;
    border-radius: 5px;
    width: 80px;
    top: 0;
    right: 0;
    font-size: 13px;
    color: #F9F0DA;
  }
</style>