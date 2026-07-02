package org.memo.backend;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.memo.backend.database.MemoRepository;
import org.memo.backend.database.UserRepository;
import org.memo.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@TestPropertySource(properties = "spring.datasource.url=jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1")
class MemoControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MemoRepository memoRepository;

    @BeforeEach
    void setUp() {
        memoRepository.deleteAll();
        userRepository.deleteAll();
    }

    @Test
    void createMemoWithJsonBodyReturnsCreated() throws Exception {
        User user = userRepository.save(new User());

        mockMvc.perform(post("/memo/{userId}", user.getUserId())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"quote\":\"Hello\",\"isVisible\":true,\"mediaId\":\"123\",\"link\":\"https://example.com\",\"creators\":[],\"owner\":null}"))
                .andExpect(status().isCreated());
    }
}
