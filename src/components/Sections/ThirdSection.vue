<template>
    <v-row class="d-flex align-center justify-center my-md-10">
        <v-col cols="auto" class="w-100">
            <h1>FAQ Section</h1>
            <p class="mt-md-2 mb-md-5 mt-sm-2 mb-sm-2 mb-2">Get answers to common questions about cybersecurity audits
                and how SecureAudit
                safeguards your business.</p>
            <div class="mt-md-8 mt-4 block-wrapper d-flex flex-md-row flex-column justify-space-between align-center gr-3">
                <div class="d-flex flex-column gr-3">
                    <div>
                        <h1>What is a cybersecurity audit?
                        </h1>
                        <p>A cybersecurity audit is a comprehensive review of an organization's information system to
                            ensure
                            it meets security standards.</p>
                    </div>
                    <div>
                        <h1>What does the audit cover?</h1>
                        <p>Our audits examine your security policies, controls, and systems, identifying vulnerabilities
                            and
                            providing solutions.</p>
                    </div>
                </div>
                <div class="d-flex flex-column gr-3">
                    <div>
                        <h1>How often should we audit?
                        </h1>
                        <p>Cybersecurity threats evolve rapidly, so we recommend a security audit at least annually, or
                            as
                            compliance dictates.</p>
                    </div>
                    <div>
                        <h1>Is my data safe during an audit?</h1>
                        <p>Yes, protecting your data is our top priority. All information is kept confidential and
                            secure
                            throughout the audit process.</p>
                    </div>
                </div>

            </div>

        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
@import '@/styles/mixins.scss';


.v-col {
    text-align: start;
}

h1 {
    font-size: 40px;
    font-weight: 700;
}

p {
    font-size: 20px;
    line-height: 24px;
}

.block-wrapper {
    div {
        width: 100%;
        max-width: 400px;
    }

    &>div>div>h1 {
        font-size: 20px;
        font-weight: 500;
    }

    &>div>div>p {
        font-size: 18px;
        line-height: 24px;
    }

}

@include mq('tablet') {
    .block-wrapper {
        div {
            max-width: none;
        }
    }
}
</style>