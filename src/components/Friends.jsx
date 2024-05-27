import "./Friends.css";

const Friend = () => {
  const getFriends = async () => {
    const friend = await fetch("/api/friends", {
      method: "GET",
    });
    const friendData = await friend.json();
    console.log(friendData);
  };
  getFriends();
  return (
    <div id="friendArea">
      <img
        className="friend"
        src="https://blogger.googleusercontent.com/img/a/AVvXsEjyeJgJIrzCF5Ck3iDJAS25qLd7P02PixI-UWNgtSyq5YHPa9v5ngQgeJIjoRypNDVpQrAyKh3I4EZnFXMAgQIrsDfF5dCTNY_VPrOmkNWO18doT6xehVo70halIYqycSTnfxjffLXgcrGmRu-F4KweGragY9pRkKtvB40s7FrvuI4sUD0XRRkqh0pltw=s805"
      />
      <img
        className="friend"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5w726e-ADC9DDJdytCRtdPAHogCk3CLTNF-2N3RglZbTgf_Ad1-2N4rQngxYE8IeDlz0E-fhIJOsOGoisP-O1J66KVTFFs9DJ6b7Vd4YyXGkPWNFpmNn0Kl7IkiPhZcnomsfrnDYur4k/s800/figure_fighting_pose.png"
      />
      <img
        className="friend"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5w726e-ADC9DDJdytCRtdPAHogCk3CLTNF-2N3RglZbTgf_Ad1-2N4rQngxYE8IeDlz0E-fhIJOsOGoisP-O1J66KVTFFs9DJ6b7Vd4YyXGkPWNFpmNn0Kl7IkiPhZcnomsfrnDYur4k/s800/figure_fighting_pose.png"
      />
    </div>
  );
};

export default Friend;
