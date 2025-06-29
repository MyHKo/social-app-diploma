package org.socialapp.Service;

import org.socialapp.model.Entity.UserEntity;
import org.socialapp.repository.UserRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;
import java.util.Collections;
import java.util.Optional;

@Service
public class CustomUserDetailsService  implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserEntity> userOptional = userRepository.findByUsername(username);

        if (userOptional.isPresent()) {
            UserEntity user = userOptional.get();


            if (user == null) {
                throw new UsernameNotFoundException("User Not Found with username: " + username);
            }

            SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_USER");

            return new org.springframework.security.core.userdetails.User(
                    user.getUsername(),
                    user.getPassword(),
                    Collections.singletonList(authority)
            );
        }
        else {
            throw new UsernameNotFoundException("User Not Found with username: " + username);
        }
    }
}
