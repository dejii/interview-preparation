var axios; // just me defining it, import it yourself

class Solution {
  async loginMethod() {
    const arr = [
      {
        email: "khairah@misses.me",
        password: "1234"
      },
      {
        email: "deji@example.com",
        password: "4567"
      }
    ];
    this.loading = true;
    for (const userData of arr) {
      try {
        const res = await axios.post("/login", userData);
      } catch (err) {}
    }
    this.loading = false;
  }
}
