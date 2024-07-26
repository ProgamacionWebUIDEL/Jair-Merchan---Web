import {getImageUrl} from './utils.js'

function Avatar({ person,size }) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        width={size}
        height={size}
      />
    );
  }


export default function Profile() {
    return (
      <Avatar
      size={100}
      person={{ 
        name: 'Katsuko Saruhashi', 
        imageId: 'YfeOqp2'
      }}
      />

    );
  }
  