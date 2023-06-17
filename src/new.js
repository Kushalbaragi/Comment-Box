useEffect(() => {
    if (sessionStorage.getItem("name")) {
      SetUserPopup(false);
      SetName(sessionStorage.getItem("name"));
    }
    let data = localStorage.getItem("data");
    if (localStorage.getItem("data")) {
      setComments(JSON.parse(data));
    } else {
      commentData().then((data) => setComments(data));
    }
  }, []);






  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(comments));
    return () => {
      localStorage.setItem("data", JSON.stringify(comments));
    };
  }, [comments]);