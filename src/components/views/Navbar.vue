<template>
  <CNavbar expand="lg" color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded="{visible}"
        @click="visible = !visible"
      />
      <CCollapse class="navbar-collapse" :visible="visible">
        <CNavbarNav>
          <CNavItem>
            <CNavLink href="#" active> Performance </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" active> Booking </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" active> Calendar </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" active> Routines </CNavLink>
          </CNavItem>
          <CDropdown class="d-flex" variant="nav-item" :popper="false">
            <CDropdownToggle color="secondary">
              <img
                src="/abstract-user-flat-4.svg"
                alt=""
                width="22"
                height="24"
              />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Edit Profile</CDropdownItem>
              <CButton @click="signOut">Sign Out</CButton>
            </CDropdownMenu>
          </CDropdown>
        </CNavbarNav>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<script>
import {
  CNavbar,
  CNavItem,
  CDropdown,
  CNavbarNav,
  CNavbarToggler,
  CDropdownToggle,
  CContainer,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CNavLink,
} from "@coreui/vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from "@/firebase.js";
import router from "../../router";

export default {
  name: "NavBar",
  setup() {
    const store = useStore();
    const router = useRouter();
    auth.onAuthStateChanged((user) => {
      store.dispatch("fetchUser", user);
    });
    const user = computed(() => {
      return store.getters.user;
    });
    
    return { user };
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    async signOut() {
      await this.$store.dispatch("logOut");
      this.$router.push("/signin");
    }
  }
};
</script>
