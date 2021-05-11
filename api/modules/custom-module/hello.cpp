#include <emscripten/emscripten.h>

extern "C"
{
    EMSCRIPTEN_KEEPALIVE unsigned int get_random_number()
    {
        return 42;
    }
}