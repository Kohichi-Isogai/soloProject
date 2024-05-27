import "./Friends.css";

const unAcquiredImg =
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5w726e-ADC9DDJdytCRtdPAHogCk3CLTNF-2N3RglZbTgf_Ad1-2N4rQngxYE8IeDlz0E-fhIJOsOGoisP-O1J66KVTFFs9DJ6b7Vd4YyXGkPWNFpmNn0Kl7IkiPhZcnomsfrnDYur4k/s800/figure_fighting_pose.png";

const Friend = (props) => {
  const { myFriends } = props;

  return (
    <div id="friendArea">
      {myFriends.map((friend, i) => (
        <img key={i} className="friend" src={friend.url} />
      ))}
      {myFriends.length < 1 && <img className="friend" src={unAcquiredImg} />}
      {myFriends.length < 2 && <img className="friend" src={unAcquiredImg} />}
      {myFriends.length < 3 && <img className="friend" src={unAcquiredImg} />}
    </div>
  );
};

export default Friend;
